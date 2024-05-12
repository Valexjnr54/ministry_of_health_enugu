"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodfacilityPaymentRouter = void 0;
const express_1 = __importDefault(require("express"));
const facilityPaymentController_1 = require("../../../controllers/PaystackController/food_handler/facilityPaymentController");
exports.foodfacilityPaymentRouter = express_1.default.Router();
exports.foodfacilityPaymentRouter.post('/initialize-facility-payment', facilityPaymentController_1.initializePaymentHandler);
exports.foodfacilityPaymentRouter.get('/verify-facility-payment', facilityPaymentController_1.verifyPaymentHandler);
