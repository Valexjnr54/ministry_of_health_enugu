import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '../../../models';
import { setupApprovedSMS } from '../../../utils/sendSMS';

const prisma = new PrismaClient();

export async function allFacility(request: Request, response: Response) {
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

    const facilities = await prisma.facility.findMany({ include:{inspector:true,facility_personnel:{ include:{user:true}}}})
    return response.status(200).json({ message: `List of All facilities`, facilities });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}
export async function allFacilityByType(request: Request, response: Response) {
    const admin_id = request.user.adminId;
    const facility_type = request.query.type as Prisma.EnumFacility_TypeFilter<"facility">
    
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

    const facilities = await prisma.facility.findMany({ where: { facility_type },include:{inspector:true,facility_personnel:{ include:{user:true}}}})
    return response.status(200).json({ message: `List of All ${facility_type}s`, facilities });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}
export async function countFacilityByType(request: Request, response: Response) {
  const admin_id = request.user.adminId;
  const facility_type = request.query.type as Prisma.EnumFacility_TypeFilter<"facility">
  
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

  const count = await prisma.facility.count({ where: { facility_type } })
  return response.status(200).json({ message: `Number of All ${facility_type}s`, count });
} catch (error) {
  return response.status(500).json({ message: error})
}
}
export async function countFacility(request: Request, response: Response) {
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
  if (role !== 'Admin' && role !== 'Subadmin_facility') {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  const count = await prisma.facility.count()
  return response.status(200).json({ message: `Number of All facilities`, count });
} catch (error) {
  return response.status(500).json({ message: error})
}
}
export async function facilitiesByLGA(request: Request, response: Response) {
  const lga_id = request.query.lga_id;
  const admin_id = request.user.adminId;
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }
  if (lga_id == null) {
    return response.status(400).json({ message: "Local Government ID is required"})
  }
  try {
    // Retrieve the user by user_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'User'
    if (role !== 'Admin' && role !== 'Subadmin_facility') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }
    const lgaId = parseInt(lga_id as string);
    const facilities = await prisma.facility.findMany({ where: { lga: { equals: lgaId.toString() } },include:{inspector:true,facility_personnel:{ include:{user:true}}} });
    const find_lga = await prisma.local_government.findFirst({ where: { id: lgaId } });
    const lga_name = find_lga?.name;
    return response.status(200).json({ message: `List of All facilities in ${lga_name}`, facilities,lga:find_lga });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}
