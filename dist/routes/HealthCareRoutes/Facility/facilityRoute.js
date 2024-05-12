"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facilityRouter = void 0;
const express_1 = __importDefault(require("express"));
const facilityController_1 = require("../../../controllers/HealthCareController/FacilityController/facilityController");
const multerProfileMiddleware_1 = require("../../../middlewares/multerProfileMiddleware");
exports.facilityRouter = express_1.default.Router();
exports.facilityRouter.post('/create-facility', multerProfileMiddleware_1.facilityCredentials, facilityController_1.createFacility);
exports.facilityRouter.get('/inspection-result', facilityController_1.inspectionResult);
