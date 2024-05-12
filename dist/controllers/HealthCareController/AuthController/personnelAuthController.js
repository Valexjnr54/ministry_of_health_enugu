"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.logoutPersonnel = exports.loginPersonnel = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("../../../config/config");
const prisma = new models_1.PrismaClient();
async function loginPersonnel(req, res) {
    const { login_id, password } = req.body;
    try {
        const user = await prisma.users.findFirst({
            where: {
                OR: [
                    { email: login_id },
                    { enugu_practice_id: login_id },
                    { practice_id: login_id }
                ]
            }
        });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Check if user password is null
        if (user.password === null) {
            return res.status(401).json({ error: 'Invalid email/username or password' });
        }
        // Verify the password
        const passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        if (!config_1.Config.Jwt_secret) {
            console.error('Jwt_secret is not defined!');
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }
        // Generate a JWT token for the user
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.enugu_practice_id }, config_1.Config.Jwt_secret);
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        res.status(200).json({ token, user, lga });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.loginPersonnel = loginPersonnel;
async function logoutPersonnel(req, res) {
    try {
        // Extract token from request headers or cookies, depending on how it's sent
        const token = req.headers.authorization?.split(' ')[1]; // Assuming token is sent as a Bearer token
        if (!token) {
            return res.status(200).json({ message: 'Already logged out' });
        }
        // Optionally, you may want to add the token to a list of revoked tokens in your database
        const regToken = await prisma.revokedToken.findUnique({ where: { token } });
        if (regToken) {
            return res.status(400).json({ message: 'User already logged out' });
        }
        await prisma.revokedToken.create({ data: { token } });
        // Clear the JWT token from the client-side cookies
        res.clearCookie('jwt');
        // Optionally, you can perform additional tasks here, such as logging the user's logout action.
        // Send a success response to the client
        res.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        // Handle any potential errors that may occur during the logout process.
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.logoutPersonnel = logoutPersonnel;
async function profile(request, response) {
    const user_id = request.user.userId;
    const tokencheck = request.headers.authorization?.split(' ')[1];
    try {
        // Check if the email is already registered
        const existinguser = await prisma.users.findUnique({ where: { id: user_id } });
        if (!existinguser) {
            return response.status(404).json({ message: 'user not Found' });
        }
        const existingToken = await prisma.revokedToken.findUnique({ where: { token: tokencheck } });
        if (existingToken) {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const user = await prisma.users.findUnique({
            where: {
                id: user_id
            }
        });
        if (!user) {
            return response.status(404).json({ message: "Personnel does not exist" });
        }
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: 'user profile', user });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.profile = profile;
