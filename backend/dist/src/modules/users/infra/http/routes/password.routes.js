"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ForgotPasswordController_1 = __importDefault(require("../controllers/ForgotPasswordController"));
var ForgotPasswordController_2 = __importDefault(require("../controllers/ForgotPasswordController"));
var passwordRouter = express_1.Router();
var forgotPasswordController = new ForgotPasswordController_1.default();
var resetPasswordController = new ForgotPasswordController_2.default();
passwordRouter.post('/forgot', forgotPasswordController.create);
passwordRouter.post('/reset', resetPasswordController.create);
exports.default = passwordRouter;
