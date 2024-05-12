"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personnelRouter = void 0;
const express_1 = __importDefault(require("express"));
const personnelController_1 = require("../../../controllers/HealthCareController/PersonnelController/personnelController");
const multerProfileMiddleware_1 = require("../../../middlewares/multerProfileMiddleware");
exports.personnelRouter = express_1.default.Router();
exports.personnelRouter.post('/create-personnel', multerProfileMiddleware_1.personnelCredentials, personnelController_1.createPersonnel);
