// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { loginInspector, logoutinspector, profile } from '../../../controllers/InspectorController/Auth/inspectorAuthController';

export const inspectorAuthRouter = express.Router();

inspectorAuthRouter.post('/inspector-login', loginInspector);
// Secure the logout route with authentication middleware
inspectorAuthRouter.post('/inspector-logout', authenticateJWT, logoutinspector);
inspectorAuthRouter.get('/inspector-profile', authenticateJWT, profile);

// export default authRouter;
