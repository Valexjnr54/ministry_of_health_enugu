"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminInspectorRouter = void 0;
const express_1 = __importDefault(require("express"));
const inspectorController_1 = require("../../../controllers/AdminController/Inspector/inspectorController");
const authenticationMiddleware_1 = require("../../../middlewares/authMiddleware/authenticationMiddleware");
exports.adminInspectorRouter = express_1.default.Router();
exports.adminInspectorRouter.post('/create-inspector', authenticationMiddleware_1.authenticateJWT, inspectorController_1.createInspector);
exports.adminInspectorRouter.get('/all-inspectors', authenticationMiddleware_1.authenticateJWT, inspectorController_1.allInspector);
exports.adminInspectorRouter.get('/single-inspector', authenticationMiddleware_1.authenticateJWT, inspectorController_1.singleInspector);
exports.adminInspectorRouter.delete('/delete-inspector', authenticationMiddleware_1.authenticateJWT, inspectorController_1.deleteInspector);
exports.adminInspectorRouter.put('/assign-inspector', authenticationMiddleware_1.authenticateJWT, inspectorController_1.assignInspector);