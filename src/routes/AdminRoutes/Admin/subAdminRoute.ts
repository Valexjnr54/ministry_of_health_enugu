// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { allAdmin, registerSubAdmin } from '../../../controllers/AdminController/Admin/subadminController';
import { subAdminCredentials } from '../../../middlewares/multerProfileMiddleware';

export const adminSubAdminRouter = express.Router();

adminSubAdminRouter.post('/create-admin', authenticateJWT, subAdminCredentials, registerSubAdmin);
adminSubAdminRouter.get('/all-sub-admin', authenticateJWT, allAdmin);