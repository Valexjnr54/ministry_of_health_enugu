// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { approveCac, approveFoodHandler, approveFoodHandlerNin, approvePersonnel, approvePersonnelNin, approvePersonnelPracticeId } from '../../../controllers/AdminController/Approval/approvePersonnelController';

export const adminApproveRouter = express.Router();

adminApproveRouter.get('/approve-personnel', authenticateJWT, approvePersonnel);
adminApproveRouter.get('/approve-nin', authenticateJWT, approvePersonnelNin);
adminApproveRouter.get('/approve-cac', authenticateJWT, approveCac);
adminApproveRouter.get('/approve-practice_id', authenticateJWT, approvePersonnelPracticeId);
adminApproveRouter.get('/approve-food-handler', authenticateJWT, approveFoodHandler);
adminApproveRouter.get('/approve-food-handler-nin', authenticateJWT, approveFoodHandlerNin);

// export default authRouter;
