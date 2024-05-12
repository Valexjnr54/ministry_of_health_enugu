// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { loginFacility, logoutfacility, profile } from '../../../controllers/Food_handlersController/AuthController/facilityAuthController';

export const foodfacilityAuthRouter = express.Router();

foodfacilityAuthRouter.post('/facility-login', loginFacility);
// Secure the logout route with authentication middleware
foodfacilityAuthRouter.post('/facility-logout', authenticateJWT, logoutfacility);
foodfacilityAuthRouter.get('/facility-profile', authenticateJWT, profile);

// export default authRouter;
