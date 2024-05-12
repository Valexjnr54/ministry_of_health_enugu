"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inspectorSettingsRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const multerMiddleware_1 = require("../../../middlewares/multerMiddleware");
const inspectorSettingsController_1 = require("../../../controllers/InspectorController/Settings/inspectorSettingsController");
exports.inspectorSettingsRouter = express_1.default.Router();
exports.inspectorSettingsRouter.post('/change-password', authenticationMiddleware_1.authenticateJWT, inspectorSettingsController_1.changePassword);
exports.inspectorSettingsRouter.post('/change-profile-image', authenticationMiddleware_1.authenticateJWT, multerMiddleware_1.upload.single('profile_image'), inspectorSettingsController_1.changeProfileImage);
exports.inspectorSettingsRouter.post('/update-profile', authenticationMiddleware_1.authenticateJWT, inspectorSettingsController_1.updateDetails);
// export default authRouter;
