import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '../../../models';
import { setupApprovedSMS } from '../../../utils/sendSMS';

const prisma = new PrismaClient();

export async function allFoodFacility(request: Request, response: Response) {
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
    if (role !== 'Admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const facilities = await prisma.food_facility.findMany()
    return response.status(200).json({ message: `List of All food handler facilities`, facilities });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}


export async function countFoodFacility(request: Request, response: Response) {
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
  if (role !== 'Admin') {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  const count = await prisma.food_facility.count()
  return response.status(200).json({ message: `Number of all food handlers facilities`, count });
} catch (error) {
  return response.status(500).json({ message: error})
}
}