import express from 'express';
import { createFacility, inspectionResult } from '../../../controllers/HealthCareController/FacilityController/facilityController';
import { facilityCredentials } from '../../../middlewares/multerProfileMiddleware';
export const facilityRouter = express.Router();

facilityRouter.post('/create-facility', facilityCredentials, createFacility);
facilityRouter.get('/inspection-result', inspectionResult);