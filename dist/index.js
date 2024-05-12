"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config/config");
const port = config_1.Config.port;
app_1.default.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
