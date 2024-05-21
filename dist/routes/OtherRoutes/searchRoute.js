"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRouter = void 0;
const express_1 = __importDefault(require("express"));
const searchController_1 = require("../../controllers/OtherController/searchController");
exports.searchRouter = express_1.default.Router();
exports.searchRouter.get('/search-personnel', searchController_1.searchPersonnel);
exports.searchRouter.get('/search-facility', searchController_1.searchFacility);
exports.searchRouter.get('/search-food_handler', searchController_1.searchFoodPersonnel);
