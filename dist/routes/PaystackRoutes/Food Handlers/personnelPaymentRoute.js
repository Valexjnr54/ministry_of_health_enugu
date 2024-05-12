"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodpersonnelPaymentRouter = void 0;
const express_1 = __importDefault(require("express"));
const personnelPaymentController_1 = require("../../../controllers/PaystackController/food_handler/personnelPaymentController");
exports.foodpersonnelPaymentRouter = express_1.default.Router();
exports.foodpersonnelPaymentRouter.post('/initialize-personnel-payment', personnelPaymentController_1.initializeFoodPaymentHandler);
exports.foodpersonnelPaymentRouter.get('/verify-personnel-payment', personnelPaymentController_1.verifyFoodPaymentHandler);
