import express from 'express';
import { checkReference, verificationFacilityPaymentHandler, verificationFoodFacilityPaymentHandler, verificationFoodPaymentHandler, verificationPaymentHandler, verifyCAC, verifyFacility, verifyFoodFacility, verifyFoodPersonnel, verifyNIN, verifyPersonnel } from '../../controllers/OtherController/verificationController';
export const verificationRouter = express.Router();

verificationRouter.post('/verify-nin', verifyNIN);
verificationRouter.post('/verify-cac', verifyCAC);
verificationRouter.get('/verify-health-personnel', verifyPersonnel);
verificationRouter.get('/verify-health-facility', verifyFacility);
verificationRouter.get('/verify-food-handler-personnel', verifyFoodPersonnel);
verificationRouter.get('/verify-food-vendor-facility', verifyFoodFacility);

verificationRouter.get('/verify-personnel-payment', verificationPaymentHandler);
verificationRouter.get('/verify-facility-payment', verificationFacilityPaymentHandler);
verificationRouter.get('/verify-food-handler-personnel-payment', verificationFoodPaymentHandler);
verificationRouter.get('/verify-food-vendor-facility-payment', verificationFoodFacilityPaymentHandler);

verificationRouter.post('/check-payment', checkReference);