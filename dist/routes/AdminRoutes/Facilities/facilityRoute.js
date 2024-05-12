"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminFacilityRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const adminFacillityController_1 = require("../../../controllers/AdminController/facility/adminFacillityController");
const adminFoodFacilityController_1 = require("../../../controllers/AdminController/food_facility/adminFoodFacilityController");
exports.adminFacilityRouter = express_1.default.Router();
exports.adminFacilityRouter.get('/all-facility', authenticationMiddleware_1.authenticateJWT, adminFacillityController_1.allFacility);
exports.adminFacilityRouter.get(`/all-:facility_type(\\w+)-facility`, authenticationMiddleware_1.authenticateJWT, adminFacillityController_1.allFacilityByType);
exports.adminFacilityRouter.get(`/count-:facility_type(\\w+)-facility`, authenticationMiddleware_1.authenticateJWT, adminFacillityController_1.countFacilityByType);
exports.adminFacilityRouter.get('/count-facility', authenticationMiddleware_1.authenticateJWT, adminFacillityController_1.countFacility);
exports.adminFacilityRouter.get('/all-facility-food-handler', authenticationMiddleware_1.authenticateJWT, adminFoodFacilityController_1.allFoodFacility);
exports.adminFacilityRouter.get('/count-facility-food-handler', authenticationMiddleware_1.authenticateJWT, adminFoodFacilityController_1.countFoodFacility);
exports.adminFacilityRouter.get('/facilities-by-lga', authenticationMiddleware_1.authenticateJWT, adminFacillityController_1.facilitiesByLGA);
// export default authRouter;
