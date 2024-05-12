// src/routes/authRoutes.ts
import express from 'express';
import { upload } from '../../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { loginAdmin, logoutAdmin, profile, registerAdmin } from '../../../controllers/AdminController/Auth/adminAuthController';

export const adminAuthRouter = express.Router();

adminAuthRouter.post('/admin-register', upload.single('profile_image'), registerAdmin);
adminAuthRouter.post('/admin-login', loginAdmin);
// Secure the logout route with authentication middleware
adminAuthRouter.post('/admin-logout', authenticateJWT, logoutAdmin);
adminAuthRouter.get('/admin-profile', authenticateJWT, profile);

// export default authRouter;
