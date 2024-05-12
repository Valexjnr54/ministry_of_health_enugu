"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitor = exports.inspectionReview = exports.inspectionItems = exports.facility = exports.facilitiesByInspectorID = exports.facilitiesByLGA = exports.facilities = void 0;
const models_1 = require("../../../models");
const express_validator_1 = require("express-validator");
const emailSender_1 = require("../../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function facilities(request, response) {
    const inspector_id = request.user.inspectorId;
    // Check if user_id is not present or undefined
    if (!inspector_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_inspector = await prisma.inspector.findUnique({ where: { id: inspector_id } });
        if (!check_inspector) {
            return response.status(404).json({ message: "Inspector Not Found" });
        }
        const role = check_inspector.role;
        // Check if the role is not 'User'
        if (role !== 'Inspector') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const facilities = await prisma.facility.findMany({ include: { inspector: true, facility_personnel: { include: { user: true } } } });
        return response.status(200).json({ message: `List of All facilities`, facilities });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.facilities = facilities;
async function facilitiesByLGA(request, response) {
    const inspector_id = request.user.inspectorId;
    // Check if user_id is not present or undefined
    if (!inspector_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_inspector = await prisma.inspector.findUnique({ where: { id: inspector_id } });
        if (!check_inspector) {
            return response.status(404).json({ message: "Inspector Not Found" });
        }
        const role = check_inspector.role;
        const lga = check_inspector.lga;
        const int_lga = parseInt(lga);
        // Check if the role is not 'User'
        if (role !== 'Inspector') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const facilities = await prisma.facility.findMany({ where: { lga }, include: { inspector: true, facility_personnel: { include: { user: true } } } });
        const find_lga = await prisma.local_government.findFirst({ where: { id: int_lga } });
        const lga_name = find_lga?.name;
        return response.status(200).json({ message: `List of All facilities in ${lga_name}`, facilities, lga: find_lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.facilitiesByLGA = facilitiesByLGA;
async function facilitiesByInspectorID(request, response) {
    const inspector_id = request.user.inspectorId;
    // Check if user_id is not present or undefined
    if (!inspector_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_inspector = await prisma.inspector.findUnique({ where: { id: inspector_id } });
        if (!check_inspector) {
            return response.status(404).json({ message: "Inspector Not Found" });
        }
        const role = check_inspector.role;
        const lga = check_inspector.lga;
        const int_lga = parseInt(lga);
        // Check if the role is not 'User'
        if (role !== 'Inspector') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const facilities = await prisma.facility.findMany({ where: { assigned_inspector: inspector_id }, include: { inspector: true, facility_personnel: { include: { user: true } } } });
        return response.status(200).json({ message: `List of All facilities assigned to ${check_inspector.fullname}`, facilities });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.facilitiesByInspectorID = facilitiesByInspectorID;
async function facility(request, response) {
    const id = parseInt(request.query.facility_id);
    const inspector_id = request.user.inspectorId;
    // Check if user_id is not present or undefined
    if (!inspector_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
            (0, express_validator_1.body)('facility_id').notEmpty().withMessage('Facility ID is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Retrieve the user by user_id
        const check_inspector = await prisma.inspector.findUnique({ where: { id: inspector_id } });
        if (!check_inspector) {
            return response.status(404).json({ message: "Inspector Not Found" });
        }
        const role = check_inspector.role;
        // Check if the role is not 'User'
        if (role !== 'Inspector') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const facility = await prisma.facility.findUnique({ where: { id }, include: { inspector: true, facility_personnel: { include: { user: true } } } });
        if (!facility) {
            return response.status(404).json({ message: "Facility does not exist" });
        }
        const lga_id = parseInt(facility.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: `${facility?.facility_name} Details has been fetched`, facility, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.facility = facility;
async function inspectionItems(request, response) {
    const id = parseInt(request.query.facility_id);
    const inspector_id = request.user.inspectorId;
    // Check if user_id is not present or undefined
    if (!inspector_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_inspector = await prisma.inspector.findUnique({ where: { id: inspector_id } });
        if (!check_inspector) {
            return response.status(404).json({ message: "Inspector Not Found" });
        }
        const role = check_inspector.role;
        // Check if the role is not 'User'
        if (role !== 'Inspector') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const inspection_review = await prisma.inspection_review.findUnique({ where: { facility_id: id } });
        const facility = await prisma.facility.findUnique({
            where: { id },
            select: {
                id: true,
                facility_name: true,
                facility_type: true,
                cac: true,
                cac_image: true,
                owner_name: true,
                owner_nin: true,
                owner_nin_image: true,
                services_offered: true,
                number_of_bed: true,
                source_of_water: true,
                method_of_disposal: true,
                site_plan: true,
                building_plan: true,
                compliance_certificate: true,
                tax_clearance_certificate: true,
                facility_personnel_count: true,
                facility_personnel: { include: { user: true } },
                lga: true,
                inspector: true,
                owner_passport: true,
                owner_gender: true,
                personnel_incharge: true,
                personnel_incharge_name: true,
                personnel_incharge_practice_id: true,
                supervising_doctor_name: true,
                supervising_doctor_practice_id: true,
            },
        });
        if (!facility) {
            return response.status(404).json({ message: "Facility does not exist" });
        }
        const lga_id = parseInt(facility.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: `Items to verify`, facility, inspection_review, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.inspectionItems = inspectionItems;
async function inspectionReview(request, response) {
    const inspector_id = request.user.inspectorId;
    const { facility_id, cac, owner_nin, services_offered, number_of_bed, source_of_water, method_of_disposal, facility_personnel, site_plan, building_plan, compliance_certificate, tax_clearance_certificate, facility_personnel_count, review, status } = request.body;
    // Check if user_id is not present or undefined
    if (!inspector_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
            (0, express_validator_1.body)('facility_id').notEmpty().withMessage('Facility ID is required'),
            (0, express_validator_1.body)('cac').isBoolean().withMessage('CAC field must be a boolean value'),
            (0, express_validator_1.body)('owner_nin').isBoolean().withMessage('Owner NIN field must be a boolean value'),
            (0, express_validator_1.body)('services_offered').isBoolean().withMessage('Services offered field must be a boolean value'),
            (0, express_validator_1.body)('number_of_bed').isBoolean().withMessage('Number of bed field must be a boolean value'),
            (0, express_validator_1.body)('source_of_water').isBoolean().withMessage('Source of water field must be a boolean value'),
            (0, express_validator_1.body)('method_of_disposal').isBoolean().withMessage('Method of disposal field must be a boolean value'),
            (0, express_validator_1.body)('site_plan').isBoolean().withMessage('Site plan field must be a boolean value'),
            (0, express_validator_1.body)('building_plan').isBoolean().withMessage('Building plan field must be a boolean value'),
            // body('compliance_certificate').isBoolean().withMessage('Compliance certificate field must be a boolean value'),
            (0, express_validator_1.body)('tax_clearance_certificate').isBoolean().withMessage('Tax clearance certificate field must be a boolean value'),
            (0, express_validator_1.body)('facility_personnel_count').isBoolean().withMessage('Facility Personnel Count field must be a boolean value'),
            (0, express_validator_1.body)('facility_personnel').isBoolean().withMessage('Facility Personnel field must be a boolean value'),
            (0, express_validator_1.body)('status').notEmpty().withMessage('Status is required'),
            (0, express_validator_1.body)('review').notEmpty().withMessage('Review is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Retrieve the user by user_id
        const check_inspector = await prisma.inspector.findUnique({ where: { id: inspector_id } });
        if (!check_inspector) {
            return response.status(404).json({ message: "Inspector Not Found" });
        }
        const role = check_inspector.role;
        // Check if the role is not 'User'
        if (role !== 'Inspector') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        if (status !== "Approved" && status !== "Rejected") {
            return response.status(422).json({ message: 'status can either be Approved or Rejected' });
        }
        const facility_inspection = await prisma.inspection_review.findUnique({ where: { facility_id } });
        if (facility_inspection) {
            const update_inspection = await prisma.inspection_review.update({
                where: { facility_id },
                data: {
                    cac,
                    owner_nin,
                    services_offered,
                    number_of_bed,
                    source_of_water,
                    method_of_disposal,
                    site_plan,
                    building_plan,
                    // compliance_certificate,    
                    tax_clearance_certificate,
                    facility_personnel_count,
                    facility_personnel,
                    review,
                    status,
                }
            });
            const facility = await prisma.facility.update({ where: { id: facility_id }, data: { status } });
            if (!facility) {
                return response.status(404).json({ message: "Facility does not exist" });
            }
            const lga_id = parseInt(facility.lga);
            const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
            return response.status(200).json({ message: "Review has been submitted", review: update_inspection, facility, lga });
        }
        const update_inspection = await prisma.inspection_review.create({
            data: {
                facility_id,
                cac,
                owner_nin,
                services_offered,
                number_of_bed,
                source_of_water,
                method_of_disposal,
                site_plan,
                building_plan,
                // compliance_certificate,    
                tax_clearance_certificate,
                facility_personnel_count,
                facility_personnel,
                review,
                status
            }
        });
        const facility = await prisma.facility.update({ where: { id: facility_id }, data: { status, is_inspected: true }, include: { inspector: true, facility_personnel: { include: { user: true } } } });
        if (update_inspection.status == "Approved") {
            await (0, emailSender_1.sendApprovedInspectionMail)(facility.owner_email, facility, facility.facility_name, facility.enugu_facility_id, facility.expiry_date, update_inspection);
        }
        else {
            await (0, emailSender_1.sendRejectedInspectionMail)(facility.owner_email, facility, facility.facility_name, facility.enugu_facility_id, facility.expiry_date, update_inspection);
        }
        const lga_id = parseInt(facility.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: "Review has been submitted", review: update_inspection, facility, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.inspectionReview = inspectionReview;
async function monitor(request, response) {
    const { type } = request.query;
    const id = typeof request.query.id === 'string' ? request.query.id : undefined;
    if (id == undefined) {
        return response.status(422).json({ message: "Enugu state facility ID / Enugu state personnel ID / Enugu state food handler ID is required" });
    }
    try {
        let user;
        switch (type) {
            case "personnel":
                user = await prisma.users.findUnique({ where: { enugu_practice_id: id } });
                if (!user) {
                    return response.status(404).json({ message: "User does not exist" });
                }
                break;
            case "facility":
                user = await prisma.facility.findUnique({ where: { enugu_facility_id: id }, include: { inspection_review: true, inspector: true, facility_personnel: { include: { user: true } } } });
                if (!user) {
                    return response.status(404).json({ message: "Facility does not exist" });
                }
                break;
            case "food_handler":
                user = await prisma.food_handlers.findUnique({ where: { enugu_handler_id: id } });
                if (!user) {
                    return response.status(404).json({ message: "Food Handler does not exist" });
                }
                break;
            default:
                return response.status(400).json({ message: "Undefined type: It can be personnel, facility, or food_handler" });
        }
        // Provide a standard response if no error was encountered
        return response.status(200).json({ message: "Data retrieved successfully", user });
    }
    catch (error) {
        // Log the error or handle it as necessary
        console.error(error);
        return response.status(500).json({ message: "Internal server error" });
    }
}
exports.monitor = monitor;
