"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countFoodPersonnel = exports.allFoodPersonnel = void 0;
const models_1 = require("../../../models");
const prisma = new models_1.PrismaClient();
async function allFoodPersonnel(request, response) {
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
        if (role !== 'Admin' && role !== 'Subadmin_foodhandler') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const user = await prisma.food_handlers.findMany();
        return response.status(200).json({ message: `List of All users`, user });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.allFoodPersonnel = allFoodPersonnel;
async function countFoodPersonnel(request, response) {
    const admin_id = request.user.adminId;
    const type = request.query.type;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'Admin' && role !== 'Subadmin_foodhandler') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const count = await prisma.food_handlers.count();
        return response.status(200).json({ message: `Number of All Food Handlers`, count });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.countFoodPersonnel = countFoodPersonnel;
