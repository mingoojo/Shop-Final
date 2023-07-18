import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.get('/categories', controllers.getCategories);

router.get('/products', controllers.getProducts);
router.get('/products/:id', controllers.getProductDetail);
router.post('/products', controllers.createProduct);

router.get('/cart', controllers.getCart);
router.post('/cart', controllers.createCart);
router.post('/cart/delete', controllers.deleteCart);

router.post('/order', controllers.createOrder);
router.get('/orders', controllers.getOrders);
router.get('/orders/:id', controllers.getOrderDetail);

const productRouter = router;
export default productRouter;