"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodfacilityRouter = void 0;
const express_1 = __importDefault(require("express"));
const facilityController_1 = require("../../../controllers/Food_handlersController/FacilityController/facilityController");
const multerProfileMiddleware_1 = require("../../../middlewares/multerProfileMiddleware");
exports.foodfacilityRouter = express_1.default.Router();
exports.foodfacilityRouter.post('/create-food-facility', multerProfileMiddleware_1.foodfacilityCredentials, facilityController_1.createFacility);
