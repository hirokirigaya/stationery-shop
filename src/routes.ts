import { Router } from 'express';
import { fetchProductsController } from './controllers/fetchProducts/fetchProductsController';
import { createProductController } from './controllers/createProduct/createProductController';

const router = Router();

router.get('/products/fetch', fetchProductsController);
router.post('/products/create', createProductController);

export { router };
