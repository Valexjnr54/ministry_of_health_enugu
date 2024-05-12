import express from 'express';
import { initializePaymentHandler, verifyPaymentHandler } from '../../../controllers/PaystackController/food_handler/facilityPaymentController';
export const foodfacilityPaymentRouter = express.Router();

foodfacilityPaymentRouter.post('/initialize-facility-payment', initializePaymentHandler);
foodfacilityPaymentRouter.get('/verify-facility-payment', verifyPaymentHandler);