// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Prisma, PrismaClient } from '../../../models';
import { body, validationResult } from "express-validator";
import  bcrypt  from "bcrypt";
import { Config } from '../../../config/config';
import { generateResetCode, generateStrongPassword } from '../../../services/generatePassword';
import { sendCreateSubAdminMail } from '../../../utils/emailSender';

const prisma = new PrismaClient();
enum Role {
  Subadmin_personnel = "Subadmin_personnel",
  Subadmin_facility = "Subadmin_facility",
  Subadmin_foodhandler = "Subadmin_foodhandler",
  Admin = "Admin"
}


export async function registerSubAdmin(request: Request, response: Response) {
  const { fullname, username, email, type } = request.body;
  const admin_id = request.user.adminId;

  // Check if user_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    const validationRules = [
      body('fullname').notEmpty().withMessage('Full Name is required'),
      body('username').notEmpty().withMessage('Username is required'),
      body('email').isEmail().withMessage('Invalid email address'),
      body('type').notEmpty().withMessage('Type of Admin is required'),
    ];
    
    // Apply validation rules to the request
    await Promise.all(validationRules.map(rule => rule.run(request)));
    
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // Retrieve the user by user_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const checked_role = check_admin?.role;

    // Check if the role is not 'User'
    if (checked_role !== 'Admin') {
      return response.status(403).json({ message: 'You`re not allowed to perform this action' });
    }
    

    let role: Role | undefined;

    switch (type) {
      case "personnel":
          role = Role.Subadmin_personnel;
          break;

      case "facility":
          role = Role.Subadmin_facility;
          break;

      case "food_handler":
          role = Role.Subadmin_foodhandler;
          break;

      case "super":
          role = Role.Admin;
          break;

      default:
          return response.status(400).json({ message: "Undefined type: It can be personnel, facility, food_handler, super" });
    }
    const password = await generateStrongPassword(16)

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    //Uploading Image to Cloudinary
    let imageUrl = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL
    const reset_password_token = await generateResetCode(30)

    // Create a new Admin in the database
    const newAdmin = await prisma.admin.create({
      data: {
        fullname,
        username,
        email,
        profile_image: imageUrl,
        reset_password_token,
        role,
        password: hashedPassword, // Store the salt along with the hash
      },
    });

    await sendCreateSubAdminMail(newAdmin.email, newAdmin, password)

    return response.status(201).json({  message: `${newAdmin.fullname} has been created as an Admin`,newAdmin });
    
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function allAdmin(request: Request, response: Response) {
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
      const users = await prisma.admin.findMany({
          where: {
              role: {
                  not: "Admin"
              }
          }
      });

      return response.status(200).json({ message: 'All Admin(s)', data: users});
  } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
  }
}