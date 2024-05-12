"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminStateRouter = void 0;
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const stateController_1 = require("../../../controllers/AdminController/State/stateController");
const lgaController_1 = require("../../../controllers/AdminController/State/lgaController");
exports.adminStateRouter = express_1.default.Router();
exports.adminStateRouter.post('/create-state', authenticationMiddleware_1.authenticateJWT, stateController_1.createState);
exports.adminStateRouter.get('/all-state', stateController_1.allState);
exports.adminStateRouter.post('/create-lga', authenticationMiddleware_1.authenticateJWT, lgaController_1.createLga);
exports.adminStateRouter.get('/all-lga', lgaController_1.allLga);
exports.adminStateRouter.get('/lga', lgaController_1.singleLga);
