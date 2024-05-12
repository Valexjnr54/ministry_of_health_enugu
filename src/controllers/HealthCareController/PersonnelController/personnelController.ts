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
import { sendWelcomeMail } from '../../../utils/emailSender';

const prisma = new PrismaClient();

export async function createPersonnel(request: Request, response: Response) {
    const { firstname, middlename, surname, email, address, phone_number, type, practice_id, specialization, nin, reference, lga, state, gender } = request.body
    const middleName = middlename || "";
    try {
        if (type === '') {
            return response.status(400).json({ error: "Bad Request", message: "Type Must have a value" });
        }
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
            body('gender').notEmpty().withMessage('Gender is required'),
        ];
          
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        
        if(type === 'Doctor'){
            const validationRules = [
                body('practice_id').notEmpty().withMessage('MDCN Practicing Licence Number is required'),
                body('specialization').notEmpty().withMessage('Specialization is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            // Retrieve the user by user_id
            const check_user = await prisma.users.findUnique({ where: { practice_id: practice_id } });
            if (check_user) {
                return response.status(400).json({ message: 'MDCN Practice Licence Number already registered' });
            }
        }else if(type === 'Dentist'){
            const validationRules = [
                body('practice_id').notEmpty().withMessage('MDCN Practicing Licence Number is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            // Retrieve the user by user_id
            const check_user = await prisma.users.findUnique({ where: { practice_id: practice_id } });
            if (check_user) {
                return response.status(400).json({ message: 'MDCN Practice Licence Number already registered' });
            }
        }else if(type === 'Nurse' || type === 'Mid_wife'){
            const validationRules = [
                body('practice_id').notEmpty().withMessage('NMCN Practicing Licence Number is required'),
                // body('practice_id_status').notEmpty().withMessage('Licence Status is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            // Retrieve the user by user_id
            const check_user = await prisma.users.findUnique({ where: { practice_id: practice_id } });
            if (check_user) {
                return response.status(400).json({ message: 'NMCN Practice Licence Number already registered' });
            }
        }else if(type === 'Pharmacist'){
            const validationRules = [
                body('practice_id').notEmpty().withMessage('PCN Practicing Licence Number is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            // Retrieve the user by user_id
            const check_user = await prisma.users.findUnique({ where: { practice_id: practice_id } });
            if (check_user) {
                return response.status(400).json({ message: 'PCN Practice Licence Number already registered' });
            }
        }else if(type === 'Radiographer'){
            const validationRules = [
                body('practice_id').notEmpty().withMessage('RRBN Practicing Licence Number is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            // Retrieve the user by user_id
            const check_user = await prisma.users.findUnique({ where: { practice_id: practice_id } });
            if (check_user) {
                return response.status(400).json({ message: 'RRBN Practice Licence Number already registered' });
            }
        }else if(type === 'Lab_Scientist'){
            const validationRules = [
                body('practice_id').notEmpty().withMessage('MLSCN Practicing Licence Number is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            // Retrieve the user by user_id
            const check_user = await prisma.users.findUnique({ where: { practice_id: practice_id } });
            if (check_user) {
                return response.status(400).json({ message: 'MLSCN Practice Licence Number already registered' });
            }
        }else if(type === 'Optometrist'){
            const validationRules = [
                body('practice_id').notEmpty().withMessage('ODORBN Practicing Licence Number is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            // Retrieve the user by user_id
            const check_user = await prisma.users.findUnique({ where: { practice_id: practice_id } });
            if (check_user) {
                return response.status(400).json({ message: 'ODORBN Practice Licence Number already registered' });
            }
        }else if(type === 'Physiotherapist'){
            const validationRules = [
                body('practice_id').notEmpty().withMessage('MRTB Practicing Licence Number is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            // Retrieve the user by user_id
            const check_user = await prisma.users.findUnique({ where: { practice_id: practice_id } });
            if (check_user) {
                return response.status(400).json({ message: 'MRTB Practice Licence Number already registered' });
            }
        }else if(type === 'Psychiatrist'){
            const validationRules = [
                body('practice_id').notEmpty().withMessage('MDCN Practicing Licence Number is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            // Retrieve the user by user_id
            const check_user = await prisma.users.findUnique({ where: { practice_id: practice_id } });
            if (check_user) {
                return response.status(400).json({ message: 'MDCN Practice Licence Number already registered' });
            }
        }else if(type === 'Community_health_worker'){
            const validationRules = [
                body('practice_id').notEmpty().withMessage('CHPRBN Practicing Licence Number is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            // Retrieve the user by user_id
            const check_user = await prisma.users.findUnique({ where: { practice_id: practice_id } });
            if (check_user) {
                return response.status(400).json({ message: 'CHPRBN Practice Licence Number already registered' });
            }
        }else if(type === 'Emergency_medical_technician'){
            const validationRules = [
                body('practice_id').notEmpty().withMessage('PHTLS Practicing Licence Number is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            // Retrieve the user by user_id
            const check_user = await prisma.users.findUnique({ where: { practice_id: practice_id } });
            if (check_user) {
                return response.status(400).json({ message: 'PHTLS Practice Licence Number already registered' });
            }
        }else{
            return response.status(400).json({ message: 'Unidentified Medical Type' });
        }

        const existingUser = await prisma.users.findUnique({ where: { email } });
        if (existingUser) {
            return response.status(400).json({ message: 'Email already registered' });
        }

        const existingPhone = await prisma.users.findUnique({ where: { phone_number } });
        if (existingPhone) {
            return response.status(400).json({ message: 'Phone Number Already Exist' });
        }

        const existingNIN = await prisma.users.findUnique({ where: { nin } });
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
        const short_code = await ShortCode(type)
        const enugu_practice_id = `EN/${short_code}/${code}`;
        const expiry_date = (await (expiryDate())).toString();
        const ninResponse = await verifynin(nin)
        if (ninResponse.response_code == '01') {
            return response.status(404).json({ message: 'Invalid NIN, Please Check your NIN number and try again' });
        }else if (ninResponse.response_code == '02'){
            return response.status(400).json({ message: `Your NIN could not be verified at this time, The NIN you provided could be wrong please check if you provided a correct NIN if this persists check back later. If you are no longer on this page click on the 'already started registration button' on the registration page and provide your payment reference to continue.`});
        }else if(ninResponse.response_code == '03') {
            return response.status(400).json({ message: 'Not your fault we will look into the reason, Please contact support' });
        }
        const fullname = surname +' '+ firstname +' '+ middleName
        const password= await generateStrongPassword(16)
        const reset_password_token = await generateResetCode(30)
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10);
      

       let specializations
      if (specialization !== undefined) {
        const specialization_array: string[] = specialization.split(',')
        specializations = JSON.stringify(specialization_array);
      }
      

        if (!request.files || !('practice_certificate' in request.files) || !('passport' in request.files)) {
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
          // Upload Site Plan image to Cloudinary
          const practice_certificate = await uploadImage(request.files['practice_certificate'][0].path, 'enugu_ministry_of_health/images/practice_certificates');
          fs.unlink(request.files['practice_certificate'][0].path, (err) => {
            if (err) {
              console.error(`Error deleting Site Plan file`);
            } else {
              console.log(`Practice Certificate File deleted`);
            }
          });

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
        

        const user = await prisma.users.create({
            data: {
                fullname,
                email,
                address,
                phone_number, 
                type, 
                practice_id, 
                practice_certificate,
                specialization:specializations, 
                nin,
                password:hashedPassword,
                state,
                // nin_image,
                passport,
                expiry_date,
                reset_password_token,
                lga,
                enugu_practice_id,
                nin_status: ninStatus,
                practice_id_status: "Pending",
                gender,
            }
        })

        const has_register = await prisma.personnel_payment.update({
            where:{ reference },
            data: {
                has_registered:true
            }
        })

        const lga_id = parseInt(user.lga as string)
        const lga_detail = await prisma.local_government.findUnique({ where:{id: lga_id}})

        await sendWelcomeMail(user.email,user, password)

        return response.status(200).json({ message: 'Health Personnel Created Successfullly', user, lga:lga_detail});
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}