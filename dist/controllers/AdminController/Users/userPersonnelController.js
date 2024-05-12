"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countHealthPersonnel = exports.countHealthPersonnelByType = exports.allHealthPersonnelByType = exports.allHealthPersonnel = void 0;
const models_1 = require("../../../models");
const prisma = new models_1.PrismaClient();
async function allHealthPersonnel(request, response) {
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
        if (role !== 'Admin' && role !== 'Subadmin_personnel') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const user = await prisma.users.findMany();
        return response.status(200).json({ message: `List of All users`, user });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.allHealthPersonnel = allHealthPersonnel;
async function allHealthPersonnelByType(request, response) {
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
        if (role !== 'Admin' && role !== 'Subadmin_personnel') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const user = await prisma.users.findMany({ where: { type } });
        return response.status(200).json({ message: `List of All ${type}s`, user });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.allHealthPersonnelByType = allHealthPersonnelByType;
async function countHealthPersonnelByType(request, response) {
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
        if (role !== 'Admin' && role !== 'Subadmin_personnel') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const count = await prisma.users.count({ where: { type } });
        return response.status(200).json({ message: `Number of All ${type}s`, count });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.countHealthPersonnelByType = countHealthPersonnelByType;
async function countHealthPersonnel(request, response) {
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
        if (role !== 'Admin' && role !== 'Subadmin_personnel') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const count = await prisma.users.count();
        return response.status(200).json({ message: `Number of All ${type}s`, count });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.countHealthPersonnel = countHealthPersonnel;
