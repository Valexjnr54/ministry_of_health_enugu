import { sendApprovedFoodHandlerMail, sendCreateSubAdminMail } from "../utils/emailSender";
import { ShortCode, extractIdFromPrefixedString, renewal_expiryDate } from "../utils/functions";
import { verifycac, verifynin } from "./verification";
import { PrismaClient, Status } from '../models';

const prisma = new PrismaClient();

async function checkNIN() {
    try {
        const response = await verifynin('16249811071');
        const expiry_date = (await renewal_expiryDate()).toString();
        console.log(response);
        console.log(expiry_date);
        
    } catch (error) {
        console.error("Failed to verify NIN:", error);
    }
}

async function checkCAC(cac:string) {
    const company_type = await ShortCode(cac)
        const prefixes = ["BN-", "IT-", "RC-"];
        const rc_number = extractIdFromPrefixedString(cac, prefixes)
        const cacResponse = await verifycac(await rc_number,"Makuo Hospital",company_type)
        console.log(cacResponse);
        const user= await prisma.users.findUnique({ where:{id : 1}});
        if(!user){
            return 'Not Found';
        }
        sendCreateSubAdminMail('jimvalex54@gmail.com',user,'123456789')
        // if (cacResponse.response_code == '01') {
        //   return response.status(404).json({ message: 'Invalid Owner`s NIN, Please Check the NIN number and try again' });
        // }else if (cacResponse.response_code == '02'){
        //   return response.status(400).json({ message: 'NIN verification service not available at the moment, Please try again later' });
        // }else if(cacResponse.response_code == '02') {
        //   return response.status(400).json({ message: 'Not your fault we will look into the reason, Please try again later' });
        // }
}

checkNIN();
checkCAC("RC-8827302")
