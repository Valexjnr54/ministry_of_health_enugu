"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
const dns_1 = __importDefault(require("dns"));
const emailValidator = __importStar(require("email-validator"));
async function validateEmail(email) {
    // Check if email has a valid format
    if (!emailValidator.validate(email)) {
        return false;
    }
    // Extract domain from email
    const domain = email.split('@')[1];
    // Check if domain exists
    try {
        await new Promise((resolve, reject) => {
            dns_1.default.resolveMx(domain, (err, addresses) => {
                if (err || !addresses || addresses.length === 0) {
                    reject(err || new Error('No MX records found'));
                }
                else {
                    resolve();
                }
            });
        });
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
exports.validateEmail = validateEmail;
async function main() {
    const email = '6564jimvalex54@chukwuebuka.com';
    const isValid = await validateEmail(email);
    console.log(`Email ${email} is ${isValid ? 'valid' : 'invalid'}`);
}
main();
