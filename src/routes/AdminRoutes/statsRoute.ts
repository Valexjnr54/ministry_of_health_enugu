import express from 'express';
import { counts } from '../../controllers/AdminController/Statistics/statController';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';

export const adminStatsRouter = express.Router();
adminStatsRouter.get('/stats', counts);