"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDetails = exports.changeProfileImage = exports.changePassword = void 0;
const models_1 = require("../../../models");
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const fs_1 = __importDefault(require("fs"));
const cloudinary_1 = __importDefault(require("../../../utils/cloudinary"));
const prisma = new models_1.PrismaClient();
async function changePassword(request, response) {
    const { old_password, new_password, confirm_password } = request.body;
    const personnel_id = request.user.userId;
    // Check if user_id is not present or undefined
    if (!personnel_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
            (0, express_validator_1.body)('old_password').notEmpty().withMessage('Old Password is required'),
            (0, express_validator_1.body)('new_password').isLength({ min: 10 }).withMessage('Password must be at least 10 characters long'),
            (0, express_validator_1.body)('confirm_password').isLength({ min: 10 }).withMessage('Confirm Password must be at least 10 characters long'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Retrieve the user by user_id
        const check_personnel = await prisma.users.findUnique({ where: { id: personnel_id } });
        if (!check_personnel) {
            return response.status(404).json({ message: "Personnel Not Found" });
        }
        const password = check_personnel.password;
        if (password !== null) {
            // Verify the password
            const passwordMatch = await bcrypt_1.default.compare(old_password, password);
            if (!passwordMatch) {
                return response.status(401).json({ error: 'Old Password Mismatch' });
            }
        }
        if (new_password !== confirm_password) {
            return response.status(401).json({ error: 'Password Mismatch' });
        }
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(new_password, 10);
        const update = await prisma.users.update({ where: { id: personnel_id }, data: { password: hashedPassword } });
        const lga_id = parseInt(update.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: "Password Updated Successfully", user: update, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.changePassword = changePassword;
async function changeProfileImage(request, response) {
    const personnel_id = request.user.userId;
    // Check if user_id is not present or undefined
    if (!personnel_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_personnel = await prisma.users.findUnique({ where: { id: personnel_id } });
        if (!check_personnel) {
            return response.status(404).json({ message: "Personnel Not Found" });
        }
        //Uploading Image to Cloudinary
        let profile_image; // Default URL
        if (request.file) {
            const profile_image_path = request.file.path; // Assuming you're using multer or a similar middleware for file uploads
            if (profile_image_path != null) {
                const uploadedImageUrl = await (0, cloudinary_1.default)(profile_image_path, 'enugu_ministry_of_health/images/health_personnel_passports');
                if (uploadedImageUrl) {
                    profile_image = uploadedImageUrl;
                }
            }
            fs_1.default.unlink(profile_image_path, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${profile_image_path}`);
                }
                else {
                    console.log(`File deleted: ${profile_image_path}`);
                }
            });
        }
        else {
            response.status(400).json({ message: 'No file uploaded' });
        }
        const user = await prisma.users.update({ where: { id: personnel_id }, data: { passport: profile_image } });
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: 'Personnel profile image updated', user, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.changeProfileImage = changeProfileImage;
async function updateDetails(request, response) {
    const { fullname, address, phone_number } = request.body;
    const personnel_id = request.user.userId;
    // Check if user_id is not present or undefined
    if (!personnel_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
            (0, express_validator_1.body)('fullname').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('address').notEmpty().withMessage('Residental Address is required'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone number is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Retrieve the user by user_id
        const check_personnel = await prisma.users.findUnique({ where: { id: personnel_id } });
        if (!check_personnel) {
            return response.status(404).json({ message: "Personnel Not Found" });
        }
        const user = await prisma.users.update({
            where: { id: personnel_id },
            data: { fullname, address, phone_number }
        });
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: 'Personnel profile updated', user, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.updateDetails = updateDetails;
