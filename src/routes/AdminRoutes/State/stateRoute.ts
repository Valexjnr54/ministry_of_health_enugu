import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { allState, createState } from '../../../controllers/AdminController/State/stateController';
import { allLga, createLga, singleLga } from '../../../controllers/AdminController/State/lgaController';

export const adminStateRouter = express.Router();
adminStateRouter.post('/create-state', authenticateJWT, createState);
adminStateRouter.get('/all-state', allState);
adminStateRouter.post('/create-lga', authenticateJWT, createLga);
adminStateRouter.get('/all-lga', allLga);
adminStateRouter.get('/lga', singleLga);