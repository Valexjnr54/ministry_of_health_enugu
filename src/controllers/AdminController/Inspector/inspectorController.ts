import { Request, Response } from 'express';
import { PrismaClient } from '../../../models';
import { body, validationResult } from 'express-validator';
import  bcrypt  from "bcrypt";
import { uniqueSix } from '../../../utils/functions';
import { sendAssignInspectionEmail, sendCreateInspectorMail } from '../../../utils/emailSender';
import { generateResetCode, generateStrongPassword } from '../../../services/generatePassword';

const prisma = new PrismaClient();

export async function createInspector(request: Request, response: Response) {
    const { fullname, address, phone_number, email, lga } = request.body
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
        const validationRules = [
            body('fullname').notEmpty().withMessage('Full Name is required'),
            body('email').isEmail().withMessage('Email address is required'),
            body('phone_number').notEmpty().withMessage('Phone Number address is required'),
            body('address').notEmpty().withMessage('Residental address is required'),
            body('lga').notEmpty().withMessage('Local Government is required'),
        ];
          
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        // Check if the email is already registered
        const existingInspector = await prisma.inspector.findUnique({ where: { email } });
        if (existingInspector) {
        return response.status(400).json({ message: 'Email already registered' });
        }

        const password = await generateStrongPassword(16)
        const code = await uniqueSix()
        const username = `EN/INS/${code}`
        const reset_password_token = await generateResetCode(30)

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        //Uploading Image to Cloudinary
        const profile_image = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL

        // Create a new Inspector in the database
        const newInspector = await prisma.inspector.create({
            data: {
            fullname,
            username,
            email,
            address,
            phone_number,
            profile_image,
            reset_password_token,
            lga,
            password: hashedPassword, // Store the salt along with the hash
            },
        });
        const lga_id = parseInt(newInspector.lga as string)
        const lga_detail = await prisma.local_government.findUnique({ where:{id: lga_id}})
        await sendCreateInspectorMail(newInspector.email, newInspector, password)

        return response.status(201).json({  message: `${newInspector.fullname} has been created as an Inspector`,newInspector, lga:lga_detail });
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function allInspector(request: Request, response: Response) {
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

        // Create a new Inspector in the database
        const inspector = await prisma.inspector.findMany();

        return response.status(200).json({  message: `All Inspector Fetched successfully`,inspector });
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function singleInspector(request: Request, response: Response) {
    const admin_id = request.user.adminId;
    const id = parseInt(request.query.id as string)
   
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

       // Create a new Inspector in the database
       const inspector = await prisma.inspector.findUnique({ where : { id }});
       if (!inspector) {
        return response.status(404).json({ message:"Inspector does not exist"})
       }
       const lga_id = parseInt(inspector.lga as string)
       const lga = await prisma.local_government.findUnique({ where:{id: lga_id}})
       return response.status(200).json({  message: `All Inspector Fetched successfully`,inspector, lga });
   } catch (error) {
       console.log(error)
       return response.status(500).json({ message: 'Internal Server Error' });
   }
}

export async function deleteInspector(request: Request, response: Response) {
    const admin_id = request.user.adminId;
    const id = parseInt(request.query.id as string)
   
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

       // Create a new Inspector in the database
       const inspector = await prisma.inspector.findUnique({ where : { id }});
       if(!inspector){
        return response.status(404).json({  message: `Inspector Not Found` });
       }

       const deleteInspector = await prisma.inspector.delete({ where : { id }});

       return response.status(204).json({  message: `All Inspector Fetched successfully` });
   } catch (error) {
       console.log(error)
       return response.status(500).json({ message: 'Internal Server Error' });
   }
}

export async function assignInspector(request: Request, response:Response) {
    const admin_id = request.user.adminId;
    const facility_id = parseInt(request.query.facility_id as string)
    const { inspector_id, inspection_date} = request.body
   
    // Check if user_id is not present or undefined
    if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        if (!check_admin) {
            return response.status(404).json({ message: "Admin Not Found"})
        }
        const role = check_admin?.role;

        // Check if the role is not 'User'
        if (role !== 'Admin' && role !== 'Subadmin_facility') {
            return response.status(403).json({ message: 'Unauthorized User' });
          }
        const validationRules = [
            body('inspector_id').notEmpty().withMessage('Inspector ID is required'),
            body('inspection_date').notEmpty().withMessage('Inspection Date is required and must be in date format'),
        ];
          
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const inspectionDate = new Date(inspection_date)
        const inspectorId = parseInt(inspector_id as string)
        
        const assign = await prisma.facility.update({ where:{ id: facility_id}, data:{assigned_inspector: inspector_id, inspection_date: inspectionDate, is_inspected:false }})
        const inspector = await prisma.inspector.findUnique({ where:{id: inspectorId}})
        if (!inspector) {
            return response.status(404).json({ message: "Admin Not Found"})
        }

        await sendAssignInspectionEmail(check_admin.email, assign, inspector,"Admin")
        await sendAssignInspectionEmail(inspector.email, assign, inspector, "Inspector")
        await sendAssignInspectionEmail(assign.owner_email, assign, inspector, "Facility")

        return response.status(200).json({message:`${inspector.fullname} has been assigned to inspect ${assign.facility_name}`, assign, inspector})
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}