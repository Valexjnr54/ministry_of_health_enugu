"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmEnforcer = exports.facilityPriceList = exports.personnelPriceList = void 0;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const prisma = new models_1.PrismaClient();
async function personnelPriceList(request, response) {
    // Assuming `type` is directly passed in the request body and is expected to be an enum type.
    const { type } = request.body;
    // Check if type is provided
    if (!type) {
        return response.status(400).json({ message: "Type is required." });
    }
    try {
        // Attempt to fetch the price list for the provided type
        const price = await prisma.personnel_price_list.findFirst({
            where: { type: type }
        });
        // Check if a price list entry was found
        if (!price) {
            return response.status(404).json({ message: `No Price List associated with type ${type}` });
        }
        if (price.certificate_charge === null) {
            return response.status(400).json({ message: `Certificate charge should not be null` });
        }
        const application_fee = price.application_fee;
        const application_charge_in_percent = price.application_charge / 100;
        const certificate_fee = price.enugu_ID_certificate;
        const certificate_charge_in_percent = price.certificate_charge / 100;
        const renewal_fee = price.renewal_fee;
        const renewal_charge_in_percent = price.renewal_charge / 100;
        const charge_fee = application_fee * application_charge_in_percent;
        const renewal_charge_fee = renewal_fee * renewal_charge_in_percent;
        const certificate_charge_fee = certificate_fee * certificate_charge_in_percent;
        const total_application_fee = application_fee + charge_fee;
        const total_certificate_fee = certificate_fee + certificate_charge_fee;
        const total_fee = total_application_fee + total_certificate_fee;
        const total_renewal = renewal_charge_fee + renewal_fee;
        // If a price list entry is found, return it
        return response.status(200).json({ 'applicationFee': total_fee, 'renewalFee': total_renewal });
    }
    catch (error) {
        console.error("Error fetching price list:", error);
        // Send a generic error message to the client
        return response.status(500).json({ message: "Internal server error" });
    }
}
exports.personnelPriceList = personnelPriceList;
async function facilityPriceList(request, response) {
    // Assuming `type` is directly passed in the request body and is expected to be an enum type.
    const { type, number_of_beds } = request.body;
    // Check if type is provided
    if (!type) {
        return response.status(400).json({ message: "Type is required." });
    }
    try {
        if (type === "Specialist_hospital" || type === "Specialist_clinic" || type === "General_hospital" || type === "Maternity_home") {
            const validationRules = [
                (0, express_validator_1.body)('number_of_beds').notEmpty().withMessage('Number of beds is required'),
            ];
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            const errors = (0, express_validator_1.validationResult)(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            let beds_range;
            if (type === "Specialist_hospital" || type === "Specialist_clinic") {
                if (number_of_beds > 10) {
                    beds_range = "above 10";
                }
                else if (number_of_beds >= 6 && number_of_beds <= 10) {
                    beds_range = "6 to 10";
                }
                else if (number_of_beds >= 1 && number_of_beds <= 5) {
                    beds_range = "1 to 5";
                }
                else {
                    beds_range = "without bed";
                }
            }
            else if (type === "General_hospital") {
                if (number_of_beds > 50) {
                    beds_range = "above 50";
                }
                else if (number_of_beds >= 31 && number_of_beds <= 50) {
                    beds_range = "30 to 50";
                }
                else if (number_of_beds >= 10 && number_of_beds <= 30) {
                    beds_range = "10 to 30";
                }
                else {
                    beds_range = "less than 10";
                }
            }
            else if (type === "Maternity_home") {
                if (number_of_beds > 30) {
                    beds_range = "above 30";
                }
                else if (number_of_beds >= 21 && number_of_beds <= 30) {
                    beds_range = "21 to 30";
                }
                else if (number_of_beds >= 11 && number_of_beds <= 20) {
                    beds_range = "11 to 20";
                }
                else {
                    beds_range = "1 to 10";
                }
            }
            // Attempt to fetch the price list for the provided type
            const price = await prisma.facility_price_list.findFirst({
                where: { facility_type: type, number_of_beds: beds_range }
            });
            // Check if a price list entry was found
            if (!price) {
                return response.status(404).json({ message: `No Price List associated with type ${type}` });
            }
            if (price.verification_charge === null || price.inspection_charge === null || price.certificate_charge === null || price.verification_fee === null || price.inspection_fee === null || price.certificate_fee === null) {
                return response.status(400).json({ message: `Certificate Fee & charge, Inspection Fee & Charge and Verification Fee & Charge should not be null` });
            }
            const application_fee = price.application_fee;
            const application_charge_in_percent = price.application_fee_charge / 100;
            const renewal_fee = price.renewal_fee;
            const renewal_charge_percent = price.renewal_charge / 100;
            const verification_fee = price.verification_fee;
            const verification_charge_percent = price.verification_charge / 100;
            const certificate_fee = price.certificate_fee;
            const certificate_charge_percent = price.certificate_charge / 100;
            const inspection_fee = price.inspection_fee;
            const inspection_charge_percent = price.inspection_charge / 100;
            const first_time_reg_fee = price.first_time_reg;
            const first_time_charge_percent = price.first_time_charge / 100;
            const charge_fee = application_fee * application_charge_in_percent;
            const first_time_charge_fee = first_time_reg_fee * first_time_charge_percent;
            const renewal_charge_fee = renewal_fee * renewal_charge_percent;
            const verification_charge_fee = verification_fee * verification_charge_percent;
            const inspection_charge_fee = inspection_fee * inspection_charge_percent;
            const certificate_charge_fee = certificate_fee * certificate_charge_percent;
            const total_application_fee = charge_fee + application_fee + verification_fee + verification_charge_fee;
            const total_first_time_fee = first_time_reg_fee + first_time_charge_fee + inspection_charge_fee + inspection_fee + certificate_fee + certificate_charge_fee;
            const total_renewal_fee = renewal_fee + renewal_charge_fee + verification_fee + verification_charge_fee + inspection_charge_fee + inspection_fee + certificate_fee + certificate_charge_fee;
            return response.status(200).json({ 'applicationFee': total_application_fee, 'first_timeFee': total_first_time_fee, 'renewalFee': total_renewal_fee });
        }
        // Attempt to fetch the price list for the provided type
        const price = await prisma.facility_price_list.findFirst({
            where: { facility_type: type }
        });
        // Check if a price list entry was found
        if (!price) {
            return response.status(404).json({ message: `No Price List associated with type ${type}` });
        }
        if (price.verification_charge === null || price.inspection_charge === null || price.certificate_charge === null || price.verification_fee === null || price.inspection_fee === null || price.certificate_fee === null) {
            return response.status(400).json({ message: `Certificate Fee & charge, Inspection Fee & Charge and Verification Fee & Charge should not be null` });
        }
        const application_fee = price.application_fee;
        const application_charge_in_percent = price.application_fee_charge / 100;
        const renewal_fee = price.renewal_fee;
        const renewal_charge_percent = price.renewal_charge / 100;
        const verification_fee = price.verification_fee;
        const verification_charge_percent = price.verification_charge / 100;
        const certificate_fee = price.certificate_fee;
        const certificate_charge_percent = price.certificate_charge / 100;
        const inspection_fee = price.inspection_fee;
        const inspection_charge_percent = price.inspection_charge / 100;
        const first_time_reg_fee = price.first_time_reg;
        const first_time_charge_percent = price.first_time_charge / 100;
        const charge_fee = application_fee * application_charge_in_percent;
        const first_time_charge_fee = first_time_reg_fee * first_time_charge_percent;
        const renewal_charge_fee = renewal_fee * renewal_charge_percent;
        const verification_charge_fee = verification_fee * verification_charge_percent;
        const inspection_charge_fee = inspection_fee * inspection_charge_percent;
        const certificate_charge_fee = certificate_fee * certificate_charge_percent;
        const total_application_fee = charge_fee + application_fee + verification_fee + verification_charge_fee;
        const total_first_time_fee = first_time_reg_fee + first_time_charge_fee + inspection_charge_fee + inspection_fee + certificate_fee + certificate_charge_fee;
        const total_renewal_fee = renewal_fee + renewal_charge_fee + verification_fee + verification_charge_fee + inspection_charge_fee + inspection_fee + certificate_fee + certificate_charge_fee;
        // If a price list entry is found, return it
        return response.status(200).json({ 'applicationFee': total_application_fee, 'first_timeFee': total_first_time_fee, 'renewalFee': total_renewal_fee });
    }
    catch (error) {
        console.error("Error fetching price list:", error);
        // Send a generic error message to the client
        return response.status(500).json({ message: "Internal server error" });
    }
}
exports.facilityPriceList = facilityPriceList;
async function confirmEnforcer(request, response) {
    const code = request.query.enforcer_code;
    try {
        const check_code = await prisma.enforcer.findUnique({ where: { username: code } });
        if (!check_code) {
            return response.status(404).json({ message: "Enforcer Not Found", status: false });
        }
        return response.status(200).json({ message: "Enforcer found", status: true });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.confirmEnforcer = confirmEnforcer;
