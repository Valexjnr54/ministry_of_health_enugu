import express from 'express';
import { initializePaymentHandler, verifyPaymentHandler } from '../../controllers/PaystackController/health_care/personnelPaymentController';
export const personnelPaymentRouter = express.Router();

personnelPaymentRouter.post('/initialize-personnel-payment', initializePaymentHandler);
personnelPaymentRouter.get('/verify-personnel-payment', verifyPaymentHandler);