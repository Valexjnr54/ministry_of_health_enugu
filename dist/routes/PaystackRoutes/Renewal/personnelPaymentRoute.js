"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personnelRenewalRouter = void 0;
const express_1 = __importDefault(require("express"));
const personnelPaymentController_1 = require("../../../controllers/PaystackController/health_care/personnelPaymentController");
const personnelPaymentController_2 = require("../../../controllers/PaystackController/food_handler/personnelPaymentController");
exports.personnelRenewalRouter = express_1.default.Router();
exports.personnelRenewalRouter.post('/initialize-personnel-payment-renewal', personnelPaymentController_1.initializeRenewalPaymentHandler);
exports.personnelRenewalRouter.get('/verify-personnel-payment-renewal', personnelPaymentController_1.verifyRenewalPaymentHandler);
exports.personnelRenewalRouter.post('/initialize-food-handler-personnel-payment-renewal', personnelPaymentController_2.initializeFoodRenewalPaymentHandler);
exports.personnelRenewalRouter.get('/verify-food-handler-personnel-payment-renewal', personnelPaymentController_2.verifyFoodRenewalPaymentHandler);
