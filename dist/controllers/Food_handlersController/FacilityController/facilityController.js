"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFoodRenewalPaymentHandler = exports.initializeFoodRenewalPaymentHandler = exports.createFacility = void 0;
const config_1 = require("../../../config/config");
const models_1 = require("../../../models");
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const functions_1 = require("../../../utils/functions");
const cloudinary_1 = __importDefault(require("../../../utils/cloudinary"));
const fs_1 = __importDefault(require("fs"));
const paystack_1 = require("../../../utils/paystack");
const emailSender_1 = require("../../../utils/emailSender");
const generatePassword_1 = require("../../../services/generatePassword");
const prisma = new models_1.PrismaClient();
async function createFacility(request, response) {
    const { facility_name, location, cac, owner_name, owner_phone_number, owner_contact_address, owner_nin, owner_email, source_of_water, method_of_disposal, facility_personnel, reference, lga, landmark, category } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)('facility_name').notEmpty().withMessage('Facility Name is required'),
            (0, express_validator_1.body)('location').notEmpty().withMessage('Location is required'),
            (0, express_validator_1.body)('cac').notEmpty().withMessage('CAC number is required'),
            (0, express_validator_1.body)('owner_email').isEmail().withMessage('Owner email address'),
            (0, express_validator_1.body)('owner_name').notEmpty().withMessage('Owner Name is required'),
            (0, express_validator_1.body)('owner_phone_number').notEmpty().withMessage('Owner Phone Number is required'),
            (0, express_validator_1.body)('owner_contact_address').notEmpty().withMessage('Owner Contact Address is required'),
            (0, express_validator_1.body)('owner_nin').notEmpty().withMessage('Owner NIN is required'),
            (0, express_validator_1.body)('source_of_water').notEmpty().withMessage('Source of Water is required'),
            (0, express_validator_1.body)('reference').notEmpty().withMessage('Payment Reference is required'),
            (0, express_validator_1.body)('lga').notEmpty().withMessage('Local Government Area is required'),
            (0, express_validator_1.body)('method_of_disposal').notEmpty().withMessage('Method of Disposal is required'),
            (0, express_validator_1.body)('category').notEmpty().withMessage('Method of Disposal is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const facilityPersonnel = JSON.parse(facility_personnel);
        const check_payment = await prisma.facility_payment.findUnique({ where: { reference } });
        if (!check_payment) {
            return response.status(400).json({ message: 'Invalid Payment Reference, Please Kindly make payment' });
        }
        const check_reference_used = await prisma.facility_payment.findUnique({ where: { reference, has_registered: true } });
        if (check_reference_used) {
            return response.status(400).json({ message: 'Payment Reference used by another user, Please Kindly make payment' });
        }
        if (!request.files || !('owner_nin_image' in request.files) || !('cac_image' in request.files)) {
            return response.status(400).json({ message: 'Please provide all required images.' });
        }
        // Upload Site Plan image to Cloudinary
        const owner_nin_image = await (0, cloudinary_1.default)(request.files['owner_nin_image'][0].path, 'enugu_ministry_of_health/images/owner_nin_images');
        fs_1.default.unlink(request.files['owner_nin_image'][0].path, (err) => {
            if (err) {
                console.error(`Error deleting Site Plan file`);
            }
            else {
                console.log(`Owner NIN File deleted`);
            }
        });
        // Upload Site Plan image to Cloudinary
        const cac_image = await (0, cloudinary_1.default)(request.files['cac_image'][0].path, 'enugu_ministry_of_health/images/cac_images');
        fs_1.default.unlink(request.files['cac_image'][0].path, (err) => {
            if (err) {
                console.error(`Error deleting Site Plan file`);
            }
            else {
                console.log(`CAC File deleted`);
            }
        });
        const code = await (0, functions_1.uniqueSix)();
        const short_code = await (0, functions_1.ShortCode)(facility_name);
        const enugu_food_facility_id = `EN/FH/${short_code}/${code}`;
        const expiry_date = (await ((0, functions_1.expiryDate)())).toString();
        const password = await (0, generatePassword_1.generateStrongPassword)(16);
        const reset_password_token = await (0, generatePassword_1.generateResetCode)(30);
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const facility = await prisma.food_facility.create({
            data: {
                facility_name,
                location,
                cac,
                owner_name,
                owner_phone_number,
                owner_contact_address,
                owner_nin,
                owner_email,
                source_of_water,
                method_of_disposal,
                owner_nin_image: owner_nin_image || "",
                cac_image: cac_image || "",
                cac_status: "Pending",
                status: "Pending",
                reference,
                enugu_food_facility_id,
                facility_personnel_count: facilityPersonnel.count,
                lga,
                landmark,
                reset_password_token,
                expiry_date,
                password: hashedPassword,
                category
            }
        });
        facilityPersonnel.personnel.forEach(async (personnel) => {
            const enugu_handler_id = personnel.enugu_handler_id;
            const user = await prisma.food_handlers.findUnique({ where: { enugu_handler_id } });
            if (!user) {
                console.error("User is undefined for personnel:", personnel);
                return; // Skip creating facility personnel if user ID is undefined
            }
            const user_id = user.id;
            if (user_id === undefined) {
                console.error("User ID is undefined for personnel:", personnel);
                return; // Skip creating facility personnel if user ID is undefined
            }
            try {
                const createdPersonnel = await prisma.food_facility_personnel.create({
                    data: {
                        food_facility_id: facility.id,
                        enugu_handler_id,
                        food_handler_id: user_id
                    }
                });
            }
            catch (error) {
                console.error("Error creating facility personnel:", error);
            }
        });
        const update = await prisma.facility_payment.update({
            data: { has_registered: true },
            where: { reference }
        });
        await (0, emailSender_1.sendCompletionEmail)(owner_email, facility, "food-vendor", password);
        return response.status(200).json({ message: 'Food Facility Created', });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.createFacility = createFacility;
// export async function verifyCompleteRegistrationPaymentHandler(request: Request, response: Response) {
//     try {
//       const reference = extractReferenceFromRequest(request);
//       if (typeof reference !== 'string') {
//         throw new Error('Reference is not a string');
//       }
//       const paymentDetails = await verifyPayment(reference);
//       const paymentStatus = paymentDetails.status;
//       const paymentReference = paymentDetails.reference;
//       const facility_name = paymentDetails.metadata.facility_name;
//       const email = paymentDetails.metadata.email;
//       const paidamount = paymentDetails.metadata.amount;
//       const phone_number = paymentDetails.metadata.phone_number;
//       const type = paymentDetails.metadata.type;
//       const facility_id = parseInt(paymentDetails.metadata.facility_id as string);
//       const amount = (paidamount / 100).toString();
//       const expiry_date = (await (expiryDate())).toString();
//       const password= await generateStrongPassword(16)
//       // Hash the password before storing it
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const facility_complete = await prisma.facility_complete_payment.findUnique({ where: { reference } })
//       if (facility_complete) {
//         const fetch_facility = await prisma.food_facility.findUnique({ where: {id: facility_id}})
//         return response.status(200).json({ message: 'Payment was Successful', facility:fetch_facility });
//       }
//       const payment = await prisma.facility_complete_payment.create({
//         data: {
//           facility_name,
//           email,
//           amount,
//           phone_number,
//           type,
//           reference: paymentReference,
//           status: 'Paid'
//         }
//       });
//       const facility = await prisma.facility.update({
//         data: {
//           expiry_date,
//           password:hashedPassword,
//           current_reference: paymentDetails.Reference
//         },
//         where: {
//             id: facility_id
//         }
//       });
//       await sendCompletionEmail(payment.email, facility, paymentReference , password)
//       return response.status(200).json({ message: 'Payment was Successful', facility:facility });
//     } catch (error) {
//       console.error(error);
//       return response.status(500).json({ error: 'Internal server error' });
//     }
// }
async function initializeFoodRenewalPaymentHandler(request, response) {
    try {
        const { enugu_food_facility_id } = request.body;
        const validationRules = [
            (0, express_validator_1.body)('enugu_food_facility_id').notEmpty().withMessage('Enugu State Food Vendor Facility Id is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const facility = await prisma.food_facility.findUnique({
            where: {
                enugu_food_facility_id
            }
        });
        if (!facility) {
            return response.status(400).json({ message: 'Invalid Facility ID' });
        }
        const facility_type = facility.category;
        const facility_name = facility.facility_name;
        const email = facility.owner_email;
        let amount;
        if (facility_type === "Three_star_hotel") {
            amount = 15000;
        }
        else if (facility_type === "Regular") {
            amount = 15000;
        }
        else if (facility_type === "Motel") {
            amount = 15000;
        }
        else if (facility_type === "Fine_dining") {
            amount = 15000;
        }
        else if (facility_type === "Casual_dining") {
            amount = 15000;
        }
        else if (facility_type === "Cafes_and_Bistros") {
            amount = 15000;
        }
        else if (facility_type === "Buffet") {
            amount = 15000;
        }
        else if (facility_type === "Fast_food") {
            amount = 15000;
        }
        else {
            return response.status(400).json({ message: 'Unidentified Category' });
        }
        const payamount = amount * 100;
        const callback_url = config_1.Config.paystackVerifyFoodFacilityRenewalCallback;
        if (!callback_url) {
            return response.status(400).json({ message: "Callback Can't be undefined" });
        }
        const paymentInfo = await (0, paystack_1.initializeFacilityPayment)(facility.enugu_food_facility_id, facility.owner_phone_number, payamount, email, facility_type, "Renewal Payment of Food Handler Facility", callback_url);
        response.json({ data: paymentInfo });
    }
    catch (error) {
        console.log(error);
    }
}
exports.initializeFoodRenewalPaymentHandler = initializeFoodRenewalPaymentHandler;
async function verifyFoodRenewalPaymentHandler(request, response) {
    try {
        const reference = (0, paystack_1.extractReferenceFromRequest)(request);
        if (typeof reference !== 'string') {
            throw new Error('Reference is not a string');
        }
        const paymentDetails = await (0, paystack_1.verifyPayment)(reference);
        const paymentStatus = paymentDetails.status;
        const paymentReference = paymentDetails.reference;
        const enugu_facility_id = paymentDetails.metadata.facility_name;
        const email = paymentDetails.metadata.email;
        const paidamount = paymentDetails.metadata.amount;
        const phone_number = paymentDetails.metadata.phone_number;
        const type = paymentDetails.metadata.type;
        const fetchFacility = await prisma.facility.findUnique({ where: { enugu_facility_id } });
        if (!fetchFacility) {
            return response.status(404).json({ message: " Facility Not Found" });
        }
        const facility_name = fetchFacility.facility_name;
        const amount = (paidamount / 100).toString();
        const expiry_date = (await ((0, functions_1.expiryDate)())).toString();
        const check_reference = await prisma.facility_payment.findUnique({ where: { reference: paymentReference } });
        if (check_reference) {
            const check_facility = await prisma.facility.findUnique({ where: { enugu_facility_id } });
            return response.status(200).json({ message: 'Renewal was Successful', facility: check_facility, payment: check_reference });
        }
        const payment = await prisma.facility_payment.create({
            data: {
                facility_name,
                email,
                amount,
                phone_number,
                type,
                reference: paymentReference,
                status: 'Paid',
                has_registered: true,
            }
        });
        const facility = await prisma.facility.update({
            where: { enugu_facility_id },
            data: { expiry_date },
        });
        return response.status(200).json({ message: 'Renewal was Successful', facility, payment });
    }
    catch (error) {
        console.log(error);
    }
}
exports.verifyFoodRenewalPaymentHandler = verifyFoodRenewalPaymentHandler;
