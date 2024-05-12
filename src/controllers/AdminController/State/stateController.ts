import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '../../../models';
import { body, validationResult } from 'express-validator';

const prisma = new PrismaClient();

export async function createState(request: Request, response: Response) {
    const admin_id = request.user.adminId;
    const { states } = request.body
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
            body('states').notEmpty().withMessage('States Name is required'),
        ];
          
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        states.forEach(async (state: any) => {
            try {
                const stateCreate = await prisma.state.create({
                    data: {
                        name: state
                    }
                })
            } catch (error) {
                console.error("Error creating facility personnel:", error);
                return response.status(500).json({ message: error})
            }
        });

        const states_fetch = await prisma.state.findMany()
        
        return response.status(200).json({ message: 'State(s) Created Successfullly', state:states_fetch});
    } catch (error) {
        return response.status(500).json({ message: error})
    }
}

export async function allState(request: Request, response: Response) {
    try {
        const state = await prisma.state.findMany({})
        return response.status(200).json({ message: 'States Fetched Successfullly', state});
    } catch (error) {
        return response.status(500).json({ message: error})
    }
}