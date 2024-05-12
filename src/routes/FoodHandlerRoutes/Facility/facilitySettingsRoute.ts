// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { addPersonnel, changePassword, removePersonnel, updateDetails } from '../../../controllers/Food_handlersController/FacilityController/facilitySettingsController';

export const foodfacilitySettingsRouter = express.Router();

foodfacilitySettingsRouter.post('/change-password', authenticateJWT, changePassword);
foodfacilitySettingsRouter.post('/update-profile', authenticateJWT, updateDetails);
foodfacilitySettingsRouter.post('/add-personnel', authenticateJWT, addPersonnel);
foodfacilitySettingsRouter.post('/remove-personnel', authenticateJWT, removePersonnel);
// export default authRouter;
