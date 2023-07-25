"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cartProductSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    indicator: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    productId: { type: String, required: true },
    image: { type: String, required: true },
    category: {
        id: { type: String, required: true },
        name: { type: String, required: true },
    },
    options: [
        {
            kind: { type: String, required: true },
            items: {
                name: { type: String, required: true },
            },
        },
    ],
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
});
const CartProduct = mongoose_1.default.model('cart', cartProductSchema);
exports.default = CartProduct;
