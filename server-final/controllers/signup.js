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
const dotenv_1 = __importDefault(require("dotenv"));
const express_validator_1 = require("express-validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const HttpError_1 = __importDefault(require("../error/HttpError"));
const users_1 = __importDefault(require("../models/users"));
dotenv_1.default.config();
const ACCESS_SECRET = process.env.ACCESS_SECRET || '';
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const error = new HttpError_1.default('Invalid inputs passed, please check your data.', 422);
        return next(error);
    }
    const { name, email, password } = req.body;
    let existedUser;
    try {
        existedUser = yield users_1.default.findOne({ email });
    }
    catch (err) {
        const error = new HttpError_1.default('There is no userdata, Please check again', 500);
        return next(error);
    }
    if (existedUser) {
        const error = new HttpError_1.default('Inputed email is already exists, Please check again', 403);
        return next(error);
    }
    let hassedPassword;
    try {
        hassedPassword = yield bcryptjs_1.default.hash(password, 12);
    }
    catch (err) {
        const error = new HttpError_1.default('Could not create password, please try again.', 500);
        return next(error);
    }
    const createdUser = new users_1.default({
        name,
        email,
        password: hassedPassword,
    });
    try {
        yield createdUser.save();
    }
    catch (err) {
        const error = new HttpError_1.default('signup is failed, please check again', 500);
        return next(error);
    }
    let token;
    try {
        token = jsonwebtoken_1.default.sign({ email: createdUser.email }, ACCESS_SECRET, { expiresIn: '24h' });
    }
    catch (err) {
        const error = new HttpError_1.default('Sign up failed, please try again later.', 500);
        return next(error);
    }
    res.status(201).send({ accessToken: token });
});
exports.default = signup;
