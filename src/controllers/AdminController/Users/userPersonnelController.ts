import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '../../../models';
import { setupApprovedSMS } from '../../../utils/sendSMS';

const prisma = new PrismaClient();

export async function allHealthPersonnel(request: Request, response: Response) {
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

    const user = await prisma.users.findMany()
    return response.status(200).json({ message: `List of All users`, user });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}
export async function allHealthPersonnelByType(request: Request, response: Response) {
    const admin_id = request.user.adminId;
    const type = request.query.type as Prisma.EnumTypeFilter<"users">
    
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

    const user = await prisma.users.findMany({ where: { type }})
    return response.status(200).json({ message: `List of All ${type}s`, user });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}
export async function countHealthPersonnelByType(request: Request, response: Response) {
  const admin_id = request.user.adminId;
  const type = request.query.type as Prisma.EnumTypeFilter<"users">
  
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

  const count = await prisma.users.count({ where: { type } })
  return response.status(200).json({ message: `Number of All ${type}s`, count });
} catch (error) {
  return response.status(500).json({ message: error})
}
}
export async function countHealthPersonnel(request: Request, response: Response) {
  const admin_id = request.user.adminId;
  const type = request.query.type as Prisma.EnumTypeFilter<"users">
  
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

  const count = await prisma.users.count()
  return response.status(200).json({ message: `Number of All ${type}s`, count });
} catch (error) {
  return response.status(500).json({ message: error})
}
}