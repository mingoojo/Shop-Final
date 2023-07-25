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
const categories_1 = __importDefault(require("../models/categories"));
const HttpError_1 = __importDefault(require("../error/HttpError"));
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = `CAT-${Math.random().toString(36).substr(2, 16)}`;
    const { name } = req.body;
    const newCategories = new categories_1.default({ id, name, hidden: true });
    try {
        yield newCategories.save();
    }
    catch (err) {
        const error = new HttpError_1.default('Creating Category failed, please try again.', 500);
        return next(error);
    }
    res.status(201).send({ newCategories });
});
exports.default = createCategory;
