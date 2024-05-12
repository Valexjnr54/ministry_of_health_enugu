// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { loginPersonnel, logoutPersonnel, profile } from '../../../controllers/Food_handlersController/AuthController/personnelAuthController';

export const foodpersonnelAuthRouter = express.Router();

foodpersonnelAuthRouter.post('/food-handler-login', loginPersonnel);
// Secure the logout route with authentication middleware
foodpersonnelAuthRouter.post('/food-handler-logout', authenticateJWT, logoutPersonnel);
foodpersonnelAuthRouter.get('/food-handler-profile', authenticateJWT, profile);

// export default authRouter;
