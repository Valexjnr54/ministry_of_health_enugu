// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { loginFacility, logoutfacility, profile } from '../../../controllers/HealthCareController/AuthController/facilityAuthController';

export const facilityAuthRouter = express.Router();

facilityAuthRouter.post('/facility-login', loginFacility);
// Secure the logout route with authentication middleware
facilityAuthRouter.post('/facility-logout', authenticateJWT, logoutfacility);
facilityAuthRouter.get('/facility-profile', authenticateJWT, profile);

// export default authRouter;
