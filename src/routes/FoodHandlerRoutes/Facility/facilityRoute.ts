import express from 'express';
import { createFacility } from '../../../controllers/Food_handlersController/FacilityController/facilityController';
import { foodfacilityCredentials } from '../../../middlewares/multerProfileMiddleware';
export const foodfacilityRouter = express.Router();

foodfacilityRouter.post('/create-food-facility', foodfacilityCredentials, createFacility);