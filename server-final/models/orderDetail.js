"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderDetailSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    transactionId: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, required: true },
    cartItem: [
        {
            id: { type: String, required: true },
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
        },
    ],
    totalPrice: { type: Number, required: true },
    receiver: {
        name: { type: String, required: true },
        address1: { type: String, required: true },
        address2: { type: String, required: true },
        postalCode: { type: String, required: true },
        phoneNumber: { type: String, required: true },
    },
});
const OrderDetail = mongoose_1.default.model('orderDetail', orderDetailSchema);
exports.default = OrderDetail;
