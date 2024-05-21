import { Prisma, PrismaClient } from '../models';
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();
export async function personnel_price_list_service(type: any) {
    try {
        // Attempt to fetch the price list for the provided type
        const price = await prisma.personnel_price_list.findFirst({
            where: { type: type }
        });

        // Check if a price list entry was found
        if (!price) {
            return ({ message: `No Price List associated with type ${type}` });
        }

        if (price.certificate_charge === null) {
            return ({ message: `Certificate charge should not be null` });
        }

        const application_fee = price.application_fee
        const application_charge_in_percent = price.application_charge/100
        const certificate_fee = price.enugu_ID_certificate
        const certificate_charge_in_percent = price.certificate_charge/100
        const renewal_fee = price.renewal_fee
        const renewal_charge_in_percent =  price.renewal_charge/100
        const charge_fee = application_fee * application_charge_in_percent
        const renewal_charge_fee = renewal_fee * renewal_charge_in_percent
        const certificate_charge_fee = certificate_fee * certificate_charge_in_percent
        const total_application_fee = application_fee + charge_fee
        const total_certificate_fee = certificate_fee + certificate_charge_fee
        const total_fee = total_application_fee + total_certificate_fee
        const total_renewal = renewal_charge_fee + renewal_fee

        // If a price list entry is found, return it
        return ({'applicationFee' : total_fee, 'renewalFee': total_renewal});
    } catch (error) {
        console.error("Error fetching price list:", error);
        // Send a generic error message to the client
        return ({ message: "Internal server error" });
    }
}

// export async function facility_price_list_service(type:any, number_of_beds:string | null) {
//     try {
//         if (type === "Specialist_hospital" || type === "Specialist_clinic" || type === "General_hospital" || type === "Maternity_home") {
//             if (!number_of_beds) {
//                 return ({ message: "Number of beds is required" });
//             }

//             // Attempt to fetch the price list for the provided type
//             const price = await prisma.facility_price_list.findFirst({
//                 where: { facility_type: type, number_of_beds }
//             });

//             // Check if a price list entry was found
//             if (!price) {
//                 return ({ message: `No Price List associated with type ${type}` });
//             }

//             const application_fee = price.application_fee
//             const application_charge_in_percent = price.application_fee_charge/100
//             const renewal_fee = price.renewal_fee
//             const renewal_charge_percent =  price.renewal_charge / 100
//             const first_time_reg_fee = price.first_time_reg
//             const first_time_charge_percent =  price.first_time_charge/100
//             const charge_fee = application_fee * application_charge_in_percent
//             const first_time_charge_fee = first_time_reg_fee * first_time_charge_percent
//             const renewal_charge_fee = renewal_fee * renewal_charge_percent

//             const verification = await prisma.facility_constant_price_list.findUnique({ where: {name:"Verification"}})
//             const inspection_charge = await prisma.facility_constant_price_list.findUnique({ where: {name:"Inspection Charges"}})
//             const inspection_fee = await prisma.facility_constant_price_list.findUnique({ where: {name:"Inspection Fee"}})
//             const certificate = await prisma.facility_constant_price_list.findUnique({ where: {name:"Enugu Health Authorization Certificate"}})

//             if (!verification) {
//                 return ({ message: `Invalid verification amount` });
//             } else if (!inspection_charge) {
//                 return ({ message: `Invalid inspection charge amount` });
//             } else if (!inspection_fee) {
//                 return ({ message: `Invalid inspection fee amount` });
//             } else if (!certificate) {
//                 return ({ message: `Invalid enugu cerificate amount` });
//             }

//             const verification_fee = verification.amount
//             const inspection_charge_fee = inspection_charge.amount
//             const inspection_fee_amount = inspection_fee.amount
//             const certificate_fee = certificate.amount

//             const total_application_fee = charge_fee + application_fee + verification_fee
//             const total_first_time_fee = first_time_reg_fee + first_time_charge_fee + inspection_charge_fee + inspection_fee_amount + certificate_fee
//             const total_renewal_fee = renewal_fee + renewal_charge_fee 

//             return ({'applicationFee' : total_application_fee, 'first_timeFee':total_first_time_fee, 'renewalFee': total_renewal_fee});
            
//         }
//         // Attempt to fetch the price list for the provided type
//         const price = await prisma.facility_price_list.findFirst({
//             where: { facility_type: type }
//         });

//         // Check if a price list entry was found
//         if (!price) {
//             return ({ message: `No Price List associated with type ${type}` });
//         }

