"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const controllers_1 = __importDefault(require("../controllers"));
const router = express_1.default.Router();
router.post('/admin/login', [
    (0, express_validator_1.check)('email').normalizeEmail().isEmail(),
    (0, express_validator_1.check)('password').isLength({ min: 6 }),
], controllers_1.default.adminLogin);
router.post('/admin/signup', [
    (0, express_validator_1.check)('name').not().isEmpty(),
    (0, express_validator_1.check)('email').normalizeEmail().isEmail(),
    (0, express_validator_1.check)('password').isLength({ min: 6 }),
], controllers_1.default.adminSignup);
router.get('/admin/users/me', controllers_1.default.checkToken);
router.get('/admin/users', controllers_1.default.getUsers);
router.get('/admin/categories', controllers_1.default.getCategoriesAdmin);
router.get('/admin/categories/:id', controllers_1.default.getCategoryAdmin);
router.post('/admin/categories', controllers_1.default.createCategory);
router.post('/admin/categories/edit', controllers_1.default.updateCategory);
router.get('/admin/orders', controllers_1.default.getOrdersAdmin);
router.get('/admin/orders/:id', controllers_1.default.getOrderDetail);
router.post('/admin/orders/:id', controllers_1.default.updateOrderDetail);
const adminRouter = router;
exports.default = adminRouter;
