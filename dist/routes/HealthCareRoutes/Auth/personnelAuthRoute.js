"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personnelAuthRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const personnelAuthController_1 = require("../../../controllers/HealthCareController/AuthController/personnelAuthController");
exports.personnelAuthRouter = express_1.default.Router();
exports.personnelAuthRouter.post('/personnel-login', personnelAuthController_1.loginPersonnel);
// Secure the logout route with authentication middleware
exports.personnelAuthRouter.post('/personnel-logout', authenticationMiddleware_1.authenticateJWT, personnelAuthController_1.logoutPersonnel);
exports.personnelAuthRouter.get('/personnel-profile', authenticationMiddleware_1.authenticateJWT, personnelAuthController_1.profile);
// export default authRouter;
