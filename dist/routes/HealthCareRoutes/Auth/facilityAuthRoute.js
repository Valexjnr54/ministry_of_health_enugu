"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facilityAuthRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const facilityAuthController_1 = require("../../../controllers/HealthCareController/AuthController/facilityAuthController");
exports.facilityAuthRouter = express_1.default.Router();
exports.facilityAuthRouter.post('/facility-login', facilityAuthController_1.loginFacility);
// Secure the logout route with authentication middleware
exports.facilityAuthRouter.post('/facility-logout', authenticationMiddleware_1.authenticateJWT, facilityAuthController_1.logoutfacility);
exports.facilityAuthRouter.get('/facility-profile', authenticationMiddleware_1.authenticateJWT, facilityAuthController_1.profile);
// export default authRouter;
