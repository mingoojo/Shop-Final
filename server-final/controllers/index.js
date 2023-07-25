"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./login"));
const signup_1 = __importDefault(require("./signup"));
const checkToken_1 = __importDefault(require("./checkToken"));
const logout_1 = __importDefault(require("./logout"));
const getUsers_1 = __importDefault(require("./getUsers"));
const getCategories_1 = __importDefault(require("./getCategories"));
const createCategory_1 = __importDefault(require("./createCategory"));
const createProduct_1 = __importDefault(require("./createProduct"));
const getProducts_1 = __importDefault(require("./getProducts"));
const getProductDetail_1 = __importDefault(require("./getProductDetail"));
const createCart_1 = __importDefault(require("./createCart"));
const getCart_1 = __importDefault(require("./getCart"));
const createOrder_1 = __importDefault(require("./createOrder"));
const deleteCart_1 = __importDefault(require("./deleteCart"));
const getOrders_1 = __importDefault(require("./getOrders"));
const getOrderDetail_1 = __importDefault(require("./getOrderDetail"));
const adminLogin_1 = __importDefault(require("./adminLogin"));
const adminSignup_1 = __importDefault(require("./adminSignup"));
const getCategoriesAdmin_1 = __importDefault(require("./getCategoriesAdmin"));
const getCategoryAdmin_1 = __importDefault(require("./getCategoryAdmin"));
const updateCategory_1 = __importDefault(require("./updateCategory"));
const getOrdersAdmin_1 = __importDefault(require("./getOrdersAdmin"));
const updateOrderDetail_1 = __importDefault(require("./updateOrderDetail"));
exports.default = {
    login: login_1.default,
    logout: logout_1.default,
    signup: signup_1.default,
    checkToken: checkToken_1.default,
    getUsers: getUsers_1.default,
    createCategory: createCategory_1.default,
    getCategories: getCategories_1.default,
    createProduct: createProduct_1.default,
    getProducts: getProducts_1.default,
    getProductDetail: getProductDetail_1.default,
    createCart: createCart_1.default,
    getCart: getCart_1.default,
    createOrder: createOrder_1.default,
    deleteCart: deleteCart_1.default,
    getOrders: getOrders_1.default,
    getOrderDetail: getOrderDetail_1.default,
    adminLogin: adminLogin_1.default,
    adminSignup: adminSignup_1.default,
    getCategoriesAdmin: getCategoriesAdmin_1.default,
    getCategoryAdmin: getCategoryAdmin_1.default,
    updateCategory: updateCategory_1.default,
    getOrdersAdmin: getOrdersAdmin_1.default,
    updateOrderDetail: updateOrderDetail_1.default,
};
