"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRenewalPaymentHandler = exports.initializeRenewalPaymentHandler = exports.verifyPaymentHandler = exports.initializePaymentHandler = void 0;
const paystack_1 = require("../../../utils/paystack");
const config_1 = require("../../../config/config");
const models_1 = require("../../../models");
const express_validator_1 = require("express-validator");
const functions_1 = require("../../../utils/functions");
const emailSender_1 = require("../../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function initializePaymentHandler(request, response) {
    try {
        const { fullname, phone_number, amount, type, email } = request.body;
        if (type == 'Doctor' || type == 'Dentist') {
            if (amount !== 25000) {
                return response.status(400).json({ message: `${type}s are meant to pay NGN25k` });
            }
        }
        else if (type == 'Nurse' || type == 'Mid_wife' || type == 'Community_health_worker' || type == 'Emergency_medical_technician') {
            if (amount !== 12500) {
                return response.status(400).json({ message: `${type}s are meant to pay NGN12.5k` });
            }
        }
        else if (type == 'Pharmacist' || type == 'Radiographer' || type == 'Lab_Scientist' || type == 'Optometrist' || type == 'Physiotherapist' || type == 'Psychiatrist') {
            if (amount !== 15000) {
                return response.status(400).json({ message: `${type}s are meant to pay NGN15k` });
            }
        }
        else {
            return response.status(400).json({ message: "Could not Identify the medical type" });
        }
        const checkemail = await prisma.users.findUnique({ where: { email } });
        if (checkemail) {
            return response.status(400).json({ message: "E-mail address already exist" });
        }
        const checkphone_number = await prisma.users.findUnique({ where: { phone_number } });
        if (checkphone_number) {
            return response.status(400).json({ message: "Phone Number already exist" });
        }
        const payamount = amount * 100;
        const callback_url = config_1.Config.paystackPersonnelCallback;
        if (!callback_url) {
            return response.status(400).json({ message: "Callback Can't be undefined" });
        }
        const type_of_payment = `Registration Payment of Health Care Personnel`;
        const paymentInfo = await (0, paystack_1.initializePayment)(fullname, phone_number, payamount, email, type, type_of_payment, callback_url);
        await (0, emailSender_1.sendPaymentEmail)(email, paymentInfo, fullname);
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
        const fullname = paymentDetails.metadata.fullname;
        const email = paymentDetails.metadata.email;
        const paidamount = paymentDetails.metadata.amount;
        const phone_number = paymentDetails.metadata.phone_number;
        const type = paymentDetails.metadata.type;
        const type_of_payment = paymentDetails.metadata.type_of_payment;
        const amount = (paidamount / 100).toString();
        const user = await prisma.personnel_payment.findUnique({ where: { reference } });
        if (user) {
            return response.status(200).json({ message: 'Payment was Successful', user: user });
        }
        const payment = await prisma.personnel_payment.create({
            data: {
                fullname,
                email,
                amount,
                phone_number,
                type,
                type_of_payment,
                reference: paymentReference,
                status: 'Paid'
            }
        });
        (0, emailSender_1.sendPersonnelReceiptEmail)(email, paymentDetails, paymentReference);
        return response.status(200).json({ message: 'Payment was Successful', user: payment });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal server error' });
    }
}
exports.verifyPaymentHandler = verifyPaymentHandler;
async function initializeRenewalPaymentHandler(request, response) {
    try {
        const { enugu_practice_id } = request.body;
        const validationRules = [
            (0, express_validator_1.body)('enugu_practice_id').notEmpty().withMessage('Enugu State Practice Id is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const user = await prisma.users.findUnique({
            where: {
                enugu_practice_id
            }
        });
        if (!user) {
            return response.status(400).json({ message: 'Invalid Practice ID' });
        }
        if (user.status !== "Approved") {
            return response.status(400).json({ message: 'Your Account has not been approved yet' });
        }
        const type = user.type;
        const fullname = user.fullname;
        const phone_number = user.phone_number;
        const email = user.email;
        let amount;
        if (type == 'Doctor' || type == 'Dentist') {
            const topay = 20000;
            amount = topay;
        }
        else if (type == 'Nurse' || type == 'Mid_wife') {
            const topay = 5000;
            amount = topay;
        }
        else if (type == 'Pharmacist' || type == 'Radiographer' || type == 'Lab_Scientist' || type == 'Optometrist' || type == 'Physiotherapist' || type == 'Psychiatrist') {
            const topay = 10000;
            amount = topay;
        }
        else if (type == 'Community_health_worker' || type == 'Emergency_medical_technician') {
            const topay = 3000;
            amount = topay;
        }
        else {
            return response.status(400).json({ message: "Could not Identify the medical type" });
        }
        const payamount = amount * 100;
        const callback_url = config_1.Config.paystackVerifyPersonnelRenewalCallback;
        if (!callback_url) {
            return response.status(400).json({ message: "Callback Can't be undefined" });
        }
        const type_of_payment = `Renewal Payment of Health Care Personnel`;
        const paymentInfo = await (0, paystack_1.initializePayment)(fullname, phone_number, payamount, email, type, type_of_payment, callback_url);
        response.json({ data: paymentInfo, user: user });
    }
    catch (error) {
        console.log(error);
    }
}
exports.initializeRenewalPaymentHandler = initializeRenewalPaymentHandler;
async function verifyRenewalPaymentHandler(request, response) {
    try {
        const reference = (0, paystack_1.extractReferenceFromRequest)(request);
        if (typeof reference !== 'string') {
            throw new Error('Reference is not a string');
        }
        const paymentDetails = await (0, paystack_1.verifyPayment)(reference);
        const paymentStatus = paymentDetails.status;
        const paymentReference = paymentDetails.reference;
        const fullname = paymentDetails.metadata.fullname;
        const email = paymentDetails.metadata.email;
        const paidamount = paymentDetails.metadata.amount;
        const phone_number = paymentDetails.metadata.phone_number;
        const type = paymentDetails.metadata.type;
        const type_of_payment = paymentDetails.metadata.type_of_payment;
        const amount = (paidamount / 100).toString();
        const expiry_date = (await ((0, functions_1.renewal_expiryDate)())).toString();
        const check_reference = await prisma.personnel_payment.findUnique({ where: { reference: paymentReference } });
        if (check_reference) {
            const check_user = await prisma.users.findUnique({ where: { email } });
            return response.status(200).json({ message: 'Renewal was Successful', user: check_user, payment: check_reference });
        }
        const payment = await prisma.personnel_payment.create({
            data: {
                fullname,
                email,
                amount,
                phone_number,
                type,
                type_of_payment,
                reference: paymentReference,
                status: 'Paid',
                has_registered: true,
            }
        });
        const user = await prisma.users.update({
            where: { email },
            data: { expiry_date },
        });
        (0, emailSender_1.sendRenewalEmail)(email, paymentDetails, user, paymentReference, user.fullname, user.enugu_practice_id, expiry_date, user.passport, "Personnel");
        return response.status(200).json({ message: 'Renewal was Successful', user, payment });
    }
    catch (error) {
        console.log(error);
    }
}
exports.verifyRenewalPaymentHandler = verifyRenewalPaymentHandler;
