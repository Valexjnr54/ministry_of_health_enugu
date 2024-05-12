"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordRouter = void 0;
const express_1 = __importDefault(require("express"));
const resetController_1 = require("../../controllers/ResetPasswordController/resetController");
exports.resetPasswordRouter = express_1.default.Router();
exports.resetPasswordRouter.post('/forgotten-password', resetController_1.forgottenPassword);
exports.resetPasswordRouter.put('/reset-password', resetController_1.resetPassword);
