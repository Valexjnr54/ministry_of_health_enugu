"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminStatsRouter = void 0;
const express_1 = __importDefault(require("express"));
const statController_1 = require("../../controllers/AdminController/Statistics/statController");
exports.adminStatsRouter = express_1.default.Router();
exports.adminStatsRouter.get('/stats', statController_1.counts);
