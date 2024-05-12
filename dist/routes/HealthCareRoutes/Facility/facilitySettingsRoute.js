"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facilitySettingsRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const facilitySettingsController_1 = require("../../../controllers/HealthCareController/FacilityController/facilitySettingsController");
const multerProfileMiddleware_1 = require("../../../middlewares/multerProfileMiddleware");
exports.facilitySettingsRouter = express_1.default.Router();
exports.facilitySettingsRouter.post('/change-password', authenticationMiddleware_1.authenticateJWT, facilitySettingsController_1.changePassword);
exports.facilitySettingsRouter.post('/update-profile', authenticationMiddleware_1.authenticateJWT, facilitySettingsController_1.updateDetails);
exports.facilitySettingsRouter.post('/update-documents', authenticationMiddleware_1.authenticateJWT, multerProfileMiddleware_1.facilityCredentials, facilitySettingsController_1.updateDocuments);
exports.facilitySettingsRouter.post('/add-personnel', authenticationMiddleware_1.authenticateJWT, facilitySettingsController_1.addPersonnel);
exports.facilitySettingsRouter.post('/remove-personnel', authenticationMiddleware_1.authenticateJWT, facilitySettingsController_1.removePersonnel);
// export default authRouter;
