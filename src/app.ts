// src/app.ts
import express, { Request, Response } from 'express';
import rateLimiter from './middlewares/rateLimitMiddleware';
import cors from 'cors';
import { Config } from './config/config';
import bodyParser from 'body-parser';
import { personnelPaymentRouter } from './routes/PaystackRoutes/personnelPaymentRoute';
import { personnelRouter } from './routes/HealthCareRoutes/Personnel/personnelRoute';
import { verificationRouter } from './routes/OtherRoutes/verificationRoute';
import morgan from "morgan";
import { adminAuthRouter } from './routes/AdminRoutes/Auth/adminAuthRoutes';
import { adminApproveRouter } from './routes/AdminRoutes/Approve/approvePersonnelRoute';
import { adminUserRouter } from './routes/AdminRoutes/Users/userPersonnelRoute';
import { facilityPaymentRouter } from './routes/PaystackRoutes/facilityPaymentRoute';
import { facilityRouter } from './routes/HealthCareRoutes/Facility/facilityRoute';
import { facilityRenewalRouter } from './routes/PaystackRoutes/Renewal/facilityPaymentRoute';
import { personnelRenewalRouter } from './routes/PaystackRoutes/Renewal/personnelPaymentRoute';
import { adminFacilityRouter } from './routes/AdminRoutes/Facilities/facilityRoute';
import { adminStateRouter } from './routes/AdminRoutes/State/stateRoute';
import { adminStatsRouter } from './routes/AdminRoutes/statsRoute';
import { facilityAuthRouter } from './routes/HealthCareRoutes/Auth/facilityAuthRoute';
import { personnelAuthRouter } from './routes/HealthCareRoutes/Auth/personnelAuthRoute';
import { adminInspectorRouter } from './routes/AdminRoutes/Inspector/inspectorRoute';
import { inspectorAuthRouter } from './routes/InspectorRoutes/Auth/inspectorAuthRoute';
import { inspectorSettingsRouter } from './routes/InspectorRoutes/Settings/inspectorSettingsRoute';
import { inspectorFacilityRouter } from './routes/InspectorRoutes/Facility/inspectorFacilityRoute';
import { personnelSettingsRouter } from './routes/HealthCareRoutes/Personnel/personnelSettingsRoute';
import { facilitySettingsRouter } from './routes/HealthCareRoutes/Facility/facilitySettingsRoute';
import { foodpersonnelRouter } from './routes/FoodHandlerRoutes/Personnel/personnelRoute';
import { foodpersonnelSettingsRouter } from './routes/FoodHandlerRoutes/Personnel/personnelSettingsRoute';
import { foodfacilityRouter } from './routes/FoodHandlerRoutes/Facility/facilityRoute';
import { foodfacilitySettingsRouter } from './routes/FoodHandlerRoutes/Facility/facilitySettingsRoute';
import { foodfacilityAuthRouter } from './routes/FoodHandlerRoutes/Auth/facilityAuthRoute';
import { foodpersonnelPaymentRouter } from './routes/PaystackRoutes/Food Handlers/personnelPaymentRoute';
import { foodfacilityPaymentRouter } from './routes/PaystackRoutes/Food Handlers/facilityPaymentRoute';
import { validateEmail } from './services/validateEmail';
import { resetPasswordRouter } from './routes/ResetPasswordRoutes/resetPasswordRoute';
import { foodpersonnelAuthRouter } from './routes/FoodHandlerRoutes/Auth/personnelAuthRoute';
import { adminSubAdminRouter } from './routes/AdminRoutes/Admin/subAdminRoute';
import { adminPriceListRouter } from './routes/AdminRoutes/PriceList/priceListRoute';
import { calculatePriceListRouter } from './routes/OtherRoutes/calculatePriceList';
import { searchRouter } from './routes/OtherRoutes/searchRoute';

const app = express();
app.use(morgan("combined"));

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(rateLimiter);

app.use(cors({ origin: Config.corsAllowedOrigin }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const route = "/api/v1"

// Configure your routes here

app.get('/', (req: Request, res: Response) => {
  return res.send('Enugu State Ministry of health app Started')
})

// Authentication Routes Starts
app.use(route+"/auth",adminAuthRouter)
app.use(route+"/auth",facilityAuthRouter)
app.use(route+"/auth",personnelAuthRouter)
app.use(route+"/auth",inspectorAuthRouter)
app.use(route+"/auth",foodfacilityAuthRouter)
app.use(route+"/auth",foodpersonnelAuthRouter)
// Authentication Routes Ends

// Admin Routes Starts
app.use(route+"/admin",adminApproveRouter)
app.use(route+"/admin",adminUserRouter)
app.use(route+"/admin",adminFacilityRouter)
app.use(route+"/admin",adminStateRouter)
app.use(route+"/admin",adminStatsRouter)
app.use(route+"/admin",adminInspectorRouter)
app.use(route+"/admin",adminSubAdminRouter)
app.use(route+"/admin",adminPriceListRouter)
// Admin Routes Ends

// Inspector Routes Starts
app.use(route+"/inspector",inspectorSettingsRouter)
app.use(route+"/inspector",inspectorFacilityRouter)
// Inspector Routes Ends

// Payment Routes Starts
app.use(route + "/payment", personnelPaymentRouter)
app.use(route + "/payment", facilityPaymentRouter)
app.use(route + "/food-handler/payment", foodpersonnelPaymentRouter)
app.use(route + "/food-handler/payment", foodfacilityPaymentRouter)
app.use(route + "/renewal", personnelPaymentRouter)
app.use(route + "/renewal", facilityPaymentRouter)
// Payment Routes ends

// Payment Routes Starts
app.use(route + "/renewal", personnelRenewalRouter)
app.use(route + "/renewal", facilityRenewalRouter)
// Payment Routes ends

// Personnel Routes Starts
app.use(route + "/personnel", personnelRouter)
app.use(route + "/personnel", personnelSettingsRouter)
// Personnel Routes Ends

// Facility Routes Starts
app.use(route + "/facility", facilityRouter)
app.use(route + "/facility", facilitySettingsRouter)
// Facility Routes Ends

// Food Personnel Routes Starts
app.use(route + "/food-handler/personnel", foodpersonnelRouter)
app.use(route + "/food-handler/personnel", foodpersonnelSettingsRouter)
// Food Personnel Routes Ends

// Food Facility Routes Starts
app.use(route + "/food-handler/facility", foodfacilityRouter)
app.use(route + "/food-handler/facility", foodfacilitySettingsRouter)
// Food Facility Routes Ends

// Verification Routes Starts
app.use(route , verificationRouter)
app.use(route + "/verification", verificationRouter)
// Verification Routes Ends

// Verification Routes Starts
app.use(route , resetPasswordRouter)
app.use(route , calculatePriceListRouter)
app.use(route , searchRouter)
// Verification Routes Ends

app.use(express.urlencoded({ extended: true }));

export default app;
