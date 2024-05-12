"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminApproveRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const approvePersonnelController_1 = require("../../../controllers/AdminController/Approval/approvePersonnelController");
exports.adminApproveRouter = express_1.default.Router();
exports.adminApproveRouter.get('/approve-personnel', authenticationMiddleware_1.authenticateJWT, approvePersonnelController_1.approvePersonnel);
exports.adminApproveRouter.get('/approve-nin', authenticationMiddleware_1.authenticateJWT, approvePersonnelController_1.approvePersonnelNin);
exports.adminApproveRouter.get('/approve-cac', authenticationMiddleware_1.authenticateJWT, approvePersonnelController_1.approveCac);
exports.adminApproveRouter.get('/approve-practice_id', authenticationMiddleware_1.authenticateJWT, approvePersonnelController_1.approvePersonnelPracticeId);
exports.adminApproveRouter.get('/approve-food-handler', authenticationMiddleware_1.authenticateJWT, approvePersonnelController_1.approveFoodHandler);
exports.adminApproveRouter.get('/approve-food-handler-nin', authenticationMiddleware_1.authenticateJWT, approvePersonnelController_1.approveFoodHandlerNin);
// export default authRouter;
