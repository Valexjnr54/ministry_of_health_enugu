import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '../../models';
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

export async function searchPersonnel(request:Request, response:Response) {
    const query = request.query.q as string
    const t = request.query.t
    try {
        const type = t as Prisma.EnumTypeFilter<"users">
        const result = await prisma.users.findMany({
            where: {
                OR: [
                  { fullname: { contains: query } },
                  { enugu_practice_id: { contains: query } },
                  {type: type}
                ],
              },
        });
        if (!result) {
            return response.status(404).json({ message: `Search For ${query} was not found` });
        }
        return response.status(200).json({'result' : result});
    } catch (error) {
        console.error("Error searching personnel:", error);
        // Send a generic error message to the client
        return response.status(500).json({ message: "Internal server error" });
    }
}

export async function searchFacility(request:Request, response:Response) {
    const query = request.query.q as string
    const lga = request.query.lga_id as string
    const t = request.query.t
    try {
        const type = t as Prisma.EnumFacility_TypeFilter<"facility">
        const result = await prisma.facility.findMany({
            where: {
                OR: [
                  { facility_name: { contains: query } },
                  { enugu_facility_id: { contains: query } },
                  {facility_type: type},
                  {lga: lga}
                ],
              },
        });
        if (!result) {
            return response.status(404).json({ message: `Search For ${query} was not found` });
        }
        return response.status(200).json({'result' : result});
    } catch (error) {
        console.error("Error searching facility:", error);
        // Send a generic error message to the client
        return response.status(500).json({ message: "Internal server error" });
    }
}

export async function searchFoodPersonnel(request:Request, response:Response) {
    const query = request.query.q as string
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
        return response.status(200).json({'result' : result});
    } catch (error) {
        console.error("Error searching personnel:", error);
        // Send a generic error message to the client
        return response.status(500).json({ message: "Internal server error" });
    }
}