"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facilityPaymentRouter = void 0;
const express_1 = __importDefault(require("express"));
const facilityPaymentController_1 = require("../../controllers/PaystackController/health_care/facilityPaymentController");
const facilityController_1 = require("../../controllers/HealthCareController/FacilityController/facilityController");
exports.facilityPaymentRouter = express_1.default.Router();
exports.facilityPaymentRouter.post('/initialize-facility-payment', facilityPaymentController_1.initializePaymentHandler);
exports.facilityPaymentRouter.get('/verify-facility-payment', facilityPaymentController_1.verifyPaymentHandler);
exports.facilityPaymentRouter.get('/verify-facility-complete-registration-payment', facilityController_1.verifyCompleteRegistrationPaymentHandler);
