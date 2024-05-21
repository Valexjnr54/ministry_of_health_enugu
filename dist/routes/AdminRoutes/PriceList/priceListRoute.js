"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminPriceListRouter = void 0;
// src/routes/authRoutes.ts
const express_1 = __importDefault(require("express"));
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
const priceListController_1 = require("../../../controllers/AdminController/PriceList/priceListController");
exports.adminPriceListRouter = express_1.default.Router();
exports.adminPriceListRouter.post('/add-personnel-pricelist', authenticationMiddleware_1.authenticateJWT, priceListController_1.add_price_list);
exports.adminPriceListRouter.get('/view-personnel-pricelist', authenticationMiddleware_1.authenticateJWT, priceListController_1.view_price_lists);
exports.adminPriceListRouter.get('/view-single-personnel-pricelist', authenticationMiddleware_1.authenticateJWT, priceListController_1.view_single_price_list);
exports.adminPriceListRouter.put('/update-personnel-pricelist', authenticationMiddleware_1.authenticateJWT, priceListController_1.update_price_list);
exports.adminPriceListRouter.delete('/delete-personnel-pricelist', authenticationMiddleware_1.authenticateJWT, priceListController_1.delete_price_list);
exports.adminPriceListRouter.post('/add-facility-pricelist', authenticationMiddleware_1.authenticateJWT, priceListController_1.add_facility_price_list);
exports.adminPriceListRouter.get('/view-facility-pricelist', authenticationMiddleware_1.authenticateJWT, priceListController_1.view_facility_price_lists);
exports.adminPriceListRouter.get('/view-single-facility-pricelist', authenticationMiddleware_1.authenticateJWT, priceListController_1.view_facility_single_price_list);
exports.adminPriceListRouter.put('/update-facility-pricelist', authenticationMiddleware_1.authenticateJWT, priceListController_1.update_facility_price_list);
exports.adminPriceListRouter.delete('/delete-facility-pricelist', authenticationMiddleware_1.authenticateJWT, priceListController_1.delete_facility_price_list);
