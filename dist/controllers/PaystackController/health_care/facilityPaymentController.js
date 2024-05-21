"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPaymentHandler = exports.initializePaymentHandler = void 0;
const credo_1 = require("../../../utils/credo");
const config_1 = require("../../../config/config");
const models_1 = require("../../../models");
const emailSender_1 = require("../../../utils/emailSender");
const calculatePrice_1 = require("../../../services/calculatePrice");
const prisma = new models_1.PrismaClient();
async function initializePaymentHandler(request, response) {
    try {
        const { facility_name, phone_number, amount, facility_type, email } = request.body;
        const verifyPrice = await (0, calculatePrice_1.facility_price_list_service)(facility_type, null);
        if (amount !== verifyPrice.applicationFee) {
            return response.status(400).json({
                message: `${facility_type}'s are meant to pay NGN${verifyPrice.applicationFee}`,
            });
        }
        const payamount = amount * 100;
        const type_of_payment = "Application Form For Facility Registration";
        const callback_url = config_1.Config.credoFacilityCallback;
        if (!callback_url) {
            return response
                .status(400)
                .json({ message: "Callback Can't be undefined" });
        }
        const paymentInfo = await (0, credo_1.initializeFacilityPayment)(facility_name, phone_number, payamount, email, facility_type, type_of_payment, callback_url);
        await (0, emailSender_1.sendFacilityPaymentEmail)(email, paymentInfo, facility_name);
        response.json({ data: paymentInfo });
    }
    catch (error) {
        console.log(error);
    }
}
exports.initializePaymentHandler = initializePaymentHandler;
async function verifyPaymentHandler(request, response) {
    try {
        const reference = (0, credo_1.extractReferenceFromRequest)(request);
        if (typeof reference !== "string") {
            throw new Error("Reference is not a string");
        }
        const paymentDetails = await (0, credo_1.verifyPayment)(reference);
        const paymentStatus = paymentDetails.status;
        const paymentReference = paymentDetails.transRef;
        const facility_name = await (0, credo_1.getInsightTagValue)("facility_name", paymentDetails.metadata);
        const email = await (0, credo_1.getInsightTagValue)("email", paymentDetails.metadata);
        const paidamount = await (0, credo_1.getInsightTagValue)("amount", paymentDetails.metadata);
        const phone_number = await (0, credo_1.getInsightTagValue)("phone_number", paymentDetails.metadata);
        const type = await (0, credo_1.getInsightTagValue)("type", paymentDetails.metadata);
        const type_of_payment = await (0, credo_1.getInsightTagValue)("type_of_payment", paymentDetails.metadata);
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
        await (0, emailSender_1.sendReceiptEmail)(payment.email, paymentDetails, facility_name, paymentReference);
        return response
            .status(200)
            .json({ message: "Payment was Successful", facility: payment });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Internal server error" });
    }
}
exports.verifyPaymentHandler = verifyPaymentHandler;
