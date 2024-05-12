"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryConfig = exports.emailConfig = exports.Config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + '/../../.env' });
exports.Config = {
    Jwt_secret: process.env.JWT_SECRET,
    corsAllowedOrigin: process.env.CORS_ALLOWED_ORIGIN,
    port: process.env.PORT,
    paystackSecret: process.env.PAYSTACK_API_KEY,
    paystackBaseURL: process.env.PAYSTACK_BASE_URL,
    paystackPersonnelCallback: process.env.PAYSTACK_PERSONNEL_CALLBACK,
    paystackFacilityCallback: process.env.PAYSTACK_FACILITY_CALLBACK,
    paystackFoodPersonnelCallback: process.env.PAYSTACK_FOOD_PERSONNEL_CALLBACK,
    paystackFoodFacilityCallback: process.env.PAYSTACK_FOOD_FACILITY_CALLBACK,
    paystackFacilityCompleteRegistrationCallback: process.env.PAYSTACK_FACILITY_COMPLETE_REGISTRATION_CALLBACK,
    paystackPersonnelVerificationCallback: process.env.PAYSTACK_PERSONNEL_VERIFICATION_CALLBACK,
    paystackFacilityVerificationCallback: process.env.PAYSTACK_FACILITY_VERIFICATION_CALLBACK,
    paystackVerifyPersonnelRenewalCallback: process.env.PAYSTACK_VERIFY_PERSONNEL_RENEWAL_CALLBACK,
    paystackVerifyFacilityRenewalCallback: process.env.PAYSTACK_VERIFY_FACILITY_RENEWAL_CALLBACK,
    // Food Handlers
    paystackFoodPersonnelVerificationCallback: process.env.PAYSTACK_FOOD_PERSONNEL_VERIFICATION_CALLBACK,
    paystackFoodFacilityVerificationCallback: process.env.PAYSTACK_FOOD_FACILITY_VERIFICATION_CALLBACK,
    paystackVerifyFoodPersonnelRenewalCallback: process.env.PAYSTACK_VERIFY_FOOD_PERSONNEL_RENEWAL_CALLBACK,
    paystackVerifyFoodFacilityRenewalCallback: process.env.PAYSTACK_VERIFY_FOOD_FACILITY_RENEWAL_CALLBACK,
    appRootURL: process.env.APP_ROOT_URL,
    premblySecretKey: process.env.PREMBLY_SECRET_KEY,
    premblyAppID: process.env.PREMBLY_APP_ID,
};
exports.emailConfig = {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '465', 10),
    secure: process.env.EMAIL_SECURE === 'true' || false,
    auth: {
        user: process.env.EMAIL_USER || 'qmarthub@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'fukpospayyoomzlv',
    },
};
exports.cloudinaryConfig = {
    name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
};
