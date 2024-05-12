// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { loginPersonnel, logoutPersonnel, profile } from '../../../controllers/HealthCareController/AuthController/personnelAuthController';

export const personnelAuthRouter = express.Router();

personnelAuthRouter.post('/personnel-login', loginPersonnel);
// Secure the logout route with authentication middleware
personnelAuthRouter.post('/personnel-logout', authenticateJWT, logoutPersonnel);
personnelAuthRouter.get('/personnel-profile', authenticateJWT, profile);

// export default authRouter;
