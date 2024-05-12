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
        const { facility_name, phone_number, amount, facility_type, email } = request.body;
        // if(amount !== 15000){
        //   return response.status(400).json({ message: "Registration amount is NGN15k"})
        // }
        if (facility_type === "Specialist_hospital" || facility_type === "Specialist_clinic" || facility_type === "General_hospital" || facility_type === "Outpatient_medical_clinic") {
            if (amount !== 20000) {
                return response.status(400).json({ message: `${facility_type}s are meant to pay NGN20k` });
            }
        }
        else if (facility_type === "Maternity_home" || facility_type === "Physiotherapy_center" || facility_type === "Ultrasound" || facility_type === "Dental_center" || facility_type === "Eye_center" || facility_type === "Grade_1_medical_lab" || facility_type === "Specialist_eye_hospital" || facility_type === "Mortuary" || facility_type === "Grade_2_medical_lab" || facility_type === "Eye_clinic" || facility_type === "Radiotherapy_center" || facility_type === "Xray_center" || facility_type === "Dental_clinic" || facility_type === "Grade_3_medical_lab" || facility_type === "Grade_4_medical_lab") {
            if (amount !== 15000) {
                return response.status(400).json({ message: `${facility_type}s are meant to pay NGN15k` });
            }
        }
        else {
            return response.status(400).json({ message: 'Unidentified Facility Type' });
        }
        const payamount = amount * 100;
        const type_of_payment = "Application Form For Facility Registration";
        const callback_url = config_1.Config.paystackFacilityCallback;
        if (!callback_url) {
            return response.status(400).json({ message: "Callback Can't be undefined" });
        }
        const paymentInfo = await (0, paystack_1.initializeFacilityPayment)(facility_name, phone_number, payamount, email, facility_type, type_of_payment, callback_url);
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
