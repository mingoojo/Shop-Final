"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const HttpError_1 = __importDefault(require("../error/HttpError"));
const order_1 = __importDefault(require("../models/order"));
dotenv_1.default.config();
const ACCESS_SECRET = process.env.ACCESS_SECRET || '';
const getOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let verified;
    try {
        const token = String(req.headers.authorization).replace(/^Bearer\s+/, '');
        verified = jsonwebtoken_1.default.verify(token, ACCESS_SECRET);
    }
    catch (err) {
        const error = new HttpError_1.default('accessToken is broken, please login again', 403);
        return next(error);
    }
    if (!verified) {
        const error = new HttpError_1.default('accessToken is broken, please login again', 403);
        return next(error);
    }
    let orders;
    try {
        orders = yield order_1.default.find({ email: verified.email });
    }
    catch (err) {
        const error = new HttpError_1.default('cannot find order list, please try again', 404);
        return next(error);
    }
    res.status(201).send({ orders });
});
exports.default = getOrders;
