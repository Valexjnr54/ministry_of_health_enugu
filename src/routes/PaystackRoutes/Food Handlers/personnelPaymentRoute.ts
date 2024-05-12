import express from 'express';
import { initializeFoodPaymentHandler, verifyFoodPaymentHandler } from '../../../controllers/PaystackController/food_handler/personnelPaymentController';
export const foodpersonnelPaymentRouter = express.Router();

foodpersonnelPaymentRouter.post('/initialize-personnel-payment', initializeFoodPaymentHandler);
foodpersonnelPaymentRouter.get('/verify-personnel-payment', verifyFoodPaymentHandler);