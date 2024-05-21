// src/routes/authRoutes.ts
import express from 'express';
import { authenticateJWT } from '../../../middlewares/authMiddleware/authenticationMiddleware';
import {
    add_facility_price_list,
    add_price_list,
    delete_facility_price_list,
    delete_price_list, 
    update_facility_price_list, 
    update_price_list,
    view_facility_price_lists, 
    view_facility_single_price_list, 
    view_price_lists, 
    view_single_price_list 
} from '../../../controllers/AdminController/PriceList/priceListController';

export const adminPriceListRouter = express.Router();

adminPriceListRouter.post('/add-personnel-pricelist', authenticateJWT, add_price_list);
adminPriceListRouter.get('/view-personnel-pricelist', authenticateJWT, view_price_lists);
adminPriceListRouter.get('/view-single-personnel-pricelist', authenticateJWT, view_single_price_list);
adminPriceListRouter.put('/update-personnel-pricelist', authenticateJWT, update_price_list);
adminPriceListRouter.delete('/delete-personnel-pricelist', authenticateJWT, delete_price_list);
adminPriceListRouter.post('/add-facility-pricelist', authenticateJWT, add_facility_price_list);
adminPriceListRouter.get('/view-facility-pricelist', authenticateJWT, view_facility_price_lists);
adminPriceListRouter.get('/view-single-facility-pricelist', authenticateJWT, view_facility_single_price_list);
adminPriceListRouter.put('/update-facility-pricelist', authenticateJWT, update_facility_price_list);
adminPriceListRouter.delete('/delete-facility-pricelist', authenticateJWT, delete_facility_price_list);