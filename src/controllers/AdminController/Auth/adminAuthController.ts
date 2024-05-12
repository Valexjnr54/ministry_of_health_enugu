// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../../models';
import { body, validationResult } from "express-validator";
import  bcrypt  from "bcrypt";
import { Config } from '../../../config/config';
import { generateResetCode, generateStrongPassword } from '../../../services/generatePassword';

const prisma = new PrismaClient();

export async function registerAdmin(request: Request, res: Response) {
  const { fullname, username, email, password } = request.body;

  try {
    const validationRules = [
      body('fullname').notEmpty().withMessage('Full Name is required'),
      body('username').notEmpty().withMessage('Username is required'),
      body('email').isEmail().withMessage('Invalid email address'),
      body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    ];
    
    // Apply validation rules to the request
    await Promise.all(validationRules.map(rule => rule.run(request)));
    
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the email is already registered
    const existingAdmin = await prisma.admin.findUnique({ where: { email } });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    

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
        password: hashedPassword, // Store the salt along with the hash
      },
    });

    if (!Config.Jwt_secret) {
      console.error('Jwt_secret is not defined!');
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Generate a JWT token for the newly registered Admin
    const token = jwt.sign({ adminId: newAdmin.id, email: newAdmin.email, fullname: newAdmin.fullname, username: newAdmin.username, profile_image:newAdmin.profile_image }, Config.Jwt_secret);

    res.status(201).json({ token, newAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function loginAdmin(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    // Find the Admin by email
    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    if (!Config.Jwt_secret) {
      console.error('Jwt_secret is not defined!');
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Generate a JWT token for the admin
    const token = jwt.sign({ adminId: admin.id, email: admin.email }, Config.Jwt_secret);

    res.status(200).json({ token, admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


export async function logoutAdmin(req: Request, res: Response) {
  try {
    // Extract token from request headers or cookies, depending on how it's sent
    const token = req.headers.authorization?.split(' ')[1]; // Assuming token is sent as a Bearer token

    if (!token) {
      // Token not found, maybe the user is already logged out, send success response
      return res.status(200).json({ message: 'Already logged out' });
    }

    // Optionally, you may want to add the token to a list of revoked tokens in your database
    const regToken = await prisma.revokedToken.findUnique({ where: { token } });
    if (regToken) {
      return res.status(400).json({ message: 'User already logged out'})
    }

    await prisma.revokedToken.create({ data: { token } });

    // Clear the JWT token from the client-side cookies
    res.clearCookie('jwt');

    // Optionally, you can perform additional tasks here, such as logging the Admin's logout action.

    // Send a success response to the client
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    // Handle any potential errors that may occur during the logout process.
    console.error('Error during logout:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function profile(request: Request, response: Response) {
  const userId = request.user.adminId;
  const tokencheck = request.headers.authorization?.split(' ')[1];
  try {
      // Check if the email is already registered
      const existingUser = await prisma.admin.findUnique({ where: { id:userId } });
      if (!existingUser) {
      return response.status(404).json({ message: 'User not Found' });
      }
      const existingToken = await prisma.revokedToken.findUnique({ where: { token: tokencheck } });
    if (existingToken) {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

      // Create a new user in the database
      const user = await prisma.admin.findUnique({
      where:{
          id:userId
      }
      });

      return response.status(200).json({ message: 'User profile', data: user});
  } catch (error) {
      console.error(error);
      return response.status(500).json({ message: 'Internal Server Error' });
  }
}

