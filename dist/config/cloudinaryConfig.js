"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const config_1 = require("./config");
cloudinary_1.v2.config({
    cloud_name: config_1.cloudinaryConfig.name,
    api_key: config_1.cloudinaryConfig.api_key,
    api_secret: config_1.cloudinaryConfig.api_secret,
    secure: true
});
exports.default = cloudinary_1.v2;
