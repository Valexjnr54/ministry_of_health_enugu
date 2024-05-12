"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractReferenceFromRequest = exports.verifyPayment = exports.initializeFoodFacilityPayment = exports.initializeFacilityPayment = exports.initializeCompletePayment = exports.initializePayment = void 0;
// paystack.ts
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const config_1 = require("../config/config");
const PAYSTACK_SECRET_KEY = config_1.Config.paystackSecret;
const PAYSTACK_BASE_URL = config_1.Config.paystackBaseURL;
async function initializePayment(fullname, phone_number, amount, email, type, type_of_payment, callback_url) {
    try {
        const response = await axios_1.default.post(PAYSTACK_BASE_URL + '/initialize', {
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
        }, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            },
        });
        return response.data.data;
    }
    catch (error) {
        console.error(error);
        return express_1.response.status(500).json({ message: 'Internal Server Error' });
        // throw new Error(error.response.data.message);
    }
}
exports.initializePayment = initializePayment;
async function initializeCompletePayment(facility_name, facility_id, phone_number, amount, email, type, type_of_payment, callback_url) {
    try {
        const response = await axios_1.default.post(PAYSTACK_BASE_URL + '/initialize', {
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
        }, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            },
        });
        return response.data.data;
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
        const response = await axios_1.default.post(PAYSTACK_BASE_URL + '/initialize', {
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
        }, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            },
        });
        return response.data.data;
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
        const response = await axios_1.default.post(PAYSTACK_BASE_URL + '/initialize', {
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
        }, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            },
        });
        return response.data.data;
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
        const response = await axios_1.default.get(PAYSTACK_BASE_URL + `/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
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
    const reference = req.query.reference;
    return reference;
}
exports.extractReferenceFromRequest = extractReferenceFromRequest;
