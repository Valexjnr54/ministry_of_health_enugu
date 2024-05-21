import dotenv from 'dotenv'

dotenv.config({ path:__dirname + '/../../.env' });

export const Config = {
    Jwt_secret: process.env.JWT_SECRET,
    corsAllowedOrigin: process.env.CORS_ALLOWED_ORIGIN,
    port: process.env.PORT,
    credoSecret: process.env.CREDO_API_KEY,
    credoPublicKey: process.env.CREDO_API_PUBLIC_KEY,
    credoBaseURL: process.env.CREDO_BASE_URL,
    credoPersonnelCallback: process.env.CREDO_PERSONNEL_CALLBACK,
    credoFacilityCallback: process.env.CREDO_FACILITY_CALLBACK,
    credoFoodPersonnelCallback: process.env.CREDO_FOOD_PERSONNEL_CALLBACK,
    credoFoodFacilityCallback: process.env.CREDO_FOOD_FACILITY_CALLBACK,
    credoFacilityCompleteRegistrationCallback: process.env.CREDO_FACILITY_COMPLETE_REGISTRATION_CALLBACK,
    credoPersonnelVerificationCallback: process.env.CREDO_PERSONNEL_VERIFICATION_CALLBACK,
    credoFacilityVerificationCallback: process.env.CREDO_FACILITY_VERIFICATION_CALLBACK,
    credoVerifyPersonnelRenewalCallback: process.env.CREDO_VERIFY_PERSONNEL_RENEWAL_CALLBACK,
    credoVerifyFacilityRenewalCallback: process.env.CREDO_VERIFY_FACILITY_RENEWAL_CALLBACK,
    // Food Handlers
    credoFoodPersonnelVerificationCallback: process.env.CREDO_FOOD_PERSONNEL_VERIFICATION_CALLBACK,
    credoFoodFacilityVerificationCallback: process.env.CREDO_FOOD_FACILITY_VERIFICATION_CALLBACK,
    credoVerifyFoodPersonnelRenewalCallback: process.env.CREDO_VERIFY_FOOD_PERSONNEL_RENEWAL_CALLBACK,
    credoVerifyFoodFacilityRenewalCallback: process.env.CREDO_VERIFY_FOOD_FACILITY_RENEWAL_CALLBACK,

    appRootURL: process.env.APP_ROOT_URL,
    premblySecretKey: process.env.PREMBLY_SECRET_KEY,
    premblyAppID: process.env.PREMBLY_APP_ID,
};

export const emailConfig = {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '465', 10),
    secure: process.env.EMAIL_SECURE === 'true' || false,
    auth: {
      user: process.env.EMAIL_USER || 'qmarthub@gmail.com',
      pass: process.env.EMAIL_PASSWORD || 'fukpospayyoomzlv',
    },
  };

export const cloudinaryConfig ={
  name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
}