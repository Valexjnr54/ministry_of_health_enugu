"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignInspector = exports.deleteInspector = exports.singleInspector = exports.allInspector = exports.createInspector = void 0;
const models_1 = require("../../../models");
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const functions_1 = require("../../../utils/functions");
const emailSender_1 = require("../../../utils/emailSender");
const generatePassword_1 = require("../../../services/generatePassword");
const prisma = new models_1.PrismaClient();
async function createInspector(request, response) {
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
        const existingInspector = await prisma.inspector.findUnique({ where: { email } });
        if (existingInspector) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const password = await (0, generatePassword_1.generateStrongPassword)(16);
        const code = await (0, functions_1.uniqueSix)();
        const username = `EN/INS/${code}`;
        const reset_password_token = await (0, generatePassword_1.generateResetCode)(30);
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        //Uploading Image to Cloudinary
        const profile_image = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL
        // Create a new Inspector in the database
        const newInspector = await prisma.inspector.create({
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
        const lga_id = parseInt(newInspector.lga);
        const lga_detail = await prisma.local_government.findUnique({ where: { id: lga_id } });
        await (0, emailSender_1.sendCreateInspectorMail)(newInspector.email, newInspector, password);
        return response.status(201).json({ message: `${newInspector.fullname} has been created as an Inspector`, newInspector, lga: lga_detail });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.createInspector = createInspector;
async function allInspector(request, response) {
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
        // Create a new Inspector in the database
        const inspector = await prisma.inspector.findMany();
        return response.status(200).json({ message: `All Inspector Fetched successfully`, inspector });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.allInspector = allInspector;
async function singleInspector(request, response) {
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
        // Create a new Inspector in the database
        const inspector = await prisma.inspector.findUnique({ where: { id } });
        if (!inspector) {
            return response.status(404).json({ message: "Inspector does not exist" });
        }
        const lga_id = parseInt(inspector.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: `All Inspector Fetched successfully`, inspector, lga });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.singleInspector = singleInspector;
async function deleteInspector(request, response) {
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
        // Create a new Inspector in the database
        const inspector = await prisma.inspector.findUnique({ where: { id } });
        if (!inspector) {
            return response.status(404).json({ message: `Inspector Not Found` });
        }
        const deleteInspector = await prisma.inspector.delete({ where: { id } });
        return response.status(204).json({ message: `All Inspector Fetched successfully` });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.deleteInspector = deleteInspector;
async function assignInspector(request, response) {
    const admin_id = request.user.adminId;
    const facility_id = parseInt(request.query.facility_id);
    const { inspector_id, inspection_date } = request.body;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        if (!check_admin) {
            return response.status(404).json({ message: "Admin Not Found" });
        }
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'Admin' && role !== 'Subadmin_facility') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const validationRules = [
            (0, express_validator_1.body)('inspector_id').notEmpty().withMessage('Inspector ID is required'),
            (0, express_validator_1.body)('inspection_date').notEmpty().withMessage('Inspection Date is required and must be in date format'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const inspectionDate = new Date(inspection_date);
        const inspectorId = parseInt(inspector_id);
        const assign = await prisma.facility.update({ where: { id: facility_id }, data: { assigned_inspector: inspector_id, inspection_date: inspectionDate, is_inspected: false } });
        const inspector = await prisma.inspector.findUnique({ where: { id: inspectorId } });
        if (!inspector) {
            return response.status(404).json({ message: "Admin Not Found" });
        }
        await (0, emailSender_1.sendAssignInspectionEmail)(check_admin.email, assign, inspector, "Admin");
        await (0, emailSender_1.sendAssignInspectionEmail)(inspector.email, assign, inspector, "Inspector");
        await (0, emailSender_1.sendAssignInspectionEmail)(assign.owner_email, assign, inspector, "Facility");
        return response.status(200).json({ message: `${inspector.fullname} has been assigned to inspect ${assign.facility_name}`, assign, inspector });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.assignInspector = assignInspector;
