import express from 'express';
import { 
    confirmEnforcer,
    facilityPriceList,
    personnelPriceList 
} from '../../controllers/OtherController/calculatePriceController';
export const calculatePriceListRouter = express.Router();

calculatePriceListRouter.post('/personnel-price', personnelPriceList);
calculatePriceListRouter.post('/facility-price', facilityPriceList);
calculatePriceListRouter.get('/confirm-code', confirmEnforcer);