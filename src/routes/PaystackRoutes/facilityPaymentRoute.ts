import express from 'express';
import { initializePaymentHandler, verifyPaymentHandler } from '../../controllers/PaystackController/health_care/facilityPaymentController';
import { initializeRenewalPaymentHandler, verifyCompleteRegistrationPaymentHandler, verifyRenewalPaymentHandler } from '../../controllers/HealthCareController/FacilityController/facilityController';
export const facilityPaymentRouter = express.Router();

facilityPaymentRouter.post('/initialize-facility-payment', initializePaymentHandler);
facilityPaymentRouter.get('/verify-facility-payment', verifyPaymentHandler);
facilityPaymentRouter.get('/verify-facility-complete-registration-payment', verifyCompleteRegistrationPaymentHandler);