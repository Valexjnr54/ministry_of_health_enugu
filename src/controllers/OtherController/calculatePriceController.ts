import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '../../models';
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

export async function personnelPriceList(request: Request, response: Response) {
    // Assuming `type` is directly passed in the request body and is expected to be an enum type.
    const { type } = request.body;
    // Check if type is provided
    if (!type) {
        return response.status(400).json({ message: "Type is required." });
    }

    try {
        // Attempt to fetch the price list for the provided type
        const price = await prisma.personnel_price_list.findFirst({
            where: { type: type }
        });

        // Check if a price list entry was found
        if (!price) {
            return response.status(404).json({ message: `No Price List associated with type ${type}` });
        }

        const application_fee = price.application_fee
        const application_charge_in_percent = price.application_charge/100
        const enugu_ID_certificate = price.enugu_ID_certificate
        const renewal_fee = price.renewal_fee
        const renewal_charge =  price.renewal_charge
        const charge_fee = application_fee * application_charge_in_percent
        const total_application_fee = application_fee + charge_fee
        const total_fee = total_application_fee + enugu_ID_certificate
        const total_renewal = renewal_charge + renewal_fee

        // If a price list entry is found, return it
        return response.status(200).json({'applicationFee' : total_fee, 'renewalFee': total_renewal});
    } catch (error) {
        console.error("Error fetching price list:", error);
        // Send a generic error message to the client
        return response.status(500).json({ message: "Internal server error" });
    }
}

export async function facilityPriceList(request: Request, response: Response) {
    // Assuming `type` is directly passed in the request body and is expected to be an enum type.
    const { type, number_of_beds } = request.body;
    // Check if type is provided
    if (!type) {
        return response.status(400).json({ message: "Type is required." });
    }

    try {
        if (type === "Specialist_hospital" || type === "Specialist_clinic" || type === "General_hospital" || type === "Maternity_home") {
            const validationRules = [
                body('number_of_beds').notEmpty().withMessage('Number of beds is required'),
            ];
              
            // Apply validation rules to the request
            await Promise.all(validationRules.map(rule => rule.run(request)));
            
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
            }

            // Attempt to fetch the price list for the provided type
            const price = await prisma.facility_price_list.findFirst({
                where: { facility_type: type, number_of_beds }
            });

            // Check if a price list entry was found
            if (!price) {
                return response.status(404).json({ message: `No Price List associated with type ${type}` });
            }

            const application_fee = price.application_fee
            const application_charge_in_percent = price.application_fee_charge/100
            const renewal_fee = price.renewal_fee
            const renewal_charge_percent =  price.renewal_charge / 100
            const first_time_reg_fee = price.first_time_reg
            const first_time_charge_percent =  price.first_time_charge/100
            const charge_fee = application_fee * application_charge_in_percent
            const first_time_charge_fee = first_time_reg_fee * first_time_charge_percent
            const renewal_charge_fee = renewal_fee * renewal_charge_percent

            const verification = await prisma.facility_constant_price_list.findUnique({ where: {name:"Verification"}})
            const inspection_charge = await prisma.facility_constant_price_list.findUnique({ where: {name:"Inspection Charges"}})
            const inspection_fee = await prisma.facility_constant_price_list.findUnique({ where: {name:"Inspection Fee"}})
            const certificate = await prisma.facility_constant_price_list.findUnique({ where: {name:"Enugu Health Authorization Certificate"}})

            if (!verification) {
                return response.status(404).json({ message: `Invalid verification amount` });
            } else if (!inspection_charge) {
                return response.status(404).json({ message: `Invalid inspection charge amount` });
            } else if (!inspection_fee) {
                return response.status(404).json({ message: `Invalid inspection fee amount` });
            } else if (!certificate) {
                return response.status(404).json({ message: `Invalid enugu cerificate amount` });
            }

            const verification_fee = verification.amount
            const inspection_charge_fee = inspection_charge.amount
            const inspection_fee_amount = inspection_fee.amount
            const certificate_fee = certificate.amount

            const total_application_fee = charge_fee + application_fee + verification_fee
            const total_first_time_fee = first_time_reg_fee + first_time_charge_fee + inspection_charge_fee + inspection_fee_amount + certificate_fee
            const total_renewal_fee = renewal_fee + renewal_charge_fee 

            return response.status(200).json({'applicationFee' : total_application_fee, 'first_timeFee':total_first_time_fee, 'renewalFee': total_renewal_fee});
            
        }
        // Attempt to fetch the price list for the provided type
        const price = await prisma.facility_price_list.findFirst({
            where: { facility_type: type }
        });

        // Check if a price list entry was found
        if (!price) {
            return response.status(404).json({ message: `No Price List associated with type ${type}` });
        }

        const application_fee = price.application_fee
        const application_charge_in_percent = price.application_fee_charge/100
        const renewal_fee = price.renewal_fee
        const renewal_charge_percent =  price.renewal_charge / 100
        const first_time_reg_fee = price.first_time_reg
        const first_time_charge_percent =  price.first_time_charge/100
        const charge_fee = application_fee * application_charge_in_percent
        const first_time_charge_fee = first_time_reg_fee * first_time_charge_percent
        const renewal_charge_fee = renewal_fee * renewal_charge_percent

        const verification = await prisma.facility_constant_price_list.findUnique({ where: {name:"Verification"}})
        const inspection_charge = await prisma.facility_constant_price_list.findUnique({ where: {name:"Inspection Charges"}})
        const inspection_fee = await prisma.facility_constant_price_list.findUnique({ where: {name:"Inspection Fee"}})
        const certificate = await prisma.facility_constant_price_list.findUnique({ where: {name:"Enugu Health Authorization Certificate"}})

        if (!verification) {
            return response.status(404).json({ message: `Invalid verification amount` });
        } else if (!inspection_charge) {
            return response.status(404).json({ message: `Invalid inspection charge amount` });
        } else if (!inspection_fee) {
            return response.status(404).json({ message: `Invalid inspection fee amount` });
        } else if (!certificate) {
            return response.status(404).json({ message: `Invalid enugu cerificate amount` });
        }

        const verification_fee = verification.amount
        const inspection_charge_fee = inspection_charge.amount
        const inspection_fee_amount = inspection_fee.amount
        const certificate_fee = certificate.amount

        const total_application_fee = charge_fee + application_fee + verification_fee
        const total_first_time_fee = first_time_reg_fee + first_time_charge_fee + inspection_charge_fee + inspection_fee_amount + certificate_fee
        const total_renewal_fee = renewal_fee + renewal_charge_fee 

        // If a price list entry is found, return it
        return response.status(200).json({'applicationFee' : total_application_fee, 'first_timeFee':total_first_time_fee, 'renewalFee': total_renewal_fee});
    } catch (error) {
        console.error("Error fetching price list:", error);
        // Send a generic error message to the client
        return response.status(500).json({ message: "Internal server error" });
    }
}

export async function confirmEnforcer(request: Request, response: Response) {
    const  code  = request.query.enforcer_code as string
    try {
      const check_code = await prisma.enforcer.findUnique({ where:{ username:code }})
      if (!check_code) {
        return response.status(404).json({ message: "Enforcer Not Found", status: false})
      }
      return response.status(200).json({ message:"Enforcer found", status:true})
    } catch (error) {
      return response.status(500).json({ message: error})
    }
}