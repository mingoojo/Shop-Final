"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const controllers_1 = __importDefault(require("../controllers"));
const router = express_1.default.Router();
router.get('/users', controllers_1.default.getUsers);
router.post('/login', [
    (0, express_validator_1.check)('email').normalizeEmail().isEmail(),
    (0, express_validator_1.check)('password').isLength({ min: 6 }),
], controllers_1.default.login);
router.delete('/logout', controllers_1.default.logout);
router.post('/signup', [
    (0, express_validator_1.check)('name').not().isEmpty(),
    (0, express_validator_1.check)('email').normalizeEmail().isEmail(),
    (0, express_validator_1.check)('password').isLength({ min: 6 }),
], controllers_1.default.signup);
router.get('/users/me', controllers_1.default.checkToken);
const authenticationRouter = router;
exports.default = authenticationRouter;
