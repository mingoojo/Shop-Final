import express from 'express';
import { check } from 'express-validator';
import controllers from '../controllers';

const router = express.Router();

router.post('/admin/login', [
  check('email').normalizeEmail().isEmail(),
  check('password').isLength({ min: 6 }),
], controllers.adminLogin);

router.post('/admin/signup', [
  check('name').not().isEmpty(),
  check('email').normalizeEmail().isEmail(),
  check('password').isLength({ min: 6 }),
], controllers.adminSignup);

router.get('/admin/users/me', controllers.checkToken);

router.get('/admin/users', controllers.getUsers);
router.get('/admin/categories', controllers.getCategoriesAdmin);
router.get('/admin/categories/:id', controllers.getCategoryAdmin);
router.post('/admin/categories', controllers.createCategory);
router.post('/admin/categories/edit', controllers.updateCategory);

router.get('/admin/orders', controllers.getOrdersAdmin);
router.get('/admin/orders/:id', controllers.getOrderDetail);
router.post('/admin/orders/:id', controllers.updateOrderDetail);

const adminRouter = router;
export default adminRouter;
