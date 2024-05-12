import { Request, Response } from 'express';
import { verifyPayment, extractReferenceFromRequest, initializeFacilityPayment } from '../../../utils/paystack';
import { Config } from '../../../config/config';
import { PrismaClient } from '../../../models';
import { sendFacilityPaymentEmail, sendReceiptEmail } from '../../../utils/emailSender';
import { expiryDate } from '../../../utils/functions';
import { body, validationResult } from 'express-validator';
import { facility_price_list_service } from '../../../services/calculatePrice';

const prisma = new PrismaClient();

export async function initializePaymentHandler(request: Request, response: Response) {
  try {
    const { facility_name, phone_number, amount, facility_type, email } = request.body;

    const verifyPrice = await facility_price_list_service(facility_type, null)
    if (amount !== verifyPrice.applicationFee) {
      return response.status(400).json({ message: `${facility_type}'s are meant to pay NGN${verifyPrice.applicationFee}` });
    }
    
    const payamount = amount * 100
    const type_of_payment ="Application Form For Facility Registration"
    const callback_url = Config.paystackFacilityCallback
    if (!callback_url) {
      return response.status(400).json({message: "Callback Can't be undefined"});
    }
    const paymentInfo = await initializeFacilityPayment(facility_name, phone_number, payamount, email, facility_type, type_of_payment, callback_url);
    await sendFacilityPaymentEmail(email, paymentInfo, facility_name)
    response.json({ data: paymentInfo });
  } catch (error) {
    console.log(error)
  }
}

export async function verifyPaymentHandler(request: Request, response: Response) {
  try {
    const reference = extractReferenceFromRequest(request);
    if (typeof reference !== 'string') {
      throw new Error('Reference is not a string');
    }
    
    const paymentDetails = await verifyPayment(reference);
    const paymentStatus = paymentDetails.status;
    const paymentReference = paymentDetails.reference;
    const facility_name = paymentDetails.metadata.facility_name;
    const email = paymentDetails.metadata.email;
    const paidamount = paymentDetails.metadata.amount;
    const phone_number = paymentDetails.metadata.phone_number;
    const type = paymentDetails.metadata.type;
    const type_of_payment = paymentDetails.metadata.type_of_payment;

    const amount = (paidamount / 100).toString();

    const facility = await prisma.facility_payment.findUnique({ where: { reference } })
    if (facility) {
      return response.status(200).json({ message: 'Payment was Successful', facility:facility });
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
        status: 'Paid'
      }
    });
    
    await sendReceiptEmail(payment.email, paymentDetails, paymentReference)
    
    return response.status(200).json({ message: 'Payment was Successful', facility:payment });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Internal server error' });
  }
}

