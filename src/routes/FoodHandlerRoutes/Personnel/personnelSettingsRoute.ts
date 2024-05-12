// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { upload } from '../../../middlewares/multerMiddleware';
import { changePassword, changeProfileImage, updateDetails } from '../../../controllers/Food_handlersController/PersonnelController/personnelSettingsController';

export const foodpersonnelSettingsRouter = express.Router();

foodpersonnelSettingsRouter.post('/change-password', authenticateJWT, changePassword);
foodpersonnelSettingsRouter.post('/change-profile-image', authenticateJWT, upload.single('profile_image'), changeProfileImage);
foodpersonnelSettingsRouter.post('/update-profile', authenticateJWT, updateDetails);

// export default authRouter;
