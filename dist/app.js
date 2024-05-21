"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const rateLimitMiddleware_1 = __importDefault(require("./middlewares/rateLimitMiddleware"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const body_parser_1 = __importDefault(require("body-parser"));
const personnelPaymentRoute_1 = require("./routes/PaystackRoutes/personnelPaymentRoute");
const personnelRoute_1 = require("./routes/HealthCareRoutes/Personnel/personnelRoute");
const verificationRoute_1 = require("./routes/OtherRoutes/verificationRoute");
const morgan_1 = __importDefault(require("morgan"));
const adminAuthRoutes_1 = require("./routes/AdminRoutes/Auth/adminAuthRoutes");
const approvePersonnelRoute_1 = require("./routes/AdminRoutes/Approve/approvePersonnelRoute");
const userPersonnelRoute_1 = require("./routes/AdminRoutes/Users/userPersonnelRoute");
const facilityPaymentRoute_1 = require("./routes/PaystackRoutes/facilityPaymentRoute");
const facilityRoute_1 = require("./routes/HealthCareRoutes/Facility/facilityRoute");
const facilityPaymentRoute_2 = require("./routes/PaystackRoutes/Renewal/facilityPaymentRoute");
const personnelPaymentRoute_2 = require("./routes/PaystackRoutes/Renewal/personnelPaymentRoute");
const facilityRoute_2 = require("./routes/AdminRoutes/Facilities/facilityRoute");
const stateRoute_1 = require("./routes/AdminRoutes/State/stateRoute");
const statsRoute_1 = require("./routes/AdminRoutes/statsRoute");
const facilityAuthRoute_1 = require("./routes/HealthCareRoutes/Auth/facilityAuthRoute");
const personnelAuthRoute_1 = require("./routes/HealthCareRoutes/Auth/personnelAuthRoute");
const inspectorRoute_1 = require("./routes/AdminRoutes/Inspector/inspectorRoute");
const inspectorAuthRoute_1 = require("./routes/InspectorRoutes/Auth/inspectorAuthRoute");
const inspectorSettingsRoute_1 = require("./routes/InspectorRoutes/Settings/inspectorSettingsRoute");
const inspectorFacilityRoute_1 = require("./routes/InspectorRoutes/Facility/inspectorFacilityRoute");
const personnelSettingsRoute_1 = require("./routes/HealthCareRoutes/Personnel/personnelSettingsRoute");
const facilitySettingsRoute_1 = require("./routes/HealthCareRoutes/Facility/facilitySettingsRoute");
const personnelRoute_2 = require("./routes/FoodHandlerRoutes/Personnel/personnelRoute");
const personnelSettingsRoute_2 = require("./routes/FoodHandlerRoutes/Personnel/personnelSettingsRoute");
const facilityRoute_3 = require("./routes/FoodHandlerRoutes/Facility/facilityRoute");
const facilitySettingsRoute_2 = require("./routes/FoodHandlerRoutes/Facility/facilitySettingsRoute");
const facilityAuthRoute_2 = require("./routes/FoodHandlerRoutes/Auth/facilityAuthRoute");
const personnelPaymentRoute_3 = require("./routes/PaystackRoutes/Food Handlers/personnelPaymentRoute");
const facilityPaymentRoute_3 = require("./routes/PaystackRoutes/Food Handlers/facilityPaymentRoute");
const resetPasswordRoute_1 = require("./routes/ResetPasswordRoutes/resetPasswordRoute");
const personnelAuthRoute_2 = require("./routes/FoodHandlerRoutes/Auth/personnelAuthRoute");
const subAdminRoute_1 = require("./routes/AdminRoutes/Admin/subAdminRoute");
const priceListRoute_1 = require("./routes/AdminRoutes/PriceList/priceListRoute");
const calculatePriceList_1 = require("./routes/OtherRoutes/calculatePriceList");
const searchRoute_1 = require("./routes/OtherRoutes/searchRoute");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: false,
}));
app.use(rateLimitMiddleware_1.default);
app.use((0, cors_1.default)({ origin: config_1.Config.corsAllowedOrigin }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
const route = "/api/v1";
// Configure your routes here
app.get('/', (req, res) => {
    return res.send('Enugu State Ministry of health app Started');
});
// Authentication Routes Starts
app.use(route + "/auth", adminAuthRoutes_1.adminAuthRouter);
app.use(route + "/auth", facilityAuthRoute_1.facilityAuthRouter);
app.use(route + "/auth", personnelAuthRoute_1.personnelAuthRouter);
app.use(route + "/auth", inspectorAuthRoute_1.inspectorAuthRouter);
app.use(route + "/auth", facilityAuthRoute_2.foodfacilityAuthRouter);
app.use(route + "/auth", personnelAuthRoute_2.foodpersonnelAuthRouter);
// Authentication Routes Ends
// Admin Routes Starts
app.use(route + "/admin", approvePersonnelRoute_1.adminApproveRouter);
app.use(route + "/admin", userPersonnelRoute_1.adminUserRouter);
app.use(route + "/admin", facilityRoute_2.adminFacilityRouter);
app.use(route + "/admin", stateRoute_1.adminStateRouter);
app.use(route + "/admin", statsRoute_1.adminStatsRouter);
app.use(route + "/admin", inspectorRoute_1.adminInspectorRouter);
app.use(route + "/admin", subAdminRoute_1.adminSubAdminRouter);
app.use(route + "/admin", priceListRoute_1.adminPriceListRouter);
// Admin Routes Ends
// Inspector Routes Starts
app.use(route + "/inspector", inspectorSettingsRoute_1.inspectorSettingsRouter);
app.use(route + "/inspector", inspectorFacilityRoute_1.inspectorFacilityRouter);
// Inspector Routes Ends
// Payment Routes Starts
app.use(route + "/payment", personnelPaymentRoute_1.personnelPaymentRouter);
app.use(route + "/payment", facilityPaymentRoute_1.facilityPaymentRouter);
app.use(route + "/food-handler/payment", personnelPaymentRoute_3.foodpersonnelPaymentRouter);
app.use(route + "/food-handler/payment", facilityPaymentRoute_3.foodfacilityPaymentRouter);
app.use(route + "/renewal", personnelPaymentRoute_1.personnelPaymentRouter);
app.use(route + "/renewal", facilityPaymentRoute_1.facilityPaymentRouter);
// Payment Routes ends
// Payment Routes Starts
app.use(route + "/renewal", personnelPaymentRoute_2.personnelRenewalRouter);
app.use(route + "/renewal", facilityPaymentRoute_2.facilityRenewalRouter);
// Payment Routes ends
// Personnel Routes Starts
app.use(route + "/personnel", personnelRoute_1.personnelRouter);
app.use(route + "/personnel", personnelSettingsRoute_1.personnelSettingsRouter);
// Personnel Routes Ends
// Facility Routes Starts
app.use(route + "/facility", facilityRoute_1.facilityRouter);
app.use(route + "/facility", facilitySettingsRoute_1.facilitySettingsRouter);
// Facility Routes Ends
// Food Personnel Routes Starts
app.use(route + "/food-handler/personnel", personnelRoute_2.foodpersonnelRouter);
app.use(route + "/food-handler/personnel", personnelSettingsRoute_2.foodpersonnelSettingsRouter);
// Food Personnel Routes Ends
// Food Facility Routes Starts
app.use(route + "/food-handler/facility", facilityRoute_3.foodfacilityRouter);
app.use(route + "/food-handler/facility", facilitySettingsRoute_2.foodfacilitySettingsRouter);
// Food Facility Routes Ends
// Verification Routes Starts
app.use(route, verificationRoute_1.verificationRouter);
app.use(route + "/verification", verificationRoute_1.verificationRouter);
// Verification Routes Ends
// Verification Routes Starts
app.use(route, resetPasswordRoute_1.resetPasswordRouter);
app.use(route, calculatePriceList_1.calculatePriceListRouter);
app.use(route, searchRoute_1.searchRouter);
// Verification Routes Ends
app.use(express_1.default.urlencoded({ extended: true }));
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
exports.default = app;
