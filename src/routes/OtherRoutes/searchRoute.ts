import express from 'express';
import { searchFacility, searchFoodPersonnel, searchPersonnel } from '../../controllers/OtherController/searchController';
export const searchRouter = express.Router();

searchRouter.get('/search-personnel', searchPersonnel)
searchRouter.get('/search-facility', searchFacility)
searchRouter.get('/search-food_handler', searchFoodPersonnel)