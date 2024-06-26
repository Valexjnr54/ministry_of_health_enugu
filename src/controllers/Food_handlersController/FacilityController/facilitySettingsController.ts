import { Request, Response } from 'express';
import { PrismaClient,Prisma } from '../../../models';
import { body, validationResult } from "express-validator";
import  bcrypt  from "bcrypt";
import fs from "fs";
import uploadImage from '../../../utils/cloudinary';

const prisma = new PrismaClient();

type JsonObject = Record<string, string | number | boolean  | JsonArray>;
type JsonArray = Array<string | number | boolean | JsonObject | JsonArray>;

interface PersonnelCount {
  [key: string]: number;
}

export async function changePassword(request: Request, response: Response) {
    const { old_password, new_password, confirm_password } = request.body
    const facility_id = request.user.facilityId;
    
    // Check if user_id is not present or undefined
    if (!facility_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
            body('old_password').notEmpty().withMessage('Old Password is required'),
            body('new_password').isLength({ min: 16 }).withMessage('Password must be at least 16 characters long'),
            body('confirm_password').isLength({ min: 16 }).withMessage('Confirm Password must be at least 16 characters long'),
          ];
          
          // Apply validation rules to the request
          await Promise.all(validationRules.map(rule => rule.run(request)));
          
          const errors = validationResult(request);
          if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
          }
        // Retrieve the user by user_id
        const check_facility = await prisma.facility.findUnique({ where: { id: facility_id } });
        if (!check_facility) {
            return response.status(404).json({ message: "Facility Not Found"})
        }
        const password = check_facility.password;

        if(password !== null){
          // Verify the password
          const passwordMatch = await bcrypt.compare(old_password, password);

          if (!passwordMatch) {
              return response.status(401).json({ error: 'Old Password Mismatch' });
          }
        }

        

        if (new_password !== confirm_password) {
            return response.status(401).json({ error: 'Password Mismatch' });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(new_password, 10);

        const update = await prisma.facility.update({ where: {id: facility_id}, data:{password: hashedPassword}})
    
        return response.status(200).json({ message:"Password Updated Successfully", user:update})
      } catch (error) {
        return response.status(500).json({ message: error})
      }
}

// export async function changeProfileImage(request: Request, response: Response) {
//     const facility_id = request.user.facilityId;
    
//     // Check if user_id is not present or undefined
//     if (!facility_id) {
//         return response.status(403).json({ message: 'Unauthorized User' });
//     }
//     try {
//         // Retrieve the user by user_id
//         const check_facility = await prisma.facility.findUnique({ where: { id: facility_id } });
//         if (!check_facility) {
//             return response.status(404).json({ message: "Facility Not Found"})
//         }

//         //Uploading Image to Cloudinary
//         let profile_image // Default URL
//         if (request.file) {
//         const profile_image_path = request.file.path; // Assuming you're using multer or a similar middleware for file uploads
//         if (profile_image_path != null) {
//             const uploadedImageUrl = await uploadImage(profile_image_path, 'enugu_ministry_of_health/images/facility_passports');
//             if (uploadedImageUrl) {
//             profile_image = uploadedImageUrl;
//             }
//         }

//         fs.unlink(profile_image_path, (err) => {
//             if (err) {
//             console.error(`Error deleting file: ${profile_image_path}`);
//             } else {
//             console.log(`File deleted: ${profile_image_path}`);
//             }
//         });
//         }
//         else {
//             response.status(400).json({ message: 'No file uploaded' });
//         }

//         const user = await prisma.facility.update({ where: {id : facility_id}, data:{profile_image}})
//         return response.status(200).json({ message: 'Facility profile image updated', user});
//       } catch (error) {
//         return response.status(500).json({ message: error})
//       }
// }

export async function updateDetails(request: Request, response: Response) {
  const { 
    facility_name,
    location,
    owner_name,
    owner_phone_number,
    owner_contact_address,
    owner_email,
    facility_sector,
    facility_level,
    services_offered,
    number_of_bed,
    source_of_water,
    method_of_disposal
 } = request.body
    const facility_id = request.user.facilityId;
    
    // Check if user_id is not present or undefined
    if (!facility_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
          body('facility_name').notEmpty().withMessage('Facility Name is required'),
          body('location').notEmpty().withMessage('Location is required'),
          body('owner_email').isEmail().withMessage('Owner email address'),
          body('owner_name').notEmpty().withMessage('Owner Name is required'),
          body('owner_phone_number').notEmpty().withMessage('Owner Phone Number is required'),
          body('owner_contact_address').notEmpty().withMessage('Owner Contact Address is required'),
          body('facility_sector').notEmpty().withMessage('Facility Sector is required'),
          body('facility_level').notEmpty().withMessage('Facility Level is required'),
          body('services_offered').notEmpty().withMessage('Services Offered is required'),
          body('number_of_bed').notEmpty().withMessage('number Of Bed is required'),
          body('source_of_water').notEmpty().withMessage('Source of Water is required'),
          body('method_of_disposal').notEmpty().withMessage('Method of Disposal is required'),
      ];
        
      // Apply validation rules to the request
      await Promise.all(validationRules.map(rule => rule.run(request)));
      
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
          return response.status(400).json({ errors: errors.array() });
      }
      // Retrieve the user by user_id
      const check_facility = await prisma.facility.findUnique({ where: { id: facility_id } });
      if (!check_facility) {
          return response.status(404).json({ message: "Facility Not Found"})
      }
      let amount: number
      const numberOfBed = parseInt(number_of_bed as string, 10)

      const services_offered_array: string[] = services_offered.split(',')
      const service_offered = JSON.stringify(services_offered_array);

      const user = await prisma.facility.update({
          where:{ id:facility_id },
          data: {
            facility_name,
            location,
            owner_name,
            owner_phone_number,
            owner_contact_address,
            owner_email,
            facility_sector,
            facility_level,
            services_offered:service_offered,
            number_of_bed: numberOfBed,
            source_of_water,
            method_of_disposal,
        }
      })

        return response.status(200).json({ message: 'Facility profile updated', user});
       
      } catch (error) {
        return response.status(500).json({ message: error})
      }
}

export async function addPersonnel(request: Request, response: Response) {
  const { facility_personnel } = request.body;
  const facility_id = request.user.facilityId;

  // Check if facility_id is not present or undefined
  if (!facility_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    const validationRules = [
      body('facility_personnel').notEmpty().withMessage('Facility Personnel is required'),
    ];

    // Apply validation rules to the request
    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // Retrieve the facility by facility_id
    const check_facility = await prisma.facility.findUnique({ where: { id: facility_id } });
    if (!check_facility) {
      return response.status(404).json({ message: "Facility Not Found" });
    }

    let count_personnel: JsonObject;

    // Check if facility_personnel_count is a JsonObject
    if (typeof check_facility.facility_personnel_count === 'object' && check_facility.facility_personnel_count !== null) {
      count_personnel = check_facility.facility_personnel_count as JsonObject;
    } else {
        count_personnel = {};
    }

    // Extract facility personnel count from the request body
    const facilityPersonnel = facility_personnel;
    const facility_count = facilityPersonnel.count;

    // Check if there is an existing key from facility_count in count_personnel
    for (const key in facility_count) {
      if (count_personnel.hasOwnProperty(key)) {
        // Add the existing value and the new value together
        count_personnel[key] += facility_count[key];
      } else {
        // If the key doesn't exist in count_personnel, add it with the new value
        count_personnel[key] = facility_count[key];
      }
    }
    
    facilityPersonnel.personnel.forEach(async (personnel: any) => {
      const type = personnel.type;
      const enugu_practice_id = personnel.enugu_practice_id
      const user  = await prisma.users.findUnique({ where: {enugu_practice_id}})
      const user_id =  user?.id
      
      if (user_id === undefined) {
          console.error("User ID is undefined for personnel:", personnel);
          return; // Skip creating facility personnel if user ID is undefined
      }
      try {
          const createdPersonnel = await prisma.facility_personnel.create({
              data: {
                  facility_id,
                  enugu_practice_id,
                  user_id,
                  type
              }
          });
      } catch (error) {
          console.error("Error creating facility personnel:", error);
      }
    });

    // Update the facility with the updated count_personnel
    const updatedFacility = await prisma.facility.update({
      where: { id: facility_id },
      data: {
        facility_personnel_count: count_personnel,
      },
    });

    return response.status(200).json({ message: 'Facility profile updated', user: updatedFacility });

  } catch (error) {
    return response.status(500).json({ message: error || "Internal Server Error" });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after operation
  }
}

export async function removePersonnel(request: Request, response: Response) {
  const { facility_personnel } = request.body;
  const facility_id = request.user.facilityId;

  // Check if facility_id is not present or undefined
  if (!facility_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    const validationRules = [
      body('facility_personnel').notEmpty().withMessage('Facility Personnel is required'),
    ];

    // Apply validation rules to the request
    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // Retrieve the facility by facility_id
    const check_facility = await prisma.facility.findUnique({ where: { id: facility_id } });
    if (!check_facility) {
      return response.status(404).json({ message: "Facility Not Found" });
    }

    let count_personnel: JsonObject;

    // Check if facility_personnel_count is a JsonObject
    if (typeof check_facility.facility_personnel_count === 'object' && check_facility.facility_personnel_count !== null) {
      count_personnel = check_facility.facility_personnel_count as JsonObject;
    } else {
        count_personnel = {};
    }

    // Extract facility personnel count from the request body
    const facilityPersonnel = facility_personnel;
    const facility_count = facilityPersonnel.count;

    // Check if there is an existing key from facility_count in count_personnel
    for (const key in facility_count) {
      if (count_personnel.hasOwnProperty(key)) {
        // Add the existing value and the new value together
        count_personnel[key] =- facility_count[key];
      }
    }
    
    facilityPersonnel.personnel.forEach(async (personnel: any) => {
      const type = personnel.type;
      const enugu_practice_id = personnel.enugu_practice_id
      const user  = await prisma.users.findUnique({ where: {enugu_practice_id}})
      const user_id =  user?.id
      
      if (user_id === undefined) {
          console.error("User ID is undefined for personnel:", personnel);
          return; // Skip creating facility personnel if user ID is undefined
      }
      try {
          const createdPersonnel = await prisma.facility_personnel.deleteMany({
              where: {
                  facility_id,
                  enugu_practice_id,
              }
          });
      } catch (error) {
          console.error("Error creating facility personnel:", error);
      }
    });

    // Update the facility with the updated count_personnel
    const updatedFacility = await prisma.facility.update({
      where: { id: facility_id },
      data: {
        facility_personnel_count: count_personnel,
      },
    });

    return response.status(200).json({ message: 'Facility profile updated', user: updatedFacility });

  } catch (error) {
    return response.status(500).json({ message: error || "Internal Server Error" });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after operation
  }
}