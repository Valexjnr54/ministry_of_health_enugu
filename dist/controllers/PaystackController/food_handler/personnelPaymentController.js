"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFoodRenewalPaymentHandler = exports.initializeFoodRenewalPaymentHandler = exports.verifyFoodPaymentHandler = exports.initializeFoodPaymentHandler = void 0;
const credo_1 = require("../../../utils/credo");
const config_1 = require("../../../config/config");
const models_1 = require("../../../models");
const express_validator_1 = require("express-validator");
const functions_1 = require("../../../utils/functions");
const emailSender_1 = require("../../../utils/emailSender");
const calculatePrice_1 = require("../../../services/calculatePrice");
const prisma = new models_1.PrismaClient();
async function initializeFoodPaymentHandler(request, response) {
    try {
        const { fullname, phone_number, email } = request.body;
        let amount;
        const verifyPrice = await (0, calculatePrice_1.personnel_price_list_service)("food_handler");
        if (verifyPrice && verifyPrice.applicationFee !== undefined) {
            amount = verifyPrice.applicationFee;
        }
        else {
            // Handle the case where renewalFee is not provided
            console.error("Failed to retrieve price information.");
            return response
                .status(500)
                .json({ message: "Failed to retrieve price information." });
        }
        const payamount = amount * 100;
        const callback_url = config_1.Config.credoFoodPersonnelCallback;
        const type_of_payment = "Registration Payment of Food Handlers";
        const type = "Food handler";
        if (amount !== verifyPrice.applicationFee) {
            return response.status(400).json({
                message: `${type}'s are meant to pay NGN${verifyPrice.applicationFee}`,
            });
        }
        const checkemail = await prisma.food_handlers.findUnique({
            where: { email },
        });
        if (checkemail) {
            return response
                .status(400)
                .json({ message: "E-mail address already exist" });
        }
        const checkphone_number = await prisma.food_handlers.findUnique({
            where: { phone_number },
        });
        if (checkphone_number) {
            return response
                .status(400)
                .json({ message: "Phone Number already exist" });
        }
        if (!callback_url) {
            return response
                .status(400)
                .json({ message: "Callback Can't be undefined" });
        }
        const paymentInfo = await (0, credo_1.initializePayment)(fullname, phone_number, payamount, email, type, type_of_payment, callback_url);
        // await sendFoodPaymentEmail(email, paymentInfo, fullname);
        response.json({ data: paymentInfo });
    }
    catch (error) {
        console.log(error);
    }
}
exports.initializeFoodPaymentHandler = initializeFoodPaymentHandler;
async function verifyFoodPaymentHandler(request, response) {
    try {
        const reference = (0, credo_1.extractReferenceFromRequest)(request);
        if (typeof reference !== "string") {
            throw new Error("Reference is not a string");
        }
        const paymentDetails = await (0, credo_1.verifyPayment)(reference);
        const paymentStatus = paymentDetails.status;
        const paymentReference = paymentDetails.transRef;
        const fullname = await (0, credo_1.getInsightTagValue)("fullname", paymentDetails.metadata);
        const email = await (0, credo_1.getInsightTagValue)("email", paymentDetails.metadata);
        const paidamount = await (0, credo_1.getInsightTagValue)("amount", paymentDetails.metadata);
        const phone_number = await (0, credo_1.getInsightTagValue)("phone_number", paymentDetails.metadata);
        const type = await (0, credo_1.getInsightTagValue)("type", paymentDetails.metadata);
        const type_of_payment = await (0, credo_1.getInsightTagValue)("type_of_payment", paymentDetails.metadata);
        const amount = (paidamount / 100).toString();
        const user = await prisma.personnel_payment.findUnique({
            where: { reference },
        });
        if (user) {
            return response
                .status(200)
                .json({ message: "Payment was Successful", user: user });
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
                status: "Paid",
            },
        });
        (0, emailSender_1.sendFoodReceiptEmail)(email, paymentDetails, paymentReference);
        return response
            .status(200)
            .json({ message: "Payment was Successful", user: payment });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Internal server error" });
    }
}
exports.verifyFoodPaymentHandler = verifyFoodPaymentHandler;
async function initializeFoodRenewalPaymentHandler(request, response) {
    try {
        const { enugu_handler_id } = request.body;
        const validationRules = [
            (0, express_validator_1.body)("enugu_handler_id")
                .notEmpty()
                .withMessage("Enugu State handler Id is required"),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const user = await prisma.food_handlers.findUnique({
            where: {
                enugu_handler_id,
            },
        });
        if (!user) {
            return response.status(400).json({ message: "Invalid Practice ID" });
        }
        if (user.status !== "Approved") {
            return response
                .status(400)
                .json({ message: "Your Account has not been approved yet" });
        }
        const fullname = user.fullname;
        const phone_number = user.phone_number;
        const email = user.email;
        let amount;
        const verifyPrice = await (0, calculatePrice_1.personnel_price_list_service)("food_handler");
        if (verifyPrice && verifyPrice.renewalFee !== undefined) {
            amount = verifyPrice.renewalFee;
        }
        else {
            // Handle the case where renewalFee is not provided
            console.error("Failed to retrieve price information.");
            return response
                .status(500)
                .json({ message: "Failed to retrieve price information." });
        }
        const type_of_payment = "Renewal Payment of Food Handler";
        const type = "Food handler";
        const payamount = amount * 100;
        const callback_url = config_1.Config.credoVerifyPersonnelRenewalCallback;
        if (!callback_url) {
            return response
                .status(400)
                .json({ message: "Callback Can't be undefined" });
        }
        const paymentInfo = await (0, credo_1.initializePayment)(fullname, phone_number, payamount, email, type, type_of_payment, callback_url);
        response.json({ data: paymentInfo, user: user });
    }
    catch (error) {
        console.log(error);
    }
}
exports.initializeFoodRenewalPaymentHandler = initializeFoodRenewalPaymentHandler;
async function verifyFoodRenewalPaymentHandler(request, response) {
    try {
        const reference = (0, credo_1.extractReferenceFromRequest)(request);
        if (typeof reference !== "string") {
            throw new Error("Reference is not a string");
        }
        const paymentDetails = await (0, credo_1.verifyPayment)(reference);
        const paymentStatus = paymentDetails.status;
        const paymentReference = paymentDetails.transRef;
        const fullname = await (0, credo_1.getInsightTagValue)("fullname", paymentDetails.metadata);
        const email = await (0, credo_1.getInsightTagValue)("email", paymentDetails.metadata);
        const paidamount = await (0, credo_1.getInsightTagValue)("amount", paymentDetails.metadata);
        const phone_number = await (0, credo_1.getInsightTagValue)("phone_number", paymentDetails.metadata);
        const type = await (0, credo_1.getInsightTagValue)("type", paymentDetails.metadata);
        const type_of_payment = await (0, credo_1.getInsightTagValue)("type_of_payment", paymentDetails.metadata);
        const amount = (paidamount / 100).toString();
        const expiry_date = (await (0, functions_1.renewal_expiryDate)()).toString();
        const check_reference = await prisma.personnel_payment.findUnique({
            where: { reference: paymentReference },
        });
        if (check_reference) {
            const check_user = await prisma.users.findUnique({ where: { email } });
            return response.status(200).json({
                message: "Renewal was Successful",
                user: check_user,
                payment: check_reference,
            });
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
                status: "Paid",
                has_registered: true,
            },
        });
        const user = await prisma.food_handlers.update({
            where: { email },
            data: { expiry_date },
        });
        (0, emailSender_1.sendRenewalFoodHandlerEmail)(email, paymentDetails, user, paymentReference, user.fullname, user.enugu_handler_id, user.expiry_date, user.passport, "FoodHandler");
        return response
            .status(200)
            .json({ message: "Renewal was Successful", user, payment });
    }
    catch (error) {
        console.log(error);
    }
}
exports.verifyFoodRenewalPaymentHandler = verifyFoodRenewalPaymentHandler;
