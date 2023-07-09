import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.get('/products', controllers.getProducts);
router.get('/products/:id', controllers.getProductDetail);

router.get('/categories', controllers.getCategories);
router.post('/cart/line-items', controllers.addToCart);

const productRouter = router;
export default productRouter;
