"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminUserRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const userPersonnelController_1 = require("../../../controllers/AdminController/Users/userPersonnelController");
const userFoodPersonnelController_1 = require("../../../controllers/AdminController/food_Users/userFoodPersonnelController");
exports.adminUserRouter = express_1.default.Router();
exports.adminUserRouter.get('/all-health-personnel', authenticationMiddleware_1.authenticateJWT, userPersonnelController_1.allHealthPersonnel);
exports.adminUserRouter.get(`/all-:type(\\w+)-health-personnel`, authenticationMiddleware_1.authenticateJWT, userPersonnelController_1.allHealthPersonnelByType);
exports.adminUserRouter.get(`/count-:type(\\w+)-health-personnel`, authenticationMiddleware_1.authenticateJWT, userPersonnelController_1.countHealthPersonnelByType);
exports.adminUserRouter.get('/count-health-personnel', authenticationMiddleware_1.authenticateJWT, userPersonnelController_1.countHealthPersonnel);
exports.adminUserRouter.get('/all-food-personnel', authenticationMiddleware_1.authenticateJWT, userFoodPersonnelController_1.allFoodPersonnel);
exports.adminUserRouter.get('/count-food-personnel', authenticationMiddleware_1.authenticateJWT, userFoodPersonnelController_1.countFoodPersonnel);
// export default authRouter;
