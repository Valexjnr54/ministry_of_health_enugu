"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personnelPaymentRouter = void 0;
const express_1 = __importDefault(require("express"));
const personnelPaymentController_1 = require("../../controllers/PaystackController/health_care/personnelPaymentController");
exports.personnelPaymentRouter = express_1.default.Router();
exports.personnelPaymentRouter.post('/initialize-personnel-payment', personnelPaymentController_1.initializePaymentHandler);
exports.personnelPaymentRouter.get('/verify-personnel-payment', personnelPaymentController_1.verifyPaymentHandler);
