import { Request, Response } from "express";
import {
  verifyPayment,
  extractReferenceFromRequest,
  initializeFacilityPayment,
  initializeFoodFacilityPayment,
  getInsightTagValue,
} from "../../../utils/credo";
import { Config } from "../../../config/config";
import { PrismaClient } from "../../../models";
import { sendPaymentEmail, sendReceiptEmail } from "../../../utils/emailSender";
import { expiryDate } from "../../../utils/functions";
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

export async function initializePaymentHandler(
  request: Request,
  response: Response
) {
  try {
    const { facility_name, phone_number, amount, category, email } =
      request.body;
    if (category == null) {
      return response.status(400).json({ message: `Category is required` });
    }

    if (category == "Three_star_hotel" || category == "Fine_dining") {
      if (amount !== 25000) {
        return response
          .status(400)
          .json({ message: `${category}s are meant to pay NGN25k` });
      }
    } else if (
      category == "Regular" ||
      category == "Motel" ||
      category == "Casual_dining"
    ) {
      if (amount !== 20000) {
        return response
          .status(400)
          .json({ message: `${category}s are meant to pay NGN20k` });
      }
    } else if (
      category == "Cafes_and_Bistros" ||
      category == "Buffet" ||
      category == "Fast_food"
    ) {
      if (amount !== 15000) {
        return response
          .status(400)
          .json({ message: `${category}s are meant to pay NGN15k` });
      }
    } else {
      return response
        .status(400)
        .json({ message: "Could not Identify the medical type" });
    }
    const payamount = amount * 100;
    const type_of_payment = "Registration Payment of Food Handler Facility";
    const type = category;
    const callback_url = Config.credoFoodFacilityCallback;
    if (!callback_url) {
      return response
        .status(400)
        .json({ message: "Callback Can't be undefined" });
    }
    const paymentInfo = await initializeFoodFacilityPayment(
      facility_name,
      phone_number,
      payamount,
      email,
      type,
      type_of_payment,
      category,
      callback_url
    );
    await sendPaymentEmail(email, paymentInfo, facility_name);
    response.json({ data: paymentInfo });
  } catch (error) {
    console.log(error);
  }
}

export async function verifyPaymentHandler(
  request: Request,
  response: Response
) {
  try {
    const reference = extractReferenceFromRequest(request);
    if (typeof reference !== "string") {
      throw new Error("Reference is not a string");
    }

    const paymentDetails = await verifyPayment(reference);
    console.log(getInsightTagValue("amount", paymentDetails.metadata));
    const paymentStatus = paymentDetails.status;
    const paymentReference = paymentDetails.transRef;
    const facility_name = await getInsightTagValue(
      "facility_name",
      paymentDetails.metadata
    );
    const email = await getInsightTagValue("email", paymentDetails.metadata);
    const paidamount = await getInsightTagValue(
      "amount",
      paymentDetails.metadata
    );
    const phone_number = await getInsightTagValue(
      "phone_number",
      paymentDetails.metadata
    );
    const type = await getInsightTagValue("type", paymentDetails.metadata);
    const type_of_payment = await getInsightTagValue(
      "type_of_payment",
      paymentDetails.metadata
    );

    const amount = (paidamount / 100).toString();

    const facility = await prisma.facility_payment.findUnique({
      where: { reference },
    });
    if (facility) {
      return response
        .status(200)
        .json({ message: "Payment was Successful", facility: facility });
    }

    const payment = await prisma.facility_payment.create({
      data: {
        facility_name,
        email,
        amount,
        phone_number,
        type,
        type_of_payment,
        reference: paymentReference,
        status: "Paid",
      },
    });

    await sendReceiptEmail(
      payment.email,
      paymentDetails,
      facility_name,
      paymentReference
    );

    return response
      .status(200)
      .json({ message: "Payment was Successful", facility: payment });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Internal server error" });
  }
}
