import { Request, Response } from 'express';
import { PrismaClient } from '../../../models';
import { body, validationResult } from 'express-validator';
import  bcrypt  from "bcrypt";
import { uniqueSix } from '../../../utils/functions';
import { sendAssignInspectionEmail, sendCreateEnforcerMail } from '../../../utils/emailSender';
import { generateResetCode, generateStrongPassword } from '../../../services/generatePassword';

const prisma = new PrismaClient();

export async function createEnforcer(request: Request, response: Response) {
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
        const existingEnforcer = await prisma.enforcer.findUnique({ where: { email } });
        if (existingEnforcer) {
        return response.status(400).json({ message: 'Email already registered' });
        }

        const password = await generateStrongPassword(16)
        const code = await uniqueSix()
        const username = `EN/ENF/${code}`
        const reset_password_token = await generateResetCode(30)

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        //Uploading Image to Cloudinary
        const profile_image = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL

        // Create a new Enforcer in the database
        const newEnforcer = await prisma.enforcer.create({
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
        const lga_id = parseInt(newEnforcer.lga as string)
        const lga_detail = await prisma.local_government.findUnique({ where:{id: lga_id}})
        await sendCreateEnforcerMail(newEnforcer.email, newEnforcer, password)

        return response.status(201).json({  message: `${newEnforcer.fullname} has been created as an Enforcer`,newEnforcer, lga:lga_detail });
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function allEnforcer(request: Request, response: Response) {
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

        // Create a new Enforcer in the database
        const enforcer = await prisma.enforcer.findMany();

        return response.status(200).json({  message: `All Enforcer Fetched successfully`,enforcer });
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function singleEnforcer(request: Request, response: Response) {
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

       // Create a new Enforcer in the database
       const enforcer = await prisma.enforcer.findUnique({ where : { id }});
       if (!enforcer) {
        return response.status(404).json({ message:"Enforcer does not exist"})
       }
       const lga_id = parseInt(enforcer.lga as string)
       const lga = await prisma.local_government.findUnique({ where:{id: lga_id}})
       return response.status(200).json({  message: `All Enforcer Fetched successfully`,enforcer, lga });
   } catch (error) {
       console.log(error)
       return response.status(500).json({ message: 'Internal Server Error' });
   }
}

export async function deleteEnforcer(request: Request, response: Response) {
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

       // Create a new Enforcer in the database
       const enforcer = await prisma.enforcer.findUnique({ where : { id }});
       if(!enforcer){
        return response.status(404).json({  message: `Enforcer Not Found` });
       }

       const deleteEnforcer = await prisma.enforcer.delete({ where : { id }});

       return response.status(204).json({  message: `All Enforcer Fetched successfully` });
   } catch (error) {
       console.log(error)
       return response.status(500).json({ message: 'Internal Server Error' });
   }
}