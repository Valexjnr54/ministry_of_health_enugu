"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePriceListRouter = void 0;
const express_1 = __importDefault(require("express"));
const calculatePriceController_1 = require("../../controllers/OtherController/calculatePriceController");
exports.calculatePriceListRouter = express_1.default.Router();
exports.calculatePriceListRouter.post('/personnel-price', calculatePriceController_1.personnelPriceList);
exports.calculatePriceListRouter.post('/facility-price', calculatePriceController_1.facilityPriceList);
exports.calculatePriceListRouter.get('/confirm-code', calculatePriceController_1.confirmEnforcer);
