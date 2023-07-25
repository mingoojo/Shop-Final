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
const orderDetail_1 = __importDefault(require("../models/orderDetail"));
dotenv_1.default.config();
const ACCESS_SECRET = process.env.ACCESS_SECRET || '';
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { merchantId, transactionId, cart, totalPrice, receiver, } = req.body;
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
    const today = new Date();
    const orderedAt = `${today.toLocaleDateString()}-${today.toLocaleTimeString()}`;
    const OrderItem = new order_1.default({
        id: merchantId,
        title: cart[0].name,
        totalPrice,
        status: 'paid',
        orderedAt,
        email: verified.email,
    });
    const OrderDetailItem = new orderDetail_1.default({
        id: merchantId,
        transactionId,
        cartItem: cart,
        totalPrice,
        receiver,
        status: 'paid',
        email: verified.email,
    });
    try {
        yield OrderItem.save();
        yield OrderDetailItem.save();
    }
    catch (err) {
        const error = new HttpError_1.default('Cannot save a data, please try again.', 500);
        return next(error);
    }
});
exports.default = createOrder;
