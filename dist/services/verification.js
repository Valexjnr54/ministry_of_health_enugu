"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifycac = exports.verifynin = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config/config");
async function verifynin(nin) {
    const url = 'https://api.prembly.com/identitypass/verification/vnin'; // Replace with your API endpoint
    const requestData = {
        number: nin,
    };
    const headers = {
        'x-api-key': config_1.Config.premblySecretKey,
        app_id: config_1.Config.premblyAppID
    };
    try {
        const response = await axios_1.default.post(url, requestData, { headers });
        return response.data;
    }
    catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
exports.verifynin = verifynin;
async function verifycac(rc_number, company_name, company_type) {
    const url = 'https://api.prembly.com/identitypass/verification/cac'; // Replace with your API endpoint
    const requestData = {
        rc_number,
        company_name,
        company_type
    };
    const headers = {
        'x-api-key': config_1.Config.premblySecretKey,
        app_id: config_1.Config.premblyAppID
    };
    try {
        const response = await axios_1.default.post(url, requestData, { headers });
        return response.data;
    }
    catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
exports.verifycac = verifycac;
