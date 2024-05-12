"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodpersonnelSettingsRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const multerMiddleware_1 = require("../../../middlewares/multerMiddleware");
const personnelSettingsController_1 = require("../../../controllers/Food_handlersController/PersonnelController/personnelSettingsController");
exports.foodpersonnelSettingsRouter = express_1.default.Router();
exports.foodpersonnelSettingsRouter.post('/change-password', authenticationMiddleware_1.authenticateJWT, personnelSettingsController_1.changePassword);
exports.foodpersonnelSettingsRouter.post('/change-profile-image', authenticationMiddleware_1.authenticateJWT, multerMiddleware_1.upload.single('profile_image'), personnelSettingsController_1.changeProfileImage);
exports.foodpersonnelSettingsRouter.post('/update-profile', authenticationMiddleware_1.authenticateJWT, personnelSettingsController_1.updateDetails);
// export default authRouter;
