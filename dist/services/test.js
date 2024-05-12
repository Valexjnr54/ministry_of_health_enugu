"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("../utils/functions");
const verification_1 = require("./verification");
async function checkNIN() {
    try {
        const response = await (0, verification_1.verifynin)('16249811071');
        const expiry_date = (await (0, functions_1.renewal_expiryDate)()).toString();
        console.log(response);
        console.log(expiry_date);
    }
    catch (error) {
        console.error("Failed to verify NIN:", error);
    }
}
async function checkCAC(cac) {
    const company_type = await (0, functions_1.ShortCode)(cac);
    const prefixes = ["BN-", "IT-", "RC-"];
    const rc_number = (0, functions_1.extractIdFromPrefixedString)(cac, prefixes);
    const cacResponse = await (0, verification_1.verifycac)(await rc_number, "Makuo Hospital", company_type);
    console.log(cacResponse);
    // if (cacResponse.response_code == '01') {
    //   return response.status(404).json({ message: 'Invalid Owner`s NIN, Please Check the NIN number and try again' });
    // }else if (cacResponse.response_code == '02'){
    //   return response.status(400).json({ message: 'NIN verification service not available at the moment, Please try again later' });
    // }else if(cacResponse.response_code == '02') {
    //   return response.status(400).json({ message: 'Not your fault we will look into the reason, Please try again later' });
    // }
}
checkNIN();
checkCAC("RC-8827302");
