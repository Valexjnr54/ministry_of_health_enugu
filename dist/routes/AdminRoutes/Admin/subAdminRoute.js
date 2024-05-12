"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminSubAdminRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const subadminController_1 = require("../../../controllers/AdminController/Admin/subadminController");
const multerProfileMiddleware_1 = require("../../../middlewares/multerProfileMiddleware");
exports.adminSubAdminRouter = express_1.default.Router();
exports.adminSubAdminRouter.post('/create-admin', authenticationMiddleware_1.authenticateJWT, multerProfileMiddleware_1.subAdminCredentials, subadminController_1.registerSubAdmin);
exports.adminSubAdminRouter.get('/all-sub-admin', authenticationMiddleware_1.authenticateJWT, subadminController_1.allAdmin);
