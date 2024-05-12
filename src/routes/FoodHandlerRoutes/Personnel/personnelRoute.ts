import express from 'express';
import { createPersonnel } from '../../../controllers/Food_handlersController/PersonnelController/personnelController';
import { foodpersonnelCredentials } from '../../../middlewares/multerProfileMiddleware';
export const foodpersonnelRouter = express.Router();

foodpersonnelRouter.post('/create-personnel', foodpersonnelCredentials, createPersonnel);