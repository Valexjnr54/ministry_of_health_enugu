import express from 'express';
import { initializeRenewalPaymentHandler, verifyRenewalPaymentHandler } from '../../../controllers/PaystackController/health_care/personnelPaymentController';
import { initializeFoodRenewalPaymentHandler, verifyFoodRenewalPaymentHandler } from '../../../controllers/PaystackController/food_handler/personnelPaymentController';
export const personnelRenewalRouter = express.Router();

personnelRenewalRouter.post('/initialize-personnel-payment-renewal', initializeRenewalPaymentHandler);
personnelRenewalRouter.get('/verify-personnel-payment-renewal', verifyRenewalPaymentHandler);

personnelRenewalRouter.post('/initialize-food-handler-personnel-payment-renewal', initializeFoodRenewalPaymentHandler);
personnelRenewalRouter.get('/verify-food-handler-personnel-payment-renewal', verifyFoodRenewalPaymentHandler);