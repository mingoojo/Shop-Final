import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.get('/categories', controllers.getCategories);
router.post('/categories', controllers.createCategory);

router.get('/products', controllers.getProducts);
router.get('/products/:id', controllers.getProductDetail);
router.post('/products', controllers.createProduct);

const productRouter = router;
export default productRouter;
