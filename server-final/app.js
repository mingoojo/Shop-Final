"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const HttpError_1 = __importDefault(require("./error/HttpError"));
const productRouter_1 = __importDefault(require("./router/productRouter"));
const authenticationRouter_1 = __importDefault(require("./router/authenticationRouter"));
const adminRouter_1 = __importDefault(require("./router/adminRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['http://localhost:8000', 'http://localhost:8080', 'https://shop-deploy.web.app'],
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    credentials: true,
}));
app.use(adminRouter_1.default);
app.use(productRouter_1.default);
app.use(authenticationRouter_1.default);
// when the route is wrong
app.use((req, res, next) => {
    const error = new HttpError_1.default('Could not find this route', 404);
    throw error;
});
// when the error is occured
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});
// mongodb connect
mongoose_1.default.connect(`${process.env.MONGODB_KEY}`).then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log('Server running with database!');
    });
}).catch(() => {
    console.log('Connection failed!');
});
