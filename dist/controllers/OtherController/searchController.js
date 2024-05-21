"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchFoodPersonnel = exports.searchFacility = exports.searchPersonnel = void 0;
const models_1 = require("../../models");
const prisma = new models_1.PrismaClient();
async function searchPersonnel(request, response) {
    const query = request.query.q;
    const t = request.query.t;
    try {
        const type = t;
        const result = await prisma.users.findMany({
            where: {
                OR: [
                    { fullname: { contains: query } },
                    { enugu_practice_id: { contains: query } },
                    { type: type }
                ],
            },
        });
        if (!result) {
            return response.status(404).json({ message: `Search For ${query} was not found` });
        }
        return response.status(200).json({ 'result': result });
    }
    catch (error) {
        console.error("Error searching personnel:", error);
        // Send a generic error message to the client
        return response.status(500).json({ message: "Internal server error" });
    }
}
exports.searchPersonnel = searchPersonnel;
async function searchFacility(request, response) {
    const query = request.query.q;
    const lga = request.query.lga_id;
    const t = request.query.t;
    try {
        const type = t;
        const result = await prisma.facility.findMany({
            where: {
                OR: [
                    { facility_name: { contains: query } },
                    { enugu_facility_id: { contains: query } },
                    { facility_type: type },
                    { lga: lga }
                ],
            },
        });
        if (!result) {
            return response.status(404).json({ message: `Search For ${query} was not found` });
        }
        return response.status(200).json({ 'result': result });
    }
    catch (error) {
        console.error("Error searching facility:", error);
        // Send a generic error message to the client
        return response.status(500).json({ message: "Internal server error" });
    }
}
exports.searchFacility = searchFacility;
async function searchFoodPersonnel(request, response) {
    const query = request.query.q;
    try {
        const result = await prisma.food_handlers.findMany({
            where: {
                OR: [
                    { fullname: { contains: query } },
                    { enugu_handler_id: { contains: query } },
                ],
            },
        });
        if (!result) {
            return response.status(404).json({ message: `Search For ${query} was not found` });
        }
        return response.status(200).json({ 'result': result });
    }
    catch (error) {
        console.error("Error searching personnel:", error);
        // Send a generic error message to the client
        return response.status(500).json({ message: "Internal server error" });
    }
}
exports.searchFoodPersonnel = searchFoodPersonnel;
