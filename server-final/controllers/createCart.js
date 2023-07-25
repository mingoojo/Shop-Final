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
const product_1 = __importDefault(require("../models/product"));
const HttpError_1 = __importDefault(require("../error/HttpError"));
const cartProduct_1 = __importDefault(require("../models/cartProduct"));
dotenv_1.default.config();
const ACCESS_SECRET = process.env.ACCESS_SECRET || '';
const createCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, options, quantity } = req.body;
    let verified;
    try {
        const token = String(req.headers.authorization).replace(/^Bearer\s+/, '');
        verified = jsonwebtoken_1.default.verify(token, ACCESS_SECRET);
    }
    catch (err) {
        const error = new HttpError_1.default('Cannot find a userData, please login again', 403);
        return next(error);
    }
    let product;
    try {
        product = yield product_1.default.findOne({ id: productId });
    }
    catch (err) {
        const error = new HttpError_1.default('Cannot find a Product , please try again.', 500);
        return next(error);
    }
    if (!product) {
        const error = new HttpError_1.default('Cannot find a Product, please try again.', 500);
        return next(error);
    }
    const id = `CAR-${Math.random().toString(36).substr(2, 16)}`;
    const indicator = `${product.id}-${options.map((option) => (option.items.name)).join('-')}`;
    const newCartProduct = new cartProduct_1.default({
        id,
        indicator,
        email: verified.email,
        name: product.name,
        productId: product.id,
        image: product.image,
        category: product.category,
        options,
        quantity,
        unitPrice: product.price,
        totalPrice: quantity * product.price,
    });
    let existedcartProduct;
    try {
        existedcartProduct = yield cartProduct_1.default.findOne({ indicator, email: newCartProduct.email });
    }
    catch (err) {
        const error = new HttpError_1.default('Cannot find a Product , please try again.', 500);
        return next(error);
    }
    if (!existedcartProduct) {
        try {
            yield newCartProduct.save();
        }
        catch (err) {
            const error = new HttpError_1.default('Cannot save a data, please try again.', 500);
            return next(error);
        }
        res.status(201).send('done');
    }
    else if (existedcartProduct) {
        existedcartProduct.quantity += quantity;
        existedcartProduct.totalPrice += newCartProduct.totalPrice;
        try {
            yield existedcartProduct.save();
        }
        catch (err) {
            const error = new HttpError_1.default('Cannot save a data, please try again.', 500);
            return next(error);
        }
        res.status(201).send('done');
    }
});
exports.default = createCart;
