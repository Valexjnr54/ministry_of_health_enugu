// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { addPersonnel, changePassword, removePersonnel, updateDetails, updateDocuments } from '../../../controllers/HealthCareController/FacilityController/facilitySettingsController';
import { facilityCredentials } from '../../../middlewares/multerProfileMiddleware';

export const facilitySettingsRouter = express.Router();

facilitySettingsRouter.post('/change-password', authenticateJWT, changePassword);
facilitySettingsRouter.post('/update-profile', authenticateJWT, updateDetails);
facilitySettingsRouter.post('/update-documents', authenticateJWT, facilityCredentials, updateDocuments);
facilitySettingsRouter.post('/add-personnel', authenticateJWT, addPersonnel);
facilitySettingsRouter.post('/remove-personnel', authenticateJWT, removePersonnel);
// export default authRouter;
