import express from 'express';
import { createPersonnel } from '../../../controllers/HealthCareController/PersonnelController/personnelController';
import { personnelCredentials } from '../../../middlewares/multerProfileMiddleware';
export const personnelRouter = express.Router();

personnelRouter.post('/create-personnel', personnelCredentials, createPersonnel);