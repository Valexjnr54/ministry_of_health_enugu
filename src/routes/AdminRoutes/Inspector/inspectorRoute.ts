import express from 'express';
import { allInspector, assignInspector, createInspector, deleteInspector, singleInspector } from '../../../controllers/AdminController/Inspector/inspectorController';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { allEnforcer, createEnforcer, deleteEnforcer, singleEnforcer } from '../../../controllers/AdminController/Enforcer/enforcerController';

export const adminInspectorRouter = express.Router();
adminInspectorRouter.post('/create-inspector', authenticateJWT, createInspector);
adminInspectorRouter.get('/all-inspectors', authenticateJWT,allInspector);
adminInspectorRouter.get('/single-inspector', authenticateJWT,singleInspector);
adminInspectorRouter.delete('/delete-inspector', authenticateJWT,deleteInspector);
adminInspectorRouter.put('/assign-inspector', authenticateJWT,assignInspector);

adminInspectorRouter.post('/create-enforcer', authenticateJWT, createEnforcer);
adminInspectorRouter.get('/all-enforcers', authenticateJWT,allEnforcer);
adminInspectorRouter.get('/single-enforcer', authenticateJWT,singleEnforcer);
adminInspectorRouter.delete('/delete-enforcer', authenticateJWT,deleteEnforcer);