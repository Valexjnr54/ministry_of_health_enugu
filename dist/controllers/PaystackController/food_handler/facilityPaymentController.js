"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPaymentHandler = exports.initializePaymentHandler = void 0;
const paystack_1 = require("../../../utils/paystack");
const config_1 = require("../../../config/config");
const models_1 = require("../../../models");
const emailSender_1 = require("../../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function initializePaymentHandler(request, response) {
    try {
        const { facility_name, phone_number, amount, category, email } = request.body;
        if (category == null) {
            return response.status(400).json({ message: `Category is required` });
        }
        if (category == "Three_star_hotel" || category == "Fine_dining") {
            if (amount !== 25000) {
                return response.status(400).json({ message: `${category}s are meant to pay NGN25k` });
            }
        }
        else if (category == "Regular" || category == "Motel" || category == "Casual_dining") {
            if (amount !== 20000) {
                return response.status(400).json({ message: `${category}s are meant to pay NGN20k` });
            }
        }
        else if (category == "Cafes_and_Bistros" || category == "Buffet" || category == "Fast_food") {
            if (amount !== 15000) {
                return response.status(400).json({ message: `${category}s are meant to pay NGN15k` });
            }
        }
        else {
            return response.status(400).json({ message: "Could not Identify the medical type" });
        }
        const payamount = amount * 100;
        const type_of_payment = "Registration Payment of Food Handler Facility";
        const type = category;
        const callback_url = config_1.Config.paystackFoodFacilityCallback;
        if (!callback_url) {
            return response.status(400).json({ message: "Callback Can't be undefined" });
        }
        const paymentInfo = await (0, paystack_1.initializeFoodFacilityPayment)(facility_name, phone_number, payamount, email, type, type_of_payment, category, callback_url);
        await (0, emailSender_1.sendPaymentEmail)(email, paymentInfo, facility_name);
        response.json({ data: paymentInfo });
    }
    catch (error) {
        console.log(error);
    }
}
exports.initializePaymentHandler = initializePaymentHandler;
async function verifyPaymentHandler(request, response) {
    try {
        const reference = (0, paystack_1.extractReferenceFromRequest)(request);
        if (typeof reference !== 'string') {
            throw new Error('Reference is not a string');
        }
        const paymentDetails = await (0, paystack_1.verifyPayment)(reference);
        const paymentStatus = paymentDetails.status;
        const paymentReference = paymentDetails.reference;
        const facility_name = paymentDetails.metadata.facility_name;
        const email = paymentDetails.metadata.email;
        const paidamount = paymentDetails.metadata.amount;
        const phone_number = paymentDetails.metadata.phone_number;
        const type = paymentDetails.metadata.type;
        const type_of_payment = paymentDetails.metadata.type_of_payment;
        const amount = (paidamount / 100).toString();
        const facility = await prisma.facility_payment.findUnique({ where: { reference } });
        if (facility) {
            return response.status(200).json({ message: 'Payment was Successful', facility: facility });
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
        await (0, emailSender_1.sendReceiptEmail)(payment.email, paymentDetails, paymentReference);
        return response.status(200).json({ message: 'Payment was Successful', facility: payment });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
exports.verifyPaymentHandler = verifyPaymentHandler;
