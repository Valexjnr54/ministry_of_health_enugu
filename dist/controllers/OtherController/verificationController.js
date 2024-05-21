"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkReference = exports.verificationFoodFacilityPaymentHandler = exports.verifyFoodFacility = exports.verificationFacilityPaymentHandler = exports.verifyFacility = exports.verificationFoodPaymentHandler = exports.verifyFoodPersonnel = exports.verificationPaymentHandler = exports.verifyPersonnel = exports.verifyCAC = exports.verifyNIN = void 0;
const config_1 = require("../../config/config");
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const verification_1 = require("../../services/verification");
const credo_1 = require("../../utils/credo");
const emailSender_1 = require("../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function verifyNIN(request, response) {
    const { nin } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)("nin").notEmpty().withMessage("nin is required"),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const ninResponse = await (0, verification_1.verifynin)(nin);
        if (ninResponse.status !== true && ninResponse.response_code == "00") {
            return response.status(400).json({
                message: "Invalid NIN, Please Check your NIN number and try again",
            });
        }
        return response
            .status(200)
            .json({ message: "NIN Verified Successfullly", ninResponse });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Internal Server Error" });
    }
}
exports.verifyNIN = verifyNIN;
async function verifyCAC(request, response) {
    const { rc_number, company_name, company_type } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)("rc_number").notEmpty().withMessage("RC Number is required"),
            (0, express_validator_1.body)("company_name").notEmpty().withMessage("Company Name is required"),
            (0, express_validator_1.body)("company_type").notEmpty().withMessage("Company Type is required"),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const cacResponse = await (0, verification_1.verifycac)(rc_number, company_name, company_type);
        if (cacResponse.status !== true && cacResponse.response_code == "00") {
            return response.status(400).json({
                message: "Invalid CAC Details, Please Provide a valid CAC details and try again",
            });
        }
        return response
            .status(200)
            .json({ message: "CAC Details Verified Successfullly", cacResponse });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Internal Server Error" });
    }
}
exports.verifyCAC = verifyCAC;
async function verifyPersonnel(request, response) {
    const enugu_practice_id = request.query
        .enugu_practice_id;
    try {
        if (enugu_practice_id !== undefined) {
            const checkuser = await prisma.users.findUnique({
                where: {
                    enugu_practice_id: enugu_practice_id,
                },
            });
            if (!checkuser) {
                return response
                    .status(404)
                    .json({ message: "Health Personnel not found" });
            }
            const amount = 2000 * 100;
            const callback_url = config_1.Config.credoPersonnelVerificationCallback;
            if (!callback_url) {
                return response
                    .status(400)
                    .json({ message: "Callback Can't be undefined" });
            }
            const type_of_payment = "Payment for Health Personnel Verification";
            const paymentInfo = await (0, credo_1.initializePayment)(checkuser?.fullname, checkuser?.phone_number, amount, checkuser?.email, checkuser?.type, type_of_payment, callback_url);
            return response.status(200).json({
                message: `${checkuser?.fullname} has been fetched Successfully`,
                user: checkuser,
                paymentInfo,
            });
        }
        else {
            return response
                .status(400)
                .json({ message: "enugu_practice_id is required" });
        }
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Internal Server Error" });
    }
}
exports.verifyPersonnel = verifyPersonnel;
async function verificationPaymentHandler(request, response) {
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
        const user = await prisma.users.findUnique({ where: { email } });
        if (!user) {
            return response
                .status(404)
                .json({ message: "Health Personnel Not found" });
        }
        const check_reference = await prisma.personnel_payment.findUnique({
            where: { reference },
        });
        if (check_reference) {
            return response.status(200).json({
                message: "Payment was Successful",
                payment: check_reference,
                user,
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
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({
            where: { id: lga_id },
        });
        (0, emailSender_1.sendVerificationEmail)(email, paymentDetails, paymentReference);
        return response
            .status(200)
            .json({ message: "Payment was Successful", payment, user, lga });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Internal server error" });
    }
}
exports.verificationPaymentHandler = verificationPaymentHandler;
async function verifyFoodPersonnel(request, response) {
    const enugu_handler_id = request.query
        .enugu_handler_id;
    try {
        if (enugu_handler_id !== undefined) {
            const checkuser = await prisma.food_handlers.findUnique({
                where: {
                    enugu_handler_id: enugu_handler_id,
                },
            });
            if (!checkuser) {
                return response
                    .status(404)
                    .json({ message: "Health Personnel not found" });
            }
            const amount = 2000 * 100;
            const callback_url = config_1.Config.credoFoodPersonnelVerificationCallback;
            if (!callback_url) {
                return response
                    .status(400)
                    .json({ message: "Callback Can't be undefined" });
            }
            const type_of_payment = "Payment for Food Handler Personnel Verification";
            const type = "Food Handler";
            const paymentInfo = await (0, credo_1.initializePayment)(checkuser?.fullname, checkuser?.phone_number, amount, checkuser?.email, type, type_of_payment, callback_url);
            return response.status(200).json({
                message: `${checkuser?.fullname} has been fetched Successfully`,
                user: checkuser,
                paymentInfo,
            });
        }
        else {
            return response
                .status(400)
                .json({ message: "enugu_practice_id is required" });
        }
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Internal Server Error" });
    }
}
exports.verifyFoodPersonnel = verifyFoodPersonnel;
async function verificationFoodPaymentHandler(request, response) {
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
        const user = await prisma.food_handlers.findUnique({ where: { email } });
        if (!user) {
            return response.status(404).json({ message: "Food Handler not Found" });
        }
        const check_reference = await prisma.personnel_payment.findUnique({
            where: { reference },
        });
        if (check_reference) {
            return response.status(200).json({
                message: "Payment was Successful",
                payment: check_reference,
                user,
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
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({
            where: { id: lga_id },
        });
        return response
            .status(200)
            .json({ message: "Payment was Successful", payment, user, lga });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Internal server error" });
    }
}
exports.verificationFoodPaymentHandler = verificationFoodPaymentHandler;
async function verifyFacility(request, response) {
    const enugu_facility_id = request.query
        .enugu_facility_id;
    try {
        if (enugu_facility_id !== undefined) {
            const checkfacility = await prisma.facility.findUnique({
                where: {
                    enugu_facility_id: enugu_facility_id,
                },
            });
            if (!checkfacility) {
                return response
                    .status(404)
                    .json({ message: "Health Facility not found" });
            }
            const type_of_payment = "Payment for Health Facility Verification";
            const amount = 5000 * 100;
            const callback_url = config_1.Config.credoFacilityVerificationCallback;
            if (!callback_url) {
                return response
                    .status(400)
                    .json({ message: "Callback Can't be undefined" });
            }
            const paymentInfo = await (0, credo_1.initializePayment)(enugu_facility_id, checkfacility?.owner_phone_number, amount, checkfacility?.owner_email, checkfacility?.facility_type, type_of_payment, callback_url);
            return response.status(200).json({
                message: `${checkfacility?.facility_name} has been fetched Successfully`,
                user: checkfacility,
                paymentInfo,
            });
        }
        else {
            return response
                .status(400)
                .json({ message: "enugu_facility_id is required" });
        }
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Internal Server Error" });
    }
}
exports.verifyFacility = verifyFacility;
async function verificationFacilityPaymentHandler(request, response) {
    try {
        const reference = (0, credo_1.extractReferenceFromRequest)(request);
        if (typeof reference !== "string") {
            throw new Error("Reference is not a string");
        }
        const paymentDetails = await (0, credo_1.verifyPayment)(reference);
        const paymentStatus = paymentDetails.status;
        const paymentReference = paymentDetails.transRef;
        const enugu_facility_id = await (0, credo_1.getInsightTagValue)("fullname", paymentDetails.metadata);
        const email = await (0, credo_1.getInsightTagValue)("email", paymentDetails.metadata);
        const paidamount = await (0, credo_1.getInsightTagValue)("amount", paymentDetails.metadata);
        const phone_number = await (0, credo_1.getInsightTagValue)("phone_number", paymentDetails.metadata);
        const type = await (0, credo_1.getInsightTagValue)("type", paymentDetails.metadata);
        const type_of_payment = await (0, credo_1.getInsightTagValue)("type_of_payment", paymentDetails.metadata);
        const amount = (paidamount / 100).toString();
        const facility = await prisma.facility.findUnique({
            where: { enugu_facility_id },
        });
        if (!facility) {
            return response
                .status(404)
                .json({ message: "Health Facility not found" });
        }
        const facility_name = facility.facility_name;
        if (facility_name === undefined) {
            return response
                .status(404)
                .json({ message: "Health Facility Name not found" });
        }
        const check_reference = await prisma.facility_payment.findUnique({
            where: { reference },
        });
        if (check_reference) {
            return response.status(200).json({
                message: "Payment was Successful",
                payment: check_reference,
                facility,
            });
        }
        const payment = await prisma.facility_payment.create({
            data: {
                facility_name: facility_name,
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
        const lga_id = parseInt(facility.lga);
        const lga = await prisma.local_government.findUnique({
            where: { id: lga_id },
        });
        (0, emailSender_1.sendVerificationEmail)(email, paymentDetails, paymentReference);
        return response
            .status(200)
            .json({ message: "Payment was Successful", payment, facility, lga });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Internal server error" });
    }
}
exports.verificationFacilityPaymentHandler = verificationFacilityPaymentHandler;
async function verifyFoodFacility(request, response) {
    const enugu_food_facility_id = request.query
        .enugu_food_facility_id;
    try {
        if (enugu_food_facility_id !== undefined) {
            const checkfacility = await prisma.food_facility.findUnique({
                where: {
                    enugu_food_facility_id: enugu_food_facility_id,
                },
            });
            if (!checkfacility) {
                return response
                    .status(404)
                    .json({ message: "Health Facility not found" });
            }
            const type_of_payment = "Payment for Food Vendor Facility Verification";
            const amount = 5000 * 100;
            const callback_url = config_1.Config.credoFoodFacilityVerificationCallback;
            if (!callback_url) {
                return response
                    .status(400)
                    .json({ message: "Callback Can't be undefined" });
            }
            const paymentInfo = await (0, credo_1.initializePayment)(enugu_food_facility_id, checkfacility?.owner_phone_number, amount, checkfacility?.owner_email, checkfacility?.facility_name, type_of_payment, callback_url);
            return response.status(200).json({
                message: `${checkfacility?.facility_name} has been fetched Successfully`,
                user: checkfacility,
                paymentInfo,
            });
        }
        else {
            return response
                .status(400)
                .json({ message: "enugu_facility_id is required" });
        }
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Internal Server Error" });
    }
}
exports.verifyFoodFacility = verifyFoodFacility;
async function verificationFoodFacilityPaymentHandler(request, response) {
    try {
        const reference = (0, credo_1.extractReferenceFromRequest)(request);
        if (typeof reference !== "string") {
            throw new Error("Reference is not a string");
        }
        const paymentDetails = await (0, credo_1.verifyPayment)(reference);
        const paymentStatus = paymentDetails.status;
        const paymentReference = paymentDetails.transRef;
        const enugu_food_facility_id = await (0, credo_1.getInsightTagValue)("fullname", paymentDetails.metadata);
        const email = await (0, credo_1.getInsightTagValue)("email", paymentDetails.metadata);
        const paidamount = await (0, credo_1.getInsightTagValue)("amount", paymentDetails.metadata);
        const phone_number = await (0, credo_1.getInsightTagValue)("phone_number", paymentDetails.metadata);
        const type = await (0, credo_1.getInsightTagValue)("type", paymentDetails.metadata);
        const type_of_payment = await (0, credo_1.getInsightTagValue)("type_of_payment", paymentDetails.metadata);
        const amount = (paidamount / 100).toString();
        const facility = await prisma.food_facility.findUnique({
            where: { enugu_food_facility_id },
        });
        if (!facility) {
            return response
                .status(404)
                .json({ message: "Food Vendor Facility not found" });
        }
        const facility_name = facility.facility_name;
        if (facility_name === undefined) {
            return response
                .status(404)
                .json({ message: "Food Vendor Facility Name not found" });
        }
        const check_reference = await prisma.facility_payment.findUnique({
            where: { reference },
        });
        if (check_reference) {
            return response.status(200).json({
                message: "Payment was Successful",
                payment: check_reference,
                facility,
            });
        }
        const payment = await prisma.facility_payment.create({
            data: {
                facility_name: facility_name,
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
        const lga_id = parseInt(facility.lga);
        const lga = await prisma.local_government.findUnique({
            where: { id: lga_id },
        });
        (0, emailSender_1.sendVerificationEmail)(email, paymentDetails, paymentReference);
        return response
            .status(200)
            .json({ message: "Payment was Successful", payment, facility, lga });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Internal server error" });
    }
}
exports.verificationFoodFacilityPaymentHandler = verificationFoodFacilityPaymentHandler;
async function checkReference(request, response) {
    const { type, reference } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)("type").notEmpty().withMessage("Type is required"),
            (0, express_validator_1.body)("reference").notEmpty().withMessage("Reference is required"),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        let paymentDetails;
        if (type == "Facility") {
            const check_reference = await prisma.facility_payment.findFirst({
                where: { reference },
            });
            if (!check_reference) {
                return response.status(400).json({ message: "Reference do not Exist" });
            }
            if (check_reference.has_registered === true) {
                return response.status(400).json({
                    message: "Reference has already been used to register a facility",
                });
            }
            paymentDetails = check_reference;
        }
        else {
            const check_reference = await prisma.personnel_payment.findFirst({
                where: { reference },
            });
            if (!check_reference) {
                return response.status(400).json({ message: "Reference do not Exist" });
            }
            if (check_reference.has_registered === true) {
                return response.status(400).json({
                    message: "Reference has already been used to register a user",
                });
            }
            paymentDetails = check_reference;
        }
        return response
            .status(200)
            .json({ message: "Refernce Exist", user: paymentDetails });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Internal server error" });
    }
}
exports.checkReference = checkReference;
