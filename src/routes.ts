import { Router } from 'express';
import { fetchProductsController } from './controllers/fetchProducts/fetchProductsController';
import { createProductController } from './controllers/createProduct/createProductController';
import { deleteProductController } from './controllers/deleteProduct/deleteProductController';

const router = Router();

router.get('/products/fetch', fetchProductsController);
router.post('/products/create', createProductController);
router.delete('/products/delete/:id', deleteProductController);

export { router };
