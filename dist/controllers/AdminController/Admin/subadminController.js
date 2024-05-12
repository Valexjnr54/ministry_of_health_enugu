"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allAdmin = exports.registerSubAdmin = void 0;
const models_1 = require("../../../models");
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const generatePassword_1 = require("../../../services/generatePassword");
const emailSender_1 = require("../../../utils/emailSender");
const prisma = new models_1.PrismaClient();
var Role;
(function (Role) {
    Role["Subadmin_personnel"] = "Subadmin_personnel";
    Role["Subadmin_facility"] = "Subadmin_facility";
    Role["Subadmin_foodhandler"] = "Subadmin_foodhandler";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));
async function registerSubAdmin(request, response) {
    const { fullname, username, email, type } = request.body;
    const admin_id = request.user.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
            (0, express_validator_1.body)('fullname').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
            (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
            (0, express_validator_1.body)('type').notEmpty().withMessage('Type of Admin is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const checked_role = check_admin?.role;
        // Check if the role is not 'User'
        if (checked_role !== 'Admin') {
            return response.status(403).json({ message: 'You`re not allowed to perform this action' });
        }
        let role;
        switch (type) {
            case "personnel":
                role = Role.Subadmin_personnel;
                break;
            case "facility":
                role = Role.Subadmin_facility;
                break;
            case "food_handler":
                role = Role.Subadmin_foodhandler;
                break;
            case "super":
                role = Role.Admin;
                break;
            default:
                return response.status(400).json({ message: "Undefined type: It can be personnel, facility, food_handler, super" });
        }
        const password = await (0, generatePassword_1.generateStrongPassword)(16);
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        //Uploading Image to Cloudinary
        let imageUrl = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL
        const reset_password_token = await (0, generatePassword_1.generateResetCode)(30);
        // Create a new Admin in the database
        const newAdmin = await prisma.admin.create({
            data: {
                fullname,
                username,
                email,
                profile_image: imageUrl,
                reset_password_token,
                role,
                password: hashedPassword, // Store the salt along with the hash
            },
        });
        await (0, emailSender_1.sendCreateSubAdminMail)(newAdmin.email, newAdmin, password);
        return response.status(201).json({ message: `${newAdmin.fullname} has been created as an Admin`, newAdmin });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.registerSubAdmin = registerSubAdmin;
async function allAdmin(request, response) {
    const userId = request.user.adminId;
    const tokencheck = request.headers.authorization?.split(' ')[1];
    try {
        // Check if the email is already registered
        const existingUser = await prisma.admin.findUnique({ where: { id: userId } });
        const role = existingUser?.role;
        if (!existingUser) {
            return response.status(404).json({ message: 'User not Found' });
        }
        if (role !== 'Admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        // Create a new user in the database
        const users = await prisma.admin.findMany({
            where: {
                role: {
                    not: "Admin"
                }
            }
        });
        return response.status(200).json({ message: 'All Admin(s)', data: users });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.allAdmin = allAdmin;
