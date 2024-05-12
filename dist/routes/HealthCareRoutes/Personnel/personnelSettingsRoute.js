"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personnelSettingsRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const multerMiddleware_1 = require("../../../middlewares/multerMiddleware");
const personnelSettingsController_1 = require("../../../controllers/HealthCareController/PersonnelController/personnelSettingsController");
exports.personnelSettingsRouter = express_1.default.Router();
exports.personnelSettingsRouter.post('/change-password', authenticationMiddleware_1.authenticateJWT, personnelSettingsController_1.changePassword);
exports.personnelSettingsRouter.post('/change-profile-image', authenticationMiddleware_1.authenticateJWT, multerMiddleware_1.upload.single('profile_image'), personnelSettingsController_1.changeProfileImage);
exports.personnelSettingsRouter.post('/update-profile', authenticationMiddleware_1.authenticateJWT, personnelSettingsController_1.updateDetails);
// export default authRouter;
