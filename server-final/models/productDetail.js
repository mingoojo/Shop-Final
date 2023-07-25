"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productDetailSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: {
        id: { type: String, required: true },
        name: { type: String, required: true },
    },
    options: [
        {
            kind: { type: String, required: true },
            items: [
                {
                    name: { type: String, required: true },
                },
            ],
        },
    ],
    description: { type: String, required: true },
});
const ProductDetail = mongoose_1.default.model('productDetail', productDetailSchema);
exports.default = ProductDetail;
