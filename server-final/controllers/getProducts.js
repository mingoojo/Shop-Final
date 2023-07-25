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
const HttpError_1 = __importDefault(require("../error/HttpError"));
const product_1 = __importDefault(require("../models/product"));
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId } = req.query;
    let products;
    if (categoryId) {
        try {
            products = yield product_1.default.find({ 'category.id': categoryId });
        }
        catch (err) {
            const error = new HttpError_1.default('Cannot find a Product, please try again.', 500);
            return next(error);
        }
    }
    else {
        try {
            products = yield product_1.default.find();
        }
        catch (err) {
            const error = new HttpError_1.default('Cannot find a Product, please try again.', 500);
            return next(error);
        }
    }
    res.status(201).send({ products });
});
exports.default = getProducts;
