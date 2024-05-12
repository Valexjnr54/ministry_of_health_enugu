"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPersonnel = void 0;
const models_1 = require("../../../models");
const express_validator_1 = require("express-validator");
const verification_1 = require("../../../services/verification");
const functions_1 = require("../../../utils/functions");
const cloudinary_1 = __importDefault(require("../../../utils/cloudinary"));
const fs_1 = __importDefault(require("fs"));
const generatePassword_1 = require("../../../services/generatePassword");
const bcrypt_1 = __importDefault(require("bcrypt"));
const emailSender_1 = require("../../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function createPersonnel(request, response) {
    const { firstname, middlename, surname, email, address, phone_number, nin, reference, lga, state } = request.body;
    const middleName = middlename || "";
    try {
        const validationRules = [
            (0, express_validator_1.body)('firstname').notEmpty().withMessage('First Name is required'),
            (0, express_validator_1.body)('surname').notEmpty().withMessage('Surname is required'),
            (0, express_validator_1.body)('address').notEmpty().withMessage('Residental Address is required'),
            (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone Number is required'),
            (0, express_validator_1.body)('nin').notEmpty().withMessage('nin is required'),
            (0, express_validator_1.body)('reference').notEmpty().withMessage('Payment Reference is required'),
            (0, express_validator_1.body)('lga').notEmpty().withMessage('Local Government Area is required'),
            (0, express_validator_1.body)('state').notEmpty().withMessage('State of Origin is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const existingUser = await prisma.food_handlers.findUnique({ where: { email } });
        if (existingUser) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const existingPhone = await prisma.food_handlers.findUnique({ where: { phone_number } });
        if (existingPhone) {
            return response.status(400).json({ message: 'Phone Number Already Exist' });
        }
        const existingNIN = await prisma.food_handlers.findUnique({ where: { nin } });
        if (existingNIN) {
            return response.status(400).json({ message: 'Nin Already Exist' });
        }
        const check_payment = await prisma.personnel_payment.findUnique({ where: { reference } });
        if (!check_payment) {
            return response.status(400).json({ message: 'Invalid Payment Reference, Please Kindly make payment' });
        }
        const check_reference_used = await prisma.personnel_payment.findUnique({ where: { reference, has_registered: true } });
        if (check_reference_used) {
            return response.status(400).json({ message: 'Payment Reference used by another user, Please Kindly make payment' });
        }
        const code = await (0, functions_1.uniqueSix)();
        const enugu_handler_id = `EN/FHP/${code}`;
        const expiry_date = (await ((0, functions_1.expiryDate)())).toString();
        const ninResponse = await (0, verification_1.verifynin)(nin);
        if (ninResponse.response_code == '01') {
            return response.status(404).json({ message: 'Invalid NIN, Please Check your NIN number and try again' });
        }
        else if (ninResponse.response_code == '02') {
            return response.status(400).json({ message: `Your NIN could not be verified at this time, The NIN you provided could be wrong please check if you provided a correct NIN if this persists check back later. If you are no longer on this page click on the 'already started registration button' on the registration page and provide your payment reference to continue.` });
        }
        else if (ninResponse.response_code == '03') {
            return response.status(400).json({ message: 'Not your fault we will look into the reason, Please contact support.' });
        }
        const fullname = surname + ' ' + firstname + ' ' + middleName;
        const password = await (0, generatePassword_1.generateStrongPassword)(16);
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const reset_password_token = await (0, generatePassword_1.generateResetCode)(30);
        if (!request.files || !('passport' in request.files)) {
            return response.status(400).json({ message: 'Please provide all required images.' });
        }
        // Upload Site Plan image to Cloudinary
        //   const nin_image = await uploadImage(request.files['nin_image'][0].path, 'enugu_ministry_of_health/images/personnel_nin_images');
        //   fs.unlink(request.files['nin_image'][0].path, (err) => {
        //     if (err) {
        //       console.error(`Error deleting Site Plan file`);
        //     } else {
        //       console.log(`NIN File deleted`);
        //     }
        //   });
        const passport = await (0, cloudinary_1.default)(request.files['passport'][0].path, 'enugu_ministry_of_health/images/health_personnel_passports');
        fs_1.default.unlink(request.files['passport'][0].path, (err) => {
            if (err) {
                console.error(`Error deleting Passportfile`);
            }
            else {
                console.log(`Passport File deleted`);
            }
        });
        // let ninStatus: Status  = "Pending";
        let ninStatus;
        if (ninResponse.status == true && ninResponse.response_code == '00') {
            ninStatus = 'Approved';
        }
        else if (ninResponse.status == false && ninResponse.response_code != '00') {
            ninStatus = 'Rejected';
            return response.status(400).json({ message: ninResponse.detail });
        }
        else {
            ninStatus = 'Pending';
        }
        const user = await prisma.food_handlers.create({
            data: {
                fullname,
                email,
                address,
                phone_number,
                nin,
                password: hashedPassword,
                state,
                // nin_image,
                passport,
                expiry_date,
                lga,
                reset_password_token,
                enugu_handler_id,
                nin_status: ninStatus,
            }
        });
        const has_register = await prisma.personnel_payment.update({
            where: { reference },
            data: {
                has_registered: true
            }
        });
        await (0, emailSender_1.sendWelcomeFoodMail)(user.email, user, password);
        const lga_id = parseInt(user.lga);
        const lga_detail = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: 'Food Handler Created Successfullly', user, lga: lga_detail });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.createPersonnel = createPersonnel;
