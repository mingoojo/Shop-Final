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
const updateCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, categoryId, hidden } = req.body;
    let category;
    try {
        category = yield categories_1.default.findOne({ id: categoryId });
    }
    catch (err) {
        const error = new HttpError_1.default('Cannot find a Category, please try again.', 500);
        return next(error);
    }
    if (!category) {
        const error = new HttpError_1.default('Cannot find a Category, please try again.', 500);
        return next(error);
    }
    category.name = name;
    category.hidden = hidden;
    try {
        yield category.save();
    }
    catch (err) {
        const error = new HttpError_1.default('Cannot find a Category, please try again.', 500);
        return next(error);
    }
    res.status(201).send('done');
});
exports.default = updateCategory;
