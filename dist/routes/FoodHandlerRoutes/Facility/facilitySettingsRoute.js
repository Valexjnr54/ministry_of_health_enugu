"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodfacilitySettingsRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const facilitySettingsController_1 = require("../../../controllers/Food_handlersController/FacilityController/facilitySettingsController");
exports.foodfacilitySettingsRouter = express_1.default.Router();
exports.foodfacilitySettingsRouter.post('/change-password', authenticationMiddleware_1.authenticateJWT, facilitySettingsController_1.changePassword);
exports.foodfacilitySettingsRouter.post('/update-profile', authenticationMiddleware_1.authenticateJWT, facilitySettingsController_1.updateDetails);
exports.foodfacilitySettingsRouter.post('/add-personnel', authenticationMiddleware_1.authenticateJWT, facilitySettingsController_1.addPersonnel);
exports.foodfacilitySettingsRouter.post('/remove-personnel', authenticationMiddleware_1.authenticateJWT, facilitySettingsController_1.removePersonnel);
// export default authRouter;
