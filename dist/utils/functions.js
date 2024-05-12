"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractIdFromPrefixedString = exports.renewal_expiryDate = exports.expiryDate = exports.ShortCode = exports.uniqueSix = void 0;
async function uniqueSix() {
    return Math.floor(Math.random() * 900000) + 100000;
}
exports.uniqueSix = uniqueSix;
async function ShortCode(inputString) {
    // Check if the string has at least two characters
    if (inputString.length >= 2) {
        // Extract the first two characters and convert them to uppercase
        const firstTwoUpperCase = inputString.substring(0, 2).toUpperCase();
        return firstTwoUpperCase;
    }
    else {
        // If the string has less than two characters, return the original string
        return inputString.toUpperCase();
    }
}
exports.ShortCode = ShortCode;
async function expiryDate() {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
}
exports.expiryDate = expiryDate;
async function renewal_expiryDate() {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() + 1);
    const year = currentDate.getFullYear() + 1;
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
}
exports.renewal_expiryDate = renewal_expiryDate;
async function extractIdFromPrefixedString(input, prefixes) {
    for (const prefix of prefixes) {
        if (input.startsWith(prefix)) {
            return input.substring(prefix.length);
        }
    }
    return null; // or return an empty string if you prefer
}
exports.extractIdFromPrefixedString = extractIdFromPrefixedString;
