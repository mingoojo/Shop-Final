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
const productDetail_1 = __importDefault(require("../models/productDetail"));
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = `PRO-${Math.random().toString(36).substr(2, 16)}`;
    const { name, image, price, category, options, description, } = req.body;
    const newProduct = new product_1.default({
        id,
        name,
        image,
        price,
        category,
    });
    const newProductDetail = new productDetail_1.default({
        id,
        name,
        image,
        price,
        category,
        options,
        description,
    });
    try {
        yield newProduct.save();
        yield newProductDetail.save();
    }
    catch (err) {
        const error = new HttpError_1.default('Creating Product failed, please try again.', 500);
        return next(error);
    }
    res.status(201).send({ newProduct, newProductDetail });
});
exports.default = createProduct;
