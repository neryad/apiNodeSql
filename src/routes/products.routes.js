import { Router } from 'express';
import {
  getProducts,
  createNewProduct,
} from '../controllers/products.controller';

const router = Router();

router.get('/products', getProducts);

router.post('/products', createNewProduct);

router.get('/products/:id');

router.delete('/products/:id');

router.put('/products/:id');

export default router;
