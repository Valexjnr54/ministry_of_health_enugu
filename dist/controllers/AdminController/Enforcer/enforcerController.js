"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEnforcer = exports.singleEnforcer = exports.allEnforcer = exports.createEnforcer = void 0;
const models_1 = require("../../../models");
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const functions_1 = require("../../../utils/functions");
const emailSender_1 = require("../../../utils/emailSender");
const generatePassword_1 = require("../../../services/generatePassword");
const prisma = new models_1.PrismaClient();
async function createEnforcer(request, response) {
    const { fullname, address, phone_number, email, lga } = request.body;
    const admin_id = request.user.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'Admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const validationRules = [
            (0, express_validator_1.body)('fullname').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('email').isEmail().withMessage('Email address is required'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone Number address is required'),
            (0, express_validator_1.body)('address').notEmpty().withMessage('Residental address is required'),
            (0, express_validator_1.body)('lga').notEmpty().withMessage('Local Government is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Check if the email is already registered
        const existingEnforcer = await prisma.enforcer.findUnique({ where: { email } });
        if (existingEnforcer) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const password = await (0, generatePassword_1.generateStrongPassword)(16);
        const code = await (0, functions_1.uniqueSix)();
        const username = `EN/ENF/${code}`;
        const reset_password_token = await (0, generatePassword_1.generateResetCode)(30);
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        //Uploading Image to Cloudinary
        const profile_image = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL
        // Create a new Enforcer in the database
        const newEnforcer = await prisma.enforcer.create({
            data: {
                fullname,
                username,
                email,
                address,
                phone_number,
                profile_image,
                reset_password_token,
                lga,
                password: hashedPassword, // Store the salt along with the hash
            },
        });
        const lga_id = parseInt(newEnforcer.lga);
        const lga_detail = await prisma.local_government.findUnique({ where: { id: lga_id } });
        await (0, emailSender_1.sendCreateEnforcerMail)(newEnforcer.email, newEnforcer, password);
        return response.status(201).json({ message: `${newEnforcer.fullname} has been created as an Enforcer`, newEnforcer, lga: lga_detail });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.createEnforcer = createEnforcer;
async function allEnforcer(request, response) {
    const admin_id = request.user.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'Admin' && role !== 'Subadmin_facility') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        // Create a new Enforcer in the database
        const enforcer = await prisma.enforcer.findMany();
        return response.status(200).json({ message: `All Enforcer Fetched successfully`, enforcer });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.allEnforcer = allEnforcer;
async function singleEnforcer(request, response) {
    const admin_id = request.user.adminId;
    const id = parseInt(request.query.id);
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'Admin' && role !== 'Subadmin_facility') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        // Create a new Enforcer in the database
        const enforcer = await prisma.enforcer.findUnique({ where: { id } });
        if (!enforcer) {
            return response.status(404).json({ message: "Enforcer does not exist" });
        }
        const lga_id = parseInt(enforcer.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: `All Enforcer Fetched successfully`, enforcer, lga });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.singleEnforcer = singleEnforcer;
async function deleteEnforcer(request, response) {
    const admin_id = request.user.adminId;
    const id = parseInt(request.query.id);
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'Admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        // Create a new Enforcer in the database
        const enforcer = await prisma.enforcer.findUnique({ where: { id } });
        if (!enforcer) {
            return response.status(404).json({ message: `Enforcer Not Found` });
        }
        const deleteEnforcer = await prisma.enforcer.delete({ where: { id } });
        return response.status(204).json({ message: `All Enforcer Fetched successfully` });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.deleteEnforcer = deleteEnforcer;
