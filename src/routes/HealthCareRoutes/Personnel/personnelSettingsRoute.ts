// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { upload } from '../../../middlewares/multerMiddleware';
import { changePassword, changeProfileImage, updateDetails } from '../../../controllers/HealthCareController/PersonnelController/personnelSettingsController';

export const personnelSettingsRouter = express.Router();

personnelSettingsRouter.post('/change-password', authenticateJWT, changePassword);
personnelSettingsRouter.post('/change-profile-image', authenticateJWT, upload.single('profile_image'), changeProfileImage);
personnelSettingsRouter.post('/update-profile', authenticateJWT, updateDetails);

// export default authRouter;
