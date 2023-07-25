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
const order_1 = __importDefault(require("../models/order"));
const orderDetail_1 = __importDefault(require("../models/orderDetail"));
const updateOrderDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { status } = req.body;
    const { id } = req.params;
    console.log(status);
    let order;
    try {
        order = yield order_1.default.findOne({ id });
    }
    catch (err) {
        const error = new HttpError_1.default('cannot find order list, please try again', 404);
        return next(error);
    }
    let orderDetail;
    try {
        orderDetail = yield orderDetail_1.default.findOne({ id });
    }
    catch (err) {
        const error = new HttpError_1.default('cannot find orderDetail, please try again', 404);
        return next(error);
    }
    if (!order) {
        const error = new HttpError_1.default('cannot find order, please try again', 404);
        return next(error);
    }
    if (!orderDetail) {
        const error = new HttpError_1.default('cannot find orderDetail, please try again', 404);
        return next(error);
    }
    order.status = status;
    orderDetail.status = status;
    try {
        yield order.save();
    }
    catch (err) {
        const error = new HttpError_1.default('cannot find order1, please try again', 500);
        return next(error);
    }
    console.log(orderDetail.status);
    console.log(orderDetail);
    try {
        yield orderDetail.save();
    }
    catch (err) {
        const error = new HttpError_1.default('cannot find order2, please try again', 500);
        return next(error);
    }
    res.status(202).send('done');
});
exports.default = updateOrderDetail;
