"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approveFoodHandlerNin = exports.approveFoodHandler = exports.approvePersonnelPracticeId = exports.approveCac = exports.approvePersonnelNin = exports.approvePersonnel = void 0;
const models_1 = require("../../../models");
const verification_1 = require("../../../services/verification");
const emailSender_1 = require("../../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function approvePersonnel(request, response) {
    const user_id = parseInt(request.query.user_id, 10);
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
        const findUser = await prisma.users.findUnique({ where: { id: user_id } });
        if (!findUser) {
            return response.status(404).json({ message: "User Does not exist" });
        }
        if (findUser.nin_status != "Approved") {
            return response.status(400).json({ message: "NIN has to be Approved First" });
        }
        if (findUser.practice_id_status != "Approved") {
            return response.status(400).json({ message: "Practice ID has to be Approved First" });
        }
        const user = await prisma.users.update({
            where: {
                id: user_id
            },
            data: {
                status: 'Approved'
            }
        });
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        await (0, emailSender_1.sendApprovedPersonnelMail)(user.email, user, user.fullname, user.enugu_practice_id, user.expiry_date, user.passport, "Personnel");
        return response.status(200).json({ message: `${user.fullname} Has been Approved`, user, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.approvePersonnel = approvePersonnel;
async function approvePersonnelNin(request, response) {
    const user_id = parseInt(request.query.user_id, 10);
    const nin = request.query.nin;
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
        let ninStatus;
        const ninResponse = await (0, verification_1.verifynin)(nin);
        if (ninResponse.nin_data.nin === nin) {
            ninStatus = "Approved";
        }
        else {
            // ninStatus = "Rejected"
            return response.status(400).json({ message: ninResponse });
        }
        // const ninStatus = "Approved"
        const user = await prisma.users.update({
            where: {
                id: user_id,
                nin
            },
            data: {
                nin_status: ninStatus
            }
        });
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: `${user.fullname} Has been ${ninStatus}`, user, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.approvePersonnelNin = approvePersonnelNin;
async function approveCac(request, response) {
    const facility_id = parseInt(request.query.facility_id, 10);
    const cac = request.query.nin;
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
        // let cacStatus: Status | undefined;
        // const ninResponse = await verifynin(nin)
        // if (ninResponse.nin_data.nin === nin) {
        //   ninStatus = "Approved"
        // }else {
        //   // ninStatus = "Rejected"
        //   return response.status(400).json({ message: ninResponse})
        // }
        const cacStatus = "Approved";
        const user = await prisma.facility.update({
            where: {
                id: facility_id,
                cac
            },
            data: {
                cac_status: cacStatus
            }
        });
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: `${user.facility_name} Has been ${cacStatus}`, user, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.approveCac = approveCac;
async function approvePersonnelPracticeId(request, response) {
    const user_id = parseInt(request.query.user_id, 10);
    const practice_id = request.query.practice_id;
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
        const user = await prisma.users.update({
            where: {
                id: user_id
            },
            data: {
                practice_id_status: 'Approved'
            }
        });
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: `${user.fullname} Has been Approved`, user, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.approvePersonnelPracticeId = approvePersonnelPracticeId;
async function approveFoodHandler(request, response) {
    const user_id = parseInt(request.query.user_id, 10);
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
        const findUser = await prisma.food_handlers.findUnique({ where: { id: user_id } });
        if (!findUser) {
            return response.status(404).json({ message: "User Does not exist" });
        }
        if (findUser.nin_status != "Approved") {
            return response.status(400).json({ message: "NIN has to be Approved First" });
        }
        const user = await prisma.food_handlers.update({
            where: {
                id: user_id
            },
            data: {
                status: 'Approved'
            }
        });
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        await (0, emailSender_1.sendApprovedFoodHandlerMail)(user.email, user, user.fullname, user.enugu_handler_id, user.expiry_date, user.passport, "FoodHandler");
        return response.status(200).json({ message: `${user.fullname} Has been Approved`, user, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.approveFoodHandler = approveFoodHandler;
async function approveFoodHandlerNin(request, response) {
    const user_id = parseInt(request.query.user_id, 10);
    const nin = request.query.nin;
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
        let ninStatus;
        const ninResponse = await (0, verification_1.verifynin)(nin);
        if (ninResponse.nin_data.nin === nin) {
            ninStatus = "Approved";
        }
        else {
            // ninStatus = "Rejected"
            return response.status(400).json({ message: ninResponse });
        }
        // const ninStatus = "Approved"
        const user = await prisma.food_handlers.update({
            where: {
                id: user_id,
                nin
            },
            data: {
                nin_status: ninStatus
            }
        });
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: `${user.fullname} Has been ${ninStatus}`, user, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.approveFoodHandlerNin = approveFoodHandlerNin;
