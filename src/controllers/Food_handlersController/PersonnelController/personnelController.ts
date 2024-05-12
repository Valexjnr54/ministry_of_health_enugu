import { Request, Response } from 'express';
import { Config } from '../../../config/config';
import { PrismaClient, Status } from '../../../models';
import { body, validationResult } from 'express-validator';
import { verifynin } from '../../../services/verification';
import { ShortCode, expiryDate, uniqueSix } from '../../../utils/functions';
import uploadImage from '../../../utils/cloudinary';
import fs from 'fs'
import { generateResetCode, generateStrongPassword } from '../../../services/generatePassword';
import  bcrypt  from "bcrypt";
import { sendWelcomeFoodMail, sendWelcomeMail } from '../../../utils/emailSender';

const prisma = new PrismaClient();

export async function createPersonnel(request: Request, response: Response) {
    const { firstname, middlename, surname, email, address, phone_number, nin, reference, lga, state } = request.body
    const middleName = middlename || "";
    try {
        const validationRules = [
            body('firstname').notEmpty().withMessage('First Name is required'),
            body('surname').notEmpty().withMessage('Surname is required'),
            body('address').notEmpty().withMessage('Residental Address is required'),
            body('email').isEmail().withMessage('Invalid email address'),
            body('phone_number').notEmpty().withMessage('Phone Number is required'),
            body('nin').notEmpty().withMessage('nin is required'),
            body('reference').notEmpty().withMessage('Payment Reference is required'),
            body('lga').notEmpty().withMessage('Local Government Area is required'),
            body('state').notEmpty().withMessage('State of Origin is required'),
        ];
          
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        
        const existingUser = await prisma.food_handlers.findUnique({ where: { email } });
        if (existingUser) {
            return response.status(400).json({ message: 'Email already registered' });
        }

        const existingPhone = await prisma.food_handlers.findUnique({ where: { phone_number } });
        if (existingPhone) {
            return response.status(400).json({ message: 'Phone Number Already Exist' });
        }

        const existingNIN = await prisma.food_handlers.findUnique({ where: { nin } });
        if (existingNIN) {
            return response.status(400).json({ message: 'Nin Already Exist' });
        }

        const check_payment = await prisma.personnel_payment.findUnique({ where: { reference } });
        if (!check_payment) {
            return response.status(400).json({ message: 'Invalid Payment Reference, Please Kindly make payment' });
        }

        const check_reference_used = await prisma.personnel_payment.findUnique({ where: { reference, has_registered:true } });
        if (check_reference_used) {
            return response.status(400).json({ message: 'Payment Reference used by another user, Please Kindly make payment' });
        }

        const code = await uniqueSix()
        const enugu_handler_id = `EN/FHP/${code}`;
        const expiry_date = (await (expiryDate())).toString();
        const ninResponse = await verifynin(nin)
        if (ninResponse.response_code == '01') {
            return response.status(404).json({ message: 'Invalid NIN, Please Check your NIN number and try again' });
        }else if (ninResponse.response_code == '02'){
            return response.status(400).json({ message: `Your NIN could not be verified at this time, The NIN you provided could be wrong please check if you provided a correct NIN if this persists check back later. If you are no longer on this page click on the 'already started registration button' on the registration page and provide your payment reference to continue.`});
        }else if(ninResponse.response_code == '03') {
            return response.status(400).json({ message: 'Not your fault we will look into the reason, Please contact support.' });
        }
        const fullname = surname +' '+ firstname +' '+ middleName
        const password= await generateStrongPassword(16)
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);
      const reset_password_token = await generateResetCode(30)
    
      

        if (!request.files || !('passport' in request.files)) {
            return response.status(400).json({ message: 'Please provide all required images.' });
          }
          // Upload Site Plan image to Cloudinary
        //   const nin_image = await uploadImage(request.files['nin_image'][0].path, 'enugu_ministry_of_health/images/personnel_nin_images');
        //   fs.unlink(request.files['nin_image'][0].path, (err) => {
        //     if (err) {
        //       console.error(`Error deleting Site Plan file`);
        //     } else {
        //       console.log(`NIN File deleted`);
        //     }
        //   });
          

          const passport = await uploadImage(request.files['passport'][0].path, 'enugu_ministry_of_health/images/health_personnel_passports');
          fs.unlink(request.files['passport'][0].path, (err) => {
            if (err) {
              console.error(`Error deleting Passportfile`);
            } else {
              console.log(`Passport File deleted`);
            }
          });

        // let ninStatus: Status  = "Pending";
        let ninStatus:Status
        if(ninResponse.status == true && ninResponse.response_code == '00'){
            ninStatus = 'Approved';
        } else if(ninResponse.status == false && ninResponse.response_code != '00'){
            ninStatus = 'Rejected';
            return response.status(400).json({ message: ninResponse.detail})
        } else {
            ninStatus = 'Pending';
        }
        

        const user = await prisma.food_handlers.create({
            data: {
                fullname,
                email,
                address,
                phone_number, 
                nin,
                password:hashedPassword,
                state,
                // nin_image,
                passport,
                expiry_date,
                lga,
                reset_password_token,
                enugu_handler_id,
                nin_status: ninStatus,
            }
        })

        const has_register = await prisma.personnel_payment.update({
            where:{ reference },
            data: {
                has_registered:true
            }
        })

        await sendWelcomeFoodMail(user.email,user, password)
        const lga_id = parseInt(user.lga as string)
        const lga_detail = await prisma.local_government.findUnique({ where:{id: lga_id}})
        return response.status(200).json({ message: 'Food Handler Created Successfullly', user, lga:lga_detail});
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}