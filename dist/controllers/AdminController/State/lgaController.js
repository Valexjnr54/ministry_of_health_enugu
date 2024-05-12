"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleLga = exports.allLga = exports.createLga = void 0;
const models_1 = require("../../../models");
const express_validator_1 = require("express-validator");
const prisma = new models_1.PrismaClient();
async function createLga(request, response) {
    const admin_id = request.user.adminId;
    const { lgas, state_id } = request.body;
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
            (0, express_validator_1.body)('lgas').notEmpty().withMessage('Local Govenment Name is required'),
            (0, express_validator_1.body)('state_id').notEmpty().withMessage('State Id is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        lgas.forEach(async (lga) => {
            const lga_create = await prisma.local_government.create({
                data: {
                    state_id,
                    name: lga
                }
            });
        });
        const created_lga = await prisma.local_government.findFirst({ where: { state_id } });
        return response.status(200).json({ message: 'Local Government Created Successfullly', created_lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.createLga = createLga;
async function allLga(request, response) {
    try {
        const lga = await prisma.local_government.findMany({});
        return response.status(200).json({ message: 'Local Government Fetched Successfullly', lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.allLga = allLga;
async function singleLga(request, response) {
    const state_id = parseInt(request.query.state_id);
    try {
        const check_lga = await prisma.local_government.findFirst({ where: { state_id } });
        // Check if the role is not 'User'
        if (!check_lga) {
            return response.status(404).json({ message: 'No Local Government For the provided state ID' });
        }
        const lga = await prisma.local_government.findMany({ where: { state_id } });
        return response.status(200).json({ message: 'Local Government Fetched Successfullly', lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.singleLga = singleLga;