//         const application_fee = price.application_fee
//         const application_charge_in_percent = price.application_fee_charge/100
//         const renewal_fee = price.renewal_fee
//         const renewal_charge_percent =  price.renewal_charge / 100
//         const first_time_reg_fee = price.first_time_reg
//         const first_time_charge_percent =  price.first_time_charge/100
//         const charge_fee = application_fee * application_charge_in_percent
//         const first_time_charge_fee = first_time_reg_fee * first_time_charge_percent
//         const renewal_charge_fee = renewal_fee * renewal_charge_percent

//         const verification = await prisma.facility_constant_price_list.findUnique({ where: {name:"Verification"}})
//         const inspection_charge = await prisma.facility_constant_price_list.findUnique({ where: {name:"Inspection Charges"}})
//         const inspection_fee = await prisma.facility_constant_price_list.findUnique({ where: {name:"Inspection Fee"}})
//         const certificate = await prisma.facility_constant_price_list.findUnique({ where: {name:"Enugu Health Authorization Certificate"}})

//         if (!verification) {
//             return ({ message: `Invalid verification amount` });
//         } else if (!inspection_charge) {
//             return ({ message: `Invalid inspection charge amount` });
//         } else if (!inspection_fee) {
//             return ({ message: `Invalid inspection fee amount` });
//         } else if (!certificate) {
//             return ({ message: `Invalid enugu cerificate amount` });
//         }

//         const verification_fee = verification.amount
//         const inspection_charge_fee = inspection_charge.amount
//         const inspection_fee_amount = inspection_fee.amount
//         const certificate_fee = certificate.amount

//         const total_application_fee = charge_fee + application_fee + verification_fee
//         const total_first_time_fee = first_time_reg_fee + first_time_charge_fee + inspection_charge_fee + inspection_fee_amount + certificate_fee
//         const total_renewal_fee = renewal_fee + renewal_charge_fee 

//         // If a price list entry is found, return it
//         return ({'applicationFee' : total_application_fee, 'first_timeFee':total_first_time_fee, 'renewalFee': total_renewal_fee});
//     } catch (error) {
//         console.error("Error fetching price list:", error);
//         // Send a generic error message to the client
//         return ({ message: "Internal server error" });
//     }
// }

export async function facility_price_list_service(type: any, number_of_beds: string | null) {
    try {
        let price;
        if (number_of_beds) {
            // Attempt to fetch the price list for the provided type and number of beds
            price = await prisma.facility_price_list.findFirst({
                where: { facility_type: type, number_of_beds }
            });
        } else {
            // Attempt to fetch the price list for the provided type without considering number of beds
            price = await prisma.facility_price_list.findFirst({
                where: { facility_type: type }
            });
        }

        // Check if a price list entry was found
        if (!price) {
            return ({ message: `No Price List associated with type ${type}` });
        }

        const {
            application_fee,
            application_fee_charge,
            renewal_fee,
            renewal_charge,
            first_time_reg,
            first_time_charge,
            verification_charge, 
            inspection_charge, 
            certificate_charge, 
            verification_fee, 
            inspection_fee, 
            certificate_fee
        } = price;

        if (verification_charge === null || inspection_charge === null || certificate_charge === null || verification_fee === null || inspection_fee === null || certificate_fee === null) {
            return ({ message: `Certificate Fee & charge, Inspection Fee & Charge and Verification Fee & Charge should not be null` });
        }

        // Calculate charge rates
        const application_charge_in_percent = application_fee_charge / 100;
        const renewal_charge_percent = renewal_charge / 100;
        const first_time_charge_percent = first_time_charge / 100;
        const verification_charge_percent =  verification_charge / 100
        const certificate_charge_percent =  certificate_charge / 100
        const inspection_charge_percent =  inspection_charge / 100
        

        // Calculate fees
        const charge_fee = application_fee * application_charge_in_percent;
        const first_time_charge_fee = first_time_reg * first_time_charge_percent;
        const renewal_charge_fee = renewal_fee * renewal_charge_percent;
        const verification_charge_fee = verification_fee * verification_charge_percent
        const inspection_charge_fee = inspection_fee * inspection_charge_percent
        const certificate_charge_fee = certificate_fee * certificate_charge_percent

        const total_application_fee = charge_fee + application_fee + verification_fee + verification_charge_fee
        const total_first_time_fee = first_time_reg + first_time_charge_fee + inspection_charge_fee + inspection_fee + certificate_fee + certificate_charge_fee
        const total_renewal_fee = renewal_fee + renewal_charge_fee + verification_fee + verification_charge_fee + inspection_charge_fee + inspection_fee + certificate_fee + certificate_charge_fee

        return ({
            'applicationFee': total_application_fee,
            'firstTimeFee': total_first_time_fee,
            'renewalFee': total_renewal_fee
        });
    } catch (error) {
        console.error("Error fetching price list:", error);
        return ({ message: "Internal server error" });
    }
}
