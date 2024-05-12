// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../models';
import { body, validationResult } from "express-validator";
import  bcrypt  from "bcrypt";
import { Config } from '../../config/config';
import { sendResetEmail, sendResetSuccessEmail } from '../../utils/emailSender';
import { generateResetCode, generateStrongPassword } from '../../services/generatePassword';

const prisma = new PrismaClient();
type User = {
    email: string;
    // Add other common properties shared among different user types
} | {
    owner_email: string; // Add specific properties for facility users
    // Add other properties specific to facility users
} | {
    id: number;
    // Add properties specific to other user types if needed
};

export async function forgottenPassword(request: Request, response: Response) {
    const { type, login_id } = request.body;
    try {
        const validationRules = [
            body('type').notEmpty().withMessage('Type is required'),
            body('login_id').notEmpty().withMessage('Login ID is required'),
        ];

        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        let user;
        let reset_password_token;
        let email
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
        
        await sendResetEmail(email,user,reset_password_token,type)
        return response.status(200).json({ message: "An Email has been sent to you. Follow the steps to reset your password" });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function resetPassword(request:Request, response:Response) {
    const { reset_token, type } = request.query
    const email = request.query.email as string
    const { password, confirm_password } = request.body
    try {
        const validationRules = [
            body('password').isLength({ min: 16 }).withMessage('Password must be at least 16 characters long'),
            body('confirm_password').isLength({ min: 16 }).withMessage('Confirm Password must be at least 16 characters long'),
        ];

        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        let user
        let reset_password_token
        let facility_id

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
                facility_id = user.id
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
        const hashedPassword = await bcrypt.hash(password, 10);

        const token = await generateResetCode(30)
        let update

        switch (type) {
            case "personnel":
                update = await prisma.users.update({ where: { email }, data:{password: hashedPassword, reset_password_token:token} });
                if (!update) {
                    return response.status(404).json({ message: "User does not exist" });
                }
                break;

            case "facility":
                update = await prisma.facility.update({ where: { id: facility_id }, data:{password: hashedPassword, reset_password_token:token} });
                if (!update) {
                    return response.status(404).json({ message: "Facility does not exist" });
                }
                break;

            case "food_handler":
                update = await prisma.food_handlers.update({ where: { email }, data:{password: hashedPassword, reset_password_token:token} });
                if (!update) {
                    return response.status(404).json({ message: "Food Handler does not exist" });
                }
                break;

            default:
                return response.status(400).json({ message: "Undefined type: It can be personnel, facility, food_handler" });
        }

        await sendResetSuccessEmail(email,user,token,type)
        return response.status(200).json({ message: "Password Reset successful, please login to continue"})
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

