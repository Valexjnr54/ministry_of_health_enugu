"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodpersonnelRouter = void 0;
const express_1 = __importDefault(require("express"));
const personnelController_1 = require("../../../controllers/Food_handlersController/PersonnelController/personnelController");
const multerProfileMiddleware_1 = require("../../../middlewares/multerProfileMiddleware");
exports.foodpersonnelRouter = express_1.default.Router();
exports.foodpersonnelRouter.post('/create-personnel', multerProfileMiddleware_1.foodpersonnelCredentials, personnelController_1.createPersonnel);
