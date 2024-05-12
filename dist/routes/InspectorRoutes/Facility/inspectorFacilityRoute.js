"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inspectorFacilityRouter = void 0;
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const inspectorFacilityController_1 = require("../../../controllers/InspectorController/Facility/inspectorFacilityController");
exports.inspectorFacilityRouter = express_1.default.Router();
exports.inspectorFacilityRouter.get('/facilities', authenticationMiddleware_1.authenticateJWT, inspectorFacilityController_1.facilities);
exports.inspectorFacilityRouter.get('/facilities-by-lga', authenticationMiddleware_1.authenticateJWT, inspectorFacilityController_1.facilitiesByLGA);
exports.inspectorFacilityRouter.get('/facilities-by-inspector_id', authenticationMiddleware_1.authenticateJWT, inspectorFacilityController_1.facilitiesByInspectorID);
exports.inspectorFacilityRouter.get('/facility', authenticationMiddleware_1.authenticateJWT, inspectorFacilityController_1.facility);
exports.inspectorFacilityRouter.get('/inspection-items', authenticationMiddleware_1.authenticateJWT, inspectorFacilityController_1.inspectionItems);
exports.inspectorFacilityRouter.post('/submit-inspection-review', authenticationMiddleware_1.authenticateJWT, inspectorFacilityController_1.inspectionReview);
exports.inspectorFacilityRouter.get('/monitor', inspectorFacilityController_1.monitor);
