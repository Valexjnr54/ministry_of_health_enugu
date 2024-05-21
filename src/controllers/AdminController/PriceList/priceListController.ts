import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '../../../models';
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

export async function add_price_list(request: Request, response: Response) {
    const { type, application_fee, application_charge, certificate_fee, certificate_charge, renewal_fee, renewal_charge } = request.body;
    const admin_id = request.user.adminId;
    
  // Check if user_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    const validationRules = [
        body('type').notEmpty().withMessage('Personnel Type required'),
        body('application_fee').notEmpty().withMessage('Application fee is required'),
        body('application_charge').notEmpty().withMessage('Application charge is required'),
        body('certificate_fee').notEmpty().withMessage('certificate fee is required'),
        body('certificate_charge').notEmpty().withMessage('certificate charge is required'),
        body('renewal_fee').notEmpty().withMessage('Renewal fee is required'),
        body('renewal_charge').notEmpty().withMessage('Renewal charge is required'),
      ];
      
      // Apply validation rules to the request
      await Promise.all(validationRules.map(rule => rule.run(request)));
      
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }
    // Retrieve the user by user_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'User'
    if (role !== 'Admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const addPriceList = await prisma.personnel_price_list.create({
        data:{
            type,
            application_fee,
            application_charge,
            enugu_ID_certificate:certificate_fee,
            certificate_charge,
            renewal_charge,
            renewal_fee
        }
    })
    return response.status(201).json({  message: `Price List has been created`, data: addPriceList });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}

export async function view_price_lists(request: Request, response: Response) {
    const userId = request.user.adminId;
  const tokencheck = request.headers.authorization?.split(' ')[1];
  try {
      // Check if the email is already registered
      const existingUser = await prisma.admin.findUnique({ where: { id:userId } });
      const role = existingUser?.role
      if (!existingUser) {
      return response.status(404).json({ message: 'User not Found' });
      }
      if (role !== 'Admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
      }

      // Create a new user in the database
      const priceList = await prisma.personnel_price_list.findMany();

      return response.status(200).json({ message: 'All Price List', data: priceList});
  } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function view_single_price_list(request: Request, response: Response) {
    const admin_id = request.user.adminId;
    const priceListId = parseInt(request.query.id as string)
    
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

    const list = await prisma.personnel_price_list.findUnique({ where: { id: priceListId }})
    return response.status(200).json({ message: `Price List`, data:list });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}

export async function update_price_list(request: Request, response: Response) {
    const { type, application_fee, application_charge, certificate_fee, certificate_charge, renewal_fee, renewal_charge } = request.body;
    const admin_id = request.user.adminId;
    const priceListId = parseInt(request.query.id as string)
    
  // Check if user_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    const validationRules = [
        body('type').notEmpty().withMessage('Personnel Type required'),
        body('application_fee').notEmpty().withMessage('Application fee is required'),
        body('application_charge').notEmpty().withMessage('Application charge is required'),
        body('certificate_fee').notEmpty().withMessage('certificate fee is required'),
        body('certificate_charge').notEmpty().withMessage('cerificate charge is required'),
        body('renewal_fee').notEmpty().withMessage('Renewal fee is required'),
        body('renewal_charge').notEmpty().withMessage('Renewal charge is required'),
      ];
      
      // Apply validation rules to the request
      await Promise.all(validationRules.map(rule => rule.run(request)));
      
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }
    // Retrieve the user by user_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'User'
    if (role !== 'Admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const updateList = await prisma.personnel_price_list.update({
        where:{
            id: priceListId
        },
        data:{
            type,
            application_fee,
            application_charge,
            enugu_ID_certificate:certificate_fee,
            certificate_charge,
            renewal_charge,
            renewal_fee
        }
    })
    return response.status(201).json({  message: `Price List has been updated`, data: updateList });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}

export async function delete_price_list(request: Request, response: Response) {
    const admin_id = request.user.adminId;
    const priceListId = parseInt(request.query.id as string)
    
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

    const list = await prisma.personnel_price_list.delete({ where: { id: priceListId }})
    return response.status(200).json({ message: `Price List has been deleted successfully` });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}

export async function add_facility_price_list(request: Request, response: Response) {
  const { type, number_of_beds, first_time_reg, first_time_charge, application_fee, application_charge, renewal_fee, renewal_charge,verification_fee,verification_charge,inspection_fee,inspection_charge,certificate_fee,certificate_charge} = request.body;
  const admin_id = request.user.adminId;
  
// Check if user_id is not present or undefined
if (!admin_id) {
  return response.status(403).json({ message: 'Unauthorized User' });
}

try {
  const validationRules = [
      body('type').notEmpty().withMessage('Facility Type required'),
      body('application_fee').notEmpty().withMessage('Application fee is required'),
      body('application_charge').notEmpty().withMessage('Application charge is required'),
      body('first_time_reg').notEmpty().withMessage('First time registration amount is required'),
      body('first_time_charge').notEmpty().withMessage('First time charge amount is required'),
      body('renewal_fee').notEmpty().withMessage('Renewal fees is required'),
      body('renewal_charge').notEmpty().withMessage('Renewal charge is required'),
      body('verification_fee').notEmpty().withMessage('Verification fees is required'),
      body('verification_charge').notEmpty().withMessage('Verification charge is required'),
      body('inspection_fee').notEmpty().withMessage('Inspection fees is required'),
      body('inspection_charge').notEmpty().withMessage('Inspection charge is required'),
      body('certificate_fee').notEmpty().withMessage('Certificate fees is required'),
      body('certificate_charge').notEmpty().withMessage('Certificate charge is required'),
    ];
    
    // Apply validation rules to the request
    await Promise.all(validationRules.map(rule => rule.run(request)));
    
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    if(type === "Specialist_hospital" || type === "Specialist_clinic" || type === "General_hospital" || type === "Maternity_home"){
      const validationRules = [
        body('number_of_beds').notEmpty().withMessage('Number of beds is required'),
      ];
      
      // Apply validation rules to the request
      await Promise.all(validationRules.map(rule => rule.run(request)));
      
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }
    }
  // Retrieve the user by user_id
  const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
  const role = check_admin?.role;

  // Check if the role is not 'User'
  if (role !== 'Admin') {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  const addPriceList = await prisma.facility_price_list.create({
      data:{
          facility_type:type,
          application_fee,
          application_fee_charge:application_charge,
          renewal_charge,
          renewal_fee,
          number_of_beds,
          first_time_reg,
          first_time_charge,
          verification_fee,
          verification_charge,
          inspection_fee,
          inspection_charge,
          certificate_fee,
          certificate_charge
      }
  })
  return response.status(201).json({  message: `Price List has been created`, data: addPriceList });
} catch (error) {
  return response.status(500).json({ message: error})
}
}

export async function view_facility_price_lists(request: Request, response: Response) {
  const userId = request.user.adminId;
const tokencheck = request.headers.authorization?.split(' ')[1];
try {
    // Check if the email is already registered
    const existingUser = await prisma.admin.findUnique({ where: { id:userId } });
    const role = existingUser?.role
    if (!existingUser) {
    return response.status(404).json({ message: 'User not Found' });
    }
    if (role !== 'Admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    // Create a new user in the database
    const priceList = await prisma.facility_price_list.findMany();

    return response.status(200).json({ message: 'All Price List', data: priceList});
} catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
}
}

export async function view_facility_single_price_list(request: Request, response: Response) {
  const admin_id = request.user.adminId;
  const priceListId = parseInt(request.query.id as string)
  
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

  const list = await prisma.facility_price_list.findUnique({ where: { id: priceListId }})
  return response.status(200).json({ message: `Price List`, data:list });
} catch (error) {
  return response.status(500).json({ message: error})
}
}

export async function update_facility_price_list(request: Request, response: Response) {
  const { type, number_of_beds, first_time_reg, first_time_charge, application_fee, application_charge, renewal_fee, renewal_charge,verification_fee,verification_charge,inspection_fee,inspection_charge,certificate_fee,certificate_charge } = request.body;
  const admin_id = request.user.adminId;
  const priceListId = parseInt(request.query.id as string)
  
// Check if user_id is not present or undefined
if (!admin_id) {
  return response.status(403).json({ message: 'Unauthorized User' });
}

try {
  const validationRules = [
      body('type').notEmpty().withMessage('Facility Type required'),
      body('application_fee').notEmpty().withMessage('Application fee is required'),
      body('application_charge').notEmpty().withMessage('Application charge is required'),
      body('number_of_beds').notEmpty().withMessage('Number of beds is required'),
      body('first_time_reg').notEmpty().withMessage('First time registration amount is required'),
      body('first_time_charge').notEmpty().withMessage('First time charge amount is required'),
      body('renewal_fee').notEmpty().withMessage('Renewal fees is required'),
      body('renewal_charge').notEmpty().withMessage('Renewal charge is required'),
      body('verification_fee').notEmpty().withMessage('Verification fees is required'),
      body('verification_charge').notEmpty().withMessage('Verification charge is required'),
      body('inspection_fee').notEmpty().withMessage('Inspection fees is required'),
      body('inspection_charge').notEmpty().withMessage('Inspection charge is required'),
      body('certificate_fee').notEmpty().withMessage('Certificate fees is required'),
      body('certificate_charge').notEmpty().withMessage('Certificate charge is required'),
    ];
    
    // Apply validation rules to the request
    await Promise.all(validationRules.map(rule => rule.run(request)));
    
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
  // Retrieve the user by user_id
  const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
  const role = check_admin?.role;

  // Check if the role is not 'User'
  if (role !== 'Admin') {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  const updateList = await prisma.facility_price_list.update({
      where:{
          id: priceListId
      },
      data:{
          facility_type:type,
          application_fee,
          application_fee_charge:application_charge,
          number_of_beds,
          first_time_charge,
          first_time_reg,
          renewal_charge,
          renewal_fee,
          verification_fee,
          verification_charge,
          inspection_fee,
          inspection_charge,
          certificate_fee,
          certificate_charge
      }
  })
  return response.status(201).json({  message: `Price List has been updated`, data: updateList });
} catch (error) {
  return response.status(500).json({ message: error})
}
}

export async function delete_facility_price_list(request: Request, response: Response) {
  const admin_id = request.user.adminId;
  const priceListId = parseInt(request.query.id as string)
  
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

  const list = await prisma.facility_price_list.delete({ where: { id: priceListId }})
  return response.status(200).json({ message: `Price List has been deleted successfully` });
} catch (error) {
  return response.status(500).json({ message: error})
}
}