// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { allFacility, allFacilityByType, countFacility, countFacilityByType, facilitiesByLGA } from '../../../controllers/AdminController/facility/adminFacillityController';
import { allFoodFacility, countFoodFacility } from '../../../controllers/AdminController/food_facility/adminFoodFacilityController';

export const adminFacilityRouter = express.Router();

adminFacilityRouter.get('/all-facility', authenticateJWT, allFacility);
adminFacilityRouter.get(`/all-:facility_type(\\w+)-facility`, authenticateJWT, allFacilityByType);
adminFacilityRouter.get(`/count-:facility_type(\\w+)-facility`, authenticateJWT, countFacilityByType);
adminFacilityRouter.get('/count-facility', authenticateJWT, countFacility);

adminFacilityRouter.get('/all-facility-food-handler', authenticateJWT, allFoodFacility);
adminFacilityRouter.get('/count-facility-food-handler', authenticateJWT, countFoodFacility);
adminFacilityRouter.get('/facilities-by-lga', authenticateJWT, facilitiesByLGA);
// export default authRouter;