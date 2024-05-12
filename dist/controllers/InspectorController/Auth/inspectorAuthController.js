"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.logoutinspector = exports.loginInspector = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("../../../config/config");
const prisma = new models_1.PrismaClient();
async function loginInspector(req, res) {
    const { login_id, password } = req.body;
    try {
        const inspector = await prisma.inspector.findFirst({
            where: {
                OR: [
                    { email: login_id },
                    { username: login_id }
                ]
            }
        });
        if (!inspector) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Check if inspector password is null
        if (inspector.password === null) {
            return res.status(401).json({ error: 'Invalid email/username or password' });
        }
        // Verify the password
        const passwordMatch = await bcrypt_1.default.compare(password, inspector.password);
        if (!passwordMatch) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        if (!config_1.Config.Jwt_secret) {
            console.error('Jwt_secret is not defined!');
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }
        const lga_id = parseInt(inspector.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        // Generate a JWT token for the inspector
        const token = jsonwebtoken_1.default.sign({ inspectorId: inspector.id, email: inspector.email }, config_1.Config.Jwt_secret);
        res.status(200).json({ token, admin: inspector, lga });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.loginInspector = loginInspector;
async function logoutinspector(req, res) {
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
        // Optionally, you can perform additional tasks here, such as logging the inspector's logout action.
        // Send a success response to the client
        res.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        // Handle any potential errors that may occur during the logout process.
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.logoutinspector = logoutinspector;
async function profile(request, response) {
    const inspector_id = request.user.inspectorId;
    const tokencheck = request.headers.authorization?.split(' ')[1];
    try {
        // Check if the email is already registered
        const existinginspector = await prisma.inspector.findUnique({ where: { id: inspector_id } });
        if (!existinginspector) {
            return response.status(404).json({ message: 'Inspector not Found' });
        }
        const existingToken = await prisma.revokedToken.findUnique({ where: { token: tokencheck } });
        if (existingToken) {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const inspector = await prisma.inspector.findUnique({
            where: {
                id: inspector_id
            }
        });
        if (!inspector) {
            return response.status(404).json({ message: "Inspector does not exist" });
        }
        const lga_id = parseInt(inspector.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: 'inspector profile', inspector, lga });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.profile = profile;
