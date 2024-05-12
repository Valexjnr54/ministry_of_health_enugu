"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgottenPassword = void 0;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const emailSender_1 = require("../../utils/emailSender");
const generatePassword_1 = require("../../services/generatePassword");
const prisma = new models_1.PrismaClient();
async function forgottenPassword(request, response) {
    const { type, login_id } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)('type').notEmpty().withMessage('Type is required'),
            (0, express_validator_1.body)('login_id').notEmpty().withMessage('Login ID is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        let user;
        let reset_password_token;
        let email;
        switch (type) {
            case "personnel":
                user = await prisma.users.findFirst({
                    where: {
                        OR: [
                            { enugu_practice_id: login_id },
                            { email: login_id }
                        ]
                    }
                });
                if (!user) {
                    return response.status(404).json({ message: "User does not exist" });
                }
                reset_password_token = user.reset_password_token;
                email = user.email;
                break;
            case "facility":
                user = await prisma.facility.findFirst({
                    where: {
                        OR: [
                            { enugu_facility_id: login_id },
                            { owner_email: login_id }
                        ]
                    }
                });
                if (!user) {
                    return response.status(404).json({ message: "Facility does not exist" });
                }
                reset_password_token = user.reset_password_token;
                email = user.owner_email;
                break;
            case "food_handler":
                user = await prisma.food_handlers.findFirst({
                    where: {
                        OR: [
                            { enugu_handler_id: login_id },
                            { email: login_id }
                        ]
                    }
                });
                if (!user) {
                    return response.status(404).json({ message: "Food Handler does not exist" });
                }
                reset_password_token = user.reset_password_token;
                email = user.email;
                break;
            default:
                return response.status(400).json({ message: "Undefined type: It can be personnel, facility, food_handler" });
        }
        if (!reset_password_token) {
            return response.status(400).json({ message: "Reset Password Token Undefined" });
        }
        await (0, emailSender_1.sendResetEmail)(email, user, reset_password_token, type);
        return response.status(200).json({ message: "An Email has been sent to you. Follow the steps to reset your password" });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.forgottenPassword = forgottenPassword;
async function resetPassword(request, response) {
    const { reset_token, type } = request.query;
    const email = request.query.email;
    const { password, confirm_password } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)('password').isLength({ min: 16 }).withMessage('Password must be at least 16 characters long'),
            (0, express_validator_1.body)('confirm_password').isLength({ min: 16 }).withMessage('Confirm Password must be at least 16 characters long'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        let user;
        let reset_password_token;
        let facility_id;
        switch (type) {
            case "personnel":
                user = await prisma.users.findUnique({ where: { email } });
                if (!user) {
                    return response.status(404).json({ message: "User does not exist" });
                }
                reset_password_token = user.reset_password_token;
                break;
            case "facility":
                user = await prisma.facility.findFirst({ where: { owner_email: email } });
                if (!user) {
                    return response.status(404).json({ message: "Facility does not exist" });
                }
                reset_password_token = user.reset_password_token;
                facility_id = user.id;
                break;
            case "food_handler":
                user = await prisma.food_handlers.findUnique({ where: { email } });
                if (!user) {
                    return response.status(404).json({ message: "Food Handler does not exist" });
                }
                reset_password_token = user.reset_password_token;
                break;
            default:
                return response.status(400).json({ message: "Undefined type: It can be personnel, facility, food_handler" });
        }
        if (reset_password_token !== reset_token) {
            return response.status(400).json({ error: 'Invalid Reset Token' });
        }
        if (password !== confirm_password) {
            return response.status(401).json({ error: 'Password Mismatch' });
        }
        // Hash the password before storing it
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const token = await (0, generatePassword_1.generateResetCode)(30);
        let update;
        switch (type) {
            case "personnel":
                update = await prisma.users.update({ where: { email }, data: { password: hashedPassword, reset_password_token: token } });
                if (!update) {
                    return response.status(404).json({ message: "User does not exist" });
                }
                break;
            case "facility":
                update = await prisma.facility.update({ where: { id: facility_id }, data: { password: hashedPassword, reset_password_token: token } });
                if (!update) {
                    return response.status(404).json({ message: "Facility does not exist" });
                }
                break;
            case "food_handler":
                update = await prisma.food_handlers.update({ where: { email }, data: { password: hashedPassword, reset_password_token: token } });
                if (!update) {
                    return response.status(404).json({ message: "Food Handler does not exist" });
                }
                break;
            default:
                return response.status(400).json({ message: "Undefined type: It can be personnel, facility, food_handler" });
        }
        await (0, emailSender_1.sendResetSuccessEmail)(email, user, token, type);
        return response.status(200).json({ message: "Password Reset successful, please login to continue" });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.resetPassword = resetPassword;
