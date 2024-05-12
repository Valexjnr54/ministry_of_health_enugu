import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import { facilities, facilitiesByInspectorID, facilitiesByLGA, facility, inspectionItems, inspectionReview, monitor } from '../../../controllers/InspectorController/Facility/inspectorFacilityController';

export const inspectorFacilityRouter = express.Router();

inspectorFacilityRouter.get('/facilities', authenticateJWT, facilities);
inspectorFacilityRouter.get('/facilities-by-lga', authenticateJWT, facilitiesByLGA);
inspectorFacilityRouter.get('/facilities-by-inspector_id', authenticateJWT, facilitiesByInspectorID);
inspectorFacilityRouter.get('/facility', authenticateJWT, facility);
inspectorFacilityRouter.get('/inspection-items', authenticateJWT, inspectionItems);
inspectorFacilityRouter.post('/submit-inspection-review', authenticateJWT, inspectionReview);
inspectorFacilityRouter.get('/monitor', monitor);

