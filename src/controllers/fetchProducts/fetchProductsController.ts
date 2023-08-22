import { Request, Response } from 'express';
import { Product } from '../../models/Product';

const fetchProductsController = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();

    if (!products) {
      return res.status(404).send({ message: 'Products not found' });
    }

    return res.status(200).send(products);
  } catch (err) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export { fetchProductsController };
