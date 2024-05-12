"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePersonnel = exports.addPersonnel = exports.updateDocuments = exports.updateDetails = exports.changePassword = void 0;
const models_1 = require("../../../models");
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const fs_1 = __importDefault(require("fs"));
const cloudinary_1 = __importStar(require("../../../utils/cloudinary"));
const prisma = new models_1.PrismaClient();
async function changePassword(request, response) {
    const { old_password, new_password, confirm_password } = request.body;
    const facility_id = request.user.facilityId;
    // Check if user_id is not present or undefined
    if (!facility_id) {
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
        const check_facility = await prisma.facility.findUnique({ where: { id: facility_id } });
        if (!check_facility) {
            return response.status(404).json({ message: "Facility Not Found" });
        }
        const password = check_facility.password;
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
        const update = await prisma.facility.update({ where: { id: facility_id }, data: { password: hashedPassword } });
        const lga_id = parseInt(update.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: "Password Updated Successfully", user: update, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.changePassword = changePassword;
// export async function changeProfileImage(request: Request, response: Response) {
//     const facility_id = request.user.facilityId;
//     // Check if user_id is not present or undefined
//     if (!facility_id) {
//         return response.status(403).json({ message: 'Unauthorized User' });
//     }
//     try {
//         // Retrieve the user by user_id
//         const check_facility = await prisma.facility.findUnique({ where: { id: facility_id } });
//         if (!check_facility) {
//             return response.status(404).json({ message: "Facility Not Found"})
//         }
//         //Uploading Image to Cloudinary
//         let profile_image // Default URL
//         if (request.file) {
//         const profile_image_path = request.file.path; // Assuming you're using multer or a similar middleware for file uploads
//         if (profile_image_path != null) {
//             const uploadedImageUrl = await uploadImage(profile_image_path, 'enugu_ministry_of_health/images/facility_passports');
//             if (uploadedImageUrl) {
//             profile_image = uploadedImageUrl;
//             }
//         }
//         fs.unlink(profile_image_path, (err) => {
//             if (err) {
//             console.error(`Error deleting file: ${profile_image_path}`);
//             } else {
//             console.log(`File deleted: ${profile_image_path}`);
//             }
//         });
//         }
//         else {
//             response.status(400).json({ message: 'No file uploaded' });
//         }
//         const user = await prisma.facility.update({ where: {id : facility_id}, data:{profile_image}})
//         return response.status(200).json({ message: 'Facility profile image updated', user});
//       } catch (error) {
//         return response.status(500).json({ message: error})
//       }
// }
async function updateDetails(request, response) {
    const { facility_name, location, owner_name, owner_phone_number, owner_contact_address, owner_email, facility_sector, facility_level, services_offered, number_of_bed, source_of_water, method_of_disposal } = request.body;
    const facility_id = request.user.facilityId;
    // Check if user_id is not present or undefined
    if (!facility_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
            (0, express_validator_1.body)('facility_name').notEmpty().withMessage('Facility Name is required'),
            (0, express_validator_1.body)('location').notEmpty().withMessage('Location is required'),
            (0, express_validator_1.body)('owner_email').isEmail().withMessage('Owner email address'),
            (0, express_validator_1.body)('owner_name').notEmpty().withMessage('Owner Name is required'),
            (0, express_validator_1.body)('owner_phone_number').notEmpty().withMessage('Owner Phone Number is required'),
            (0, express_validator_1.body)('owner_contact_address').notEmpty().withMessage('Owner Contact Address is required'),
            (0, express_validator_1.body)('facility_sector').notEmpty().withMessage('Facility Sector is required'),
            (0, express_validator_1.body)('facility_level').notEmpty().withMessage('Facility Level is required'),
            (0, express_validator_1.body)('services_offered').notEmpty().withMessage('Services Offered is required'),
            (0, express_validator_1.body)('number_of_bed').notEmpty().withMessage('number Of Bed is required'),
            (0, express_validator_1.body)('source_of_water').notEmpty().withMessage('Source of Water is required'),
            (0, express_validator_1.body)('method_of_disposal').notEmpty().withMessage('Method of Disposal is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Retrieve the user by user_id
        const check_facility = await prisma.facility.findUnique({ where: { id: facility_id } });
        if (!check_facility) {
            return response.status(404).json({ message: "Facility Not Found" });
        }
        let amount;
        const numberOfBed = parseInt(number_of_bed, 10);
        const services_offered_array = services_offered.split(',');
        const service_offered = JSON.stringify(services_offered_array);
        const user = await prisma.facility.update({
            where: { id: facility_id },
            data: {
                facility_name,
                location,
                owner_name,
                owner_phone_number,
                owner_contact_address,
                owner_email,
                facility_sector,
                facility_level,
                services_offered: service_offered,
                number_of_bed: numberOfBed,
                source_of_water,
                method_of_disposal,
            }
        });
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: 'Facility profile updated', user, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.updateDetails = updateDetails;
async function updateDocuments(request, response) {
    const facility_id = request.user.facilityId;
    // Check if user_id is not present or undefined
    if (!facility_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_facility = await prisma.facility.findUnique({ where: { id: facility_id } });
        if (!check_facility) {
            return response.status(404).json({ message: "Facility Not Found" });
        }
        const files = request.files;
        if (!files) {
            return response.status(400).json({ message: 'File data is missing' });
        }
        // Prepare data for database update
        let updateData = {};
        if (files.site_plan && files.site_plan.length) {
            let site_plan;
            if (files.site_plan[0].mimetype == 'image/png' || files.site_plan[0].mimetype == 'image/jpeg' || files.site_plan[0].mimetype == 'image/jpg' || files.site_plan[0].mimetype == 'image/gif') {
                // Upload Site Plan image to Cloudinary
                site_plan = await (0, cloudinary_1.default)(files.site_plan[0].path, 'enugu_ministry_of_health/images/site_plans');
                fs_1.default.unlink(files.site_plan[0].path, (err) => {
                    if (err) {
                        console.error(`Error deleting Site Plan file`);
                    }
                    else {
                        console.log(`Site Plan File deleted`);
                    }
                });
            }
            else {
                // Upload Site Plan image to Cloudinary
                site_plan = await (0, cloudinary_1.uploadFile)(files.site_plan[0].path, 'enugu_ministry_of_health/images/site_plans');
                fs_1.default.unlink(files.site_plan[0].path, (err) => {
                    if (err) {
                        console.error(`Error deleting Site Plan file`);
                    }
                    else {
                        console.log(`Site Plan File deleted`);
                    }
                });
            }
            updateData.site_plan = site_plan;
        }
        if (files.building_plan && files.building_plan.length) {
            let building_plan;
            if (files.building_plan[0].mimetype == 'image/png' || files.building_plan[0].mimetype == 'image/jpeg' || files.building_plan[0].mimetype == 'image/jpg' || files.building_plan[0].mimetype == 'image/gif') {
                // Upload Building Plan image to Cloudinary
                building_plan = await (0, cloudinary_1.default)(files.building_plan[0].path, 'enugu_ministry_of_health/images/building_plans');
                fs_1.default.unlink(files.building_plan[0].path, (err) => {
                    if (err) {
                        console.error(`Error deleting Building Plan file`);
                    }
                    else {
                        console.log(`Building Plan File deleted`);
                    }
                });
            }
            else {
                // Upload Building Plan image to Cloudinary
                building_plan = await (0, cloudinary_1.uploadFile)(files.building_plan[0].path, 'enugu_ministry_of_health/images/building_plans');
                fs_1.default.unlink(files.building_plan[0].path, (err) => {
                    if (err) {
                        console.error(`Error deleting Building Plan file`);
                    }
                    else {
                        console.log(`Building Plan File deleted`);
                    }
                });
            }
            updateData.building_plan = building_plan;
        }
        if (files.tax_clearance_certificate && files.tax_clearance_certificate.length) {
            let tax_clearance_certificate;
            if (files.tax_clearance_certificate[0].mimetype == 'image/png' || files.tax_clearance_certificate[0].mimetype == 'image/jpeg' || files.tax_clearance_certificate[0].mimetype == 'image/jpg' || files.tax_clearance_certificate[0].mimetype == 'image/gif') {
                // Upload Tax Clearance Certificate image to Cloudinary
                tax_clearance_certificate = await (0, cloudinary_1.default)(files.tax_clearance_certificate[0].path, 'enugu_ministry_of_health/images/tax_clearance_certificates');
                fs_1.default.unlink(files.tax_clearance_certificate[0].path, (err) => {
                    if (err) {
                        console.error(`Error deleting Tax Clearance Certificate Image file`);
                    }
                    else {
                        console.log(`Tax Clearance Certificate Image File deleted`);
                    }
                });
            }
            else {
                // Upload Tax Clearance Certificate image to Cloudinary
                tax_clearance_certificate = await (0, cloudinary_1.uploadFile)(files.tax_clearance_certificate[0].path, 'enugu_ministry_of_health/images/tax_clearance_certificates');
                fs_1.default.unlink(files.tax_clearance_certificate[0].path, (err) => {
                    if (err) {
                        console.error(`Error deleting Tax Clearance Certificate Image file`);
                    }
                    else {
                        console.log(`Tax Clearance Certificate Image File deleted`);
                    }
                });
            }
            updateData.tax_clearance_certificate = tax_clearance_certificate;
        }
        if (files.owner_passport && files.owner_passport.length) {
            let owner_passport;
            if (files.owner_passport[0].mimetype == 'image/png' || files.owner_passport[0].mimetype == 'image/jpeg' || files.owner_passport[0].mimetype == 'image/jpg' || files.owner_passport[0].mimetype == 'image/gif') {
                // Upload Site Plan image to Cloudinary
                owner_passport = await (0, cloudinary_1.default)(files.owner_passport[0].path, 'enugu_ministry_of_health/images/owner_passports');
                fs_1.default.unlink(files.owner_passport[0].path, (err) => {
                    if (err) {
                        console.error(`Error deleting Site Plan file`);
                    }
                    else {
                        console.log(`Owner NIN File deleted`);
                    }
                });
            }
            else {
                owner_passport = await (0, cloudinary_1.uploadFile)(files.owner_passport[0].path, 'enugu_ministry_of_health/images/owner_passports');
                fs_1.default.unlink(files.owner_passport[0].path, (err) => {
                    if (err) {
                        console.error(`Error deleting Site Plan file`);
                    }
                    else {
                        console.log(`Owner NIN File deleted`);
                    }
                });
            }
            updateData.owner_passport = owner_passport;
        }
        if (files.cac_image && files.cac_image.length) {
            let cac_image;
            if (files.cac_image[0].mimetype == 'image/png' || files.cac_image[0].mimetype == 'image/jpeg' || files.cac_image[0].mimetype == 'image/jpg' || files.cac_image[0].mimetype == 'image/gif') {
                // Upload Site Plan image to Cloudinary
                cac_image = await (0, cloudinary_1.default)(files.cac_image[0].path, 'enugu_ministry_of_health/images/cac_images');
                fs_1.default.unlink(files.cac_image[0].path, (err) => {
                    if (err) {
                        console.error(`Error deleting Site Plan file`);
                    }
                    else {
                        console.log(`CAC File deleted`);
                    }
                });
            }
            else {
                // Upload Site Plan image to Cloudinary
                cac_image = await (0, cloudinary_1.uploadFile)(files.cac_image[0].path, 'enugu_ministry_of_health/images/cac_images');
                fs_1.default.unlink(files.cac_image[0].path, (err) => {
                    if (err) {
                        console.error(`Error deleting Site Plan file`);
                    }
                    else {
                        console.log(`CAC File deleted`);
                    }
                });
            }
            updateData.cac_image = cac_image;
        }
        const user = await prisma.facility.update({
            where: { id: facility_id },
            data: updateData
        });
        const lga_id = parseInt(user.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: 'Facility document(s) updated', user, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.updateDocuments = updateDocuments;
async function addPersonnel(request, response) {
    const { facility_personnel } = request.body;
    const facility_id = request.user.facilityId;
    // Check if facility_id is not present or undefined
    if (!facility_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
            (0, express_validator_1.body)('facility_personnel').notEmpty().withMessage('Facility Personnel is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Retrieve the facility by facility_id
        const check_facility = await prisma.facility.findUnique({ where: { id: facility_id } });
        if (!check_facility) {
            return response.status(404).json({ message: "Facility Not Found" });
        }
        let count_personnel;
        // Check if facility_personnel_count is a JsonObject
        if (typeof check_facility.facility_personnel_count === 'object' && check_facility.facility_personnel_count !== null) {
            count_personnel = check_facility.facility_personnel_count;
        }
        else {
            count_personnel = {};
        }
        // Extract facility personnel count from the request body
        const facilityPersonnel = facility_personnel;
        const facility_count = facilityPersonnel.count;
        // Check if there is an existing key from facility_count in count_personnel
        for (const key in facility_count) {
            if (count_personnel.hasOwnProperty(key)) {
                // Add the existing value and the new value together
                count_personnel[key] += facility_count[key];
            }
            else {
                // If the key doesn't exist in count_personnel, add it with the new value
                count_personnel[key] = facility_count[key];
            }
        }
        facilityPersonnel.personnel.forEach(async (personnel) => {
            const type = personnel.type;
            const enugu_practice_id = personnel.enugu_practice_id;
            const user = await prisma.users.findUnique({ where: { enugu_practice_id } });
            const user_id = user?.id;
            if (user_id === undefined) {
                console.error("User ID is undefined for personnel:", personnel);
                return; // Skip creating facility personnel if user ID is undefined
            }
            try {
                const createdPersonnel = await prisma.facility_personnel.create({
                    data: {
                        facility_id,
                        enugu_practice_id,
                        user_id,
                        type
                    }
                });
            }
            catch (error) {
                console.error("Error creating facility personnel:", error);
            }
        });
        // Update the facility with the updated count_personnel
        const updatedFacility = await prisma.facility.update({
            where: { id: facility_id },
            data: {
                facility_personnel_count: count_personnel,
            },
        });
        const lga_id = parseInt(updatedFacility.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: 'Facility profile updated', user: updatedFacility, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error || "Internal Server Error" });
    }
    finally {
        await prisma.$disconnect(); // Disconnect Prisma client after operation
    }
}
exports.addPersonnel = addPersonnel;
async function removePersonnel(request, response) {
    const { facility_personnel } = request.body;
    const facility_id = request.user.facilityId;
    // Check if facility_id is not present or undefined
    if (!facility_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
            (0, express_validator_1.body)('facility_personnel').notEmpty().withMessage('Facility Personnel is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Retrieve the facility by facility_id
        const check_facility = await prisma.facility.findUnique({ where: { id: facility_id } });
        if (!check_facility) {
            return response.status(404).json({ message: "Facility Not Found" });
        }
        let count_personnel;
        // Check if facility_personnel_count is a JsonObject
        if (typeof check_facility.facility_personnel_count === 'object' && check_facility.facility_personnel_count !== null) {
            count_personnel = check_facility.facility_personnel_count;
        }
        else {
            count_personnel = {};
        }
        // Extract facility personnel count from the request body
        const facilityPersonnel = facility_personnel;
        const facility_count = facilityPersonnel.count;
        // Check if there is an existing key from facility_count in count_personnel
        for (const key in facility_count) {
            if (count_personnel.hasOwnProperty(key)) {
                // Add the existing value and the new value together
                count_personnel[key] = -facility_count[key];
            }
        }
        facilityPersonnel.personnel.forEach(async (personnel) => {
            const type = personnel.type;
            const enugu_practice_id = personnel.enugu_practice_id;
            const user = await prisma.users.findUnique({ where: { enugu_practice_id } });
            const user_id = user?.id;
            if (user_id === undefined) {
                console.error("User ID is undefined for personnel:", personnel);
                return; // Skip creating facility personnel if user ID is undefined
            }
            try {
                const createdPersonnel = await prisma.facility_personnel.deleteMany({
                    where: {
                        facility_id,
                        enugu_practice_id,
                    }
                });
            }
            catch (error) {
                console.error("Error creating facility personnel:", error);
            }
        });
        // Update the facility with the updated count_personnel
        const updatedFacility = await prisma.facility.update({
            where: { id: facility_id },
            data: {
                facility_personnel_count: count_personnel,
            },
        });
        const lga_id = parseInt(updatedFacility.lga);
        const lga = await prisma.local_government.findUnique({ where: { id: lga_id } });
        return response.status(200).json({ message: 'Facility profile updated', user: updatedFacility, lga });
    }
    catch (error) {
        return response.status(500).json({ message: error || "Internal Server Error" });
    }
    finally {
        await prisma.$disconnect(); // Disconnect Prisma client after operation
    }
}
exports.removePersonnel = removePersonnel;
