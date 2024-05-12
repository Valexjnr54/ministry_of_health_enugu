import express from 'express';
import { initializeRenewalPaymentHandler, verifyRenewalPaymentHandler } from '../../../controllers/HealthCareController/FacilityController/facilityController';
import { initializeFoodRenewalPaymentHandler, verifyFoodRenewalPaymentHandler } from '../../../controllers/Food_handlersController/FacilityController/facilityController';
export const facilityRenewalRouter = express.Router();

facilityRenewalRouter.post('/initialize-facility-payment-renewal', initializeRenewalPaymentHandler);
facilityRenewalRouter.get('/verify-facility-payment-renewal', verifyRenewalPaymentHandler);

facilityRenewalRouter.post('/initialize-food-vendor-facility-payment-renewal', initializeFoodRenewalPaymentHandler);
facilityRenewalRouter.get('/verify-food-vendor-facility-payment-renewal', verifyFoodRenewalPaymentHandler);