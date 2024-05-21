"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInsightTagValue = exports.extractReferenceFromRequest = exports.verifyPayment = exports.initializeFoodFacilityPayment = exports.initializeFacilityPayment = exports.initializeCompletePayment = exports.initializePayment = void 0;
// CREDO.ts
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const config_1 = require("../config/config");
const CREDO_SECRET_KEY = config_1.Config.credoSecret;
const CREDO_PUBLIC_KEY = config_1.Config.credoPublicKey;
const CREDO_BASE_URL = config_1.Config.credoBaseURL;
async function initializePayment(fullname, phone_number, amount, email, type, type_of_payment, callback_url) {
    try {
        const payload = {
            amount,
            email,
            callback_url,
            metadata: {
                fullname,
                email,
                phone_number,
                type,
                type_of_payment,
                amount
            }
        };
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `${CREDO_PUBLIC_KEY}`,
        };
        const response = await axios_1.default.post(`${CREDO_BASE_URL}/transaction/initialize`, payload, { headers });
        const data = {
            success: true,
            authorization_url: response.data.data.authorizationUrl,
            access_code: response.data.data.credoReference,
            reference: response.data.data.reference
        };
        return data;
    }
    catch (error) {
        console.error(error);
    }
    // Default return, should logically never be reached
    return {
        success: false,
        message: "Unexpected end of function"
    };
}
exports.initializePayment = initializePayment;
async function initializeCompletePayment(facility_name, facility_id, phone_number, amount, email, type, type_of_payment, callback_url) {
    try {
        const payload = {
            amount,
            email,
            callback_url,
            metadata: {
                facility_id,
                facility_name,
                email,
                phone_number,
                type,
                type_of_payment,
                amount
            }
        };
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `${CREDO_PUBLIC_KEY}`,
        };
        const response = await axios_1.default.post(`${CREDO_BASE_URL}/transaction/initialize`, payload, { headers });
        const data = {
            success: true,
            authorization_url: response.data.data.authorizationUrl,
            access_code: response.data.data.credoReference,
            reference: response.data.data.reference
        };
        return data;
    }
    catch (error) {
        console.error(error);
        return express_1.response.status(500).json({ message: 'Internal Server Error' });
        // throw new Error(error.response.data.message);
    }
}
exports.initializeCompletePayment = initializeCompletePayment;
async function initializeFacilityPayment(facility_name, phone_number, amount, email, type, type_of_payment, callback_url) {
    try {
        const payload = {
            amount,
            email,
            callback_url,
            metadata: {
                facility_name,
                email,
                phone_number,
                type,
                type_of_payment,
                amount
            }
        };
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `${CREDO_PUBLIC_KEY}`,
        };
        const response = await axios_1.default.post(`${CREDO_BASE_URL}/transaction/initialize`, payload, { headers });
        const data = {
            success: true,
            authorization_url: response.data.data.authorizationUrl,
            access_code: response.data.data.credoReference,
            reference: response.data.data.reference
        };
        return data;
    }
    catch (error) {
        console.error(error);
        return express_1.response.status(500).json({ message: 'Internal Server Error' });
        // throw new Error(error.response.data.message);
    }
}
exports.initializeFacilityPayment = initializeFacilityPayment;
async function initializeFoodFacilityPayment(facility_name, phone_number, amount, email, type, type_of_payment, category, callback_url) {
    try {
        const payload = {
            amount,
            email,
            callback_url,
            metadata: {
                facility_name,
                email,
                phone_number,
                type,
                type_of_payment,
                category,
                amount
            }
        };
        const headers = {
            Authorization: `${CREDO_PUBLIC_KEY}`,
        };
        const response = await axios_1.default.post(`${CREDO_BASE_URL}/transaction/initialize`, payload, { headers });
        const data = {
            success: true,
            authorization_url: response.data.data.authorizationUrl,
            access_code: response.data.data.credoReference,
            reference: response.data.data.reference
        };
        return data;
    }
    catch (error) {
        console.error(error);
        return express_1.response.status(500).json({ message: 'Internal Server Error' });
        // throw new Error(error.response.data.message);
    }
}
exports.initializeFoodFacilityPayment = initializeFoodFacilityPayment;
async function verifyPayment(reference) {
    try {
        const response = await axios_1.default.get(CREDO_BASE_URL + `/transaction/${reference}/verify`, {
            headers: {
                Accept: 'application/json',
                Authorization: `${CREDO_SECRET_KEY}`
            },
        });
        return response.data.data;
    }
    catch (error) {
        console.error(error);
        return express_1.response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.verifyPayment = verifyPayment;
function extractReferenceFromRequest(req) {
    const reference = req.query.transRef;
    return reference;
}
exports.extractReferenceFromRequest = extractReferenceFromRequest;
async function getInsightTagValue(tag, data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].insightTag === tag) {
            return data[i].insightTagValue;
        }
    }
    return null;
}
exports.getInsightTagValue = getInsightTagValue;
