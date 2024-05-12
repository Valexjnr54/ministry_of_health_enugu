// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { upload } from '../../../middlewares/multerMiddleware';
import { changePassword, changeProfileImage, updateDetails } from '../../../controllers/InspectorController/Settings/inspectorSettingsController';

export const inspectorSettingsRouter = express.Router();

inspectorSettingsRouter.post('/change-password', authenticateJWT, changePassword);
inspectorSettingsRouter.post('/change-profile-image', authenticateJWT, upload.single('profile_image'), changeProfileImage);
inspectorSettingsRouter.post('/update-profile', authenticateJWT, updateDetails);

// export default authRouter;
