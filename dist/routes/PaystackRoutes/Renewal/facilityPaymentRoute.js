"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facilityRenewalRouter = void 0;
const express_1 = __importDefault(require("express"));
const facilityController_1 = require("../../../controllers/HealthCareController/FacilityController/facilityController");
const facilityController_2 = require("../../../controllers/Food_handlersController/FacilityController/facilityController");
exports.facilityRenewalRouter = express_1.default.Router();
exports.facilityRenewalRouter.post('/initialize-facility-payment-renewal', facilityController_1.initializeRenewalPaymentHandler);
exports.facilityRenewalRouter.get('/verify-facility-payment-renewal', facilityController_1.verifyRenewalPaymentHandler);
exports.facilityRenewalRouter.post('/initialize-food-vendor-facility-payment-renewal', facilityController_2.initializeFoodRenewalPaymentHandler);
exports.facilityRenewalRouter.get('/verify-food-vendor-facility-payment-renewal', facilityController_2.verifyFoodRenewalPaymentHandler);
