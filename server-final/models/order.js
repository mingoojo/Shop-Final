"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, required: true },
    orderedAt: { type: String, required: true },
    email: { type: String, required: true },
});
const Order = mongoose_1.default.model('order', orderSchema);
exports.default = Order;
