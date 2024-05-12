"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inspectorAuthRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const inspectorAuthController_1 = require("../../../controllers/InspectorController/Auth/inspectorAuthController");
exports.inspectorAuthRouter = express_1.default.Router();
exports.inspectorAuthRouter.post('/inspector-login', inspectorAuthController_1.loginInspector);
// Secure the logout route with authentication middleware
exports.inspectorAuthRouter.post('/inspector-logout', authenticationMiddleware_1.authenticateJWT, inspectorAuthController_1.logoutinspector);
exports.inspectorAuthRouter.get('/inspector-profile', authenticationMiddleware_1.authenticateJWT, inspectorAuthController_1.profile);
// export default authRouter;
