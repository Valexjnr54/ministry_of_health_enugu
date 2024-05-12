// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { allHealthPersonnel, allHealthPersonnelByType, countHealthPersonnel, countHealthPersonnelByType } from '../../../controllers/AdminController/Users/userPersonnelController';
import { allFoodPersonnel, countFoodPersonnel } from '../../../controllers/AdminController/food_Users/userFoodPersonnelController';

export const adminUserRouter = express.Router();

adminUserRouter.get('/all-health-personnel', authenticateJWT, allHealthPersonnel);
adminUserRouter.get(`/all-:type(\\w+)-health-personnel`, authenticateJWT, allHealthPersonnelByType);
adminUserRouter.get(`/count-:type(\\w+)-health-personnel`, authenticateJWT, countHealthPersonnelByType);
adminUserRouter.get('/count-health-personnel', authenticateJWT, countHealthPersonnel);

adminUserRouter.get('/all-food-personnel', authenticateJWT, allFoodPersonnel);
adminUserRouter.get('/count-food-personnel', authenticateJWT, countFoodPersonnel);

// export default authRouter;