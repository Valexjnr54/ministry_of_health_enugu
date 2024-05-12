"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subAdminCredentials = exports.foodpersonnelCredentials = exports.personnelCredentials = exports.foodfacilityCredentials = exports.facilityCredentials = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads/'); // Set the destination folder for uploads
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname); // Set the filename
    },
});
exports.upload = (0, multer_1.default)({ storage: storage });
exports.facilityCredentials = exports.upload.fields([
    { name: 'site_plan', maxCount: 1 },
    { name: 'building_plan', maxCount: 1 },
    { name: 'tax_clearance_certificate', maxCount: 1 },
    // { name: 'compliance_certificate', maxCount: 1 },
    { name: 'owner_passport', maxCount: 1 },
    // { name: 'owner_nin_image', maxCount: 1 },
    { name: 'cac_image', maxCount: 1 },
]);
exports.foodfacilityCredentials = exports.upload.fields([
    // { name: 'owner_nin_image', maxCount: 1 },
    { name: 'cac_image', maxCount: 1 },
]);
exports.personnelCredentials = exports.upload.fields([
    // { name: 'nin_image', maxCount: 1 },
    { name: 'practice_certificate', maxCount: 1 },
    { name: 'passport', maxCount: 1 },
]);
exports.foodpersonnelCredentials = exports.upload.fields([
    // { name: 'nin_image', maxCount: 1 },
    { name: 'passport', maxCount: 1 },
]);
exports.subAdminCredentials = exports.upload.fields([
    { name: 'profile_image', maxCount: 1 },
]);
//   module.exports = upload;
