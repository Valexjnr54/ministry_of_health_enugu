"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodpersonnelAuthRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const personnelAuthController_1 = require("../../../controllers/Food_handlersController/AuthController/personnelAuthController");
exports.foodpersonnelAuthRouter = express_1.default.Router();
exports.foodpersonnelAuthRouter.post('/food-handler-login', personnelAuthController_1.loginPersonnel);
// Secure the logout route with authentication middleware
exports.foodpersonnelAuthRouter.post('/food-handler-logout', authenticationMiddleware_1.authenticateJWT, personnelAuthController_1.logoutPersonnel);
exports.foodpersonnelAuthRouter.get('/food-handler-profile', authenticationMiddleware_1.authenticateJWT, personnelAuthController_1.profile);
// export default authRouter;
