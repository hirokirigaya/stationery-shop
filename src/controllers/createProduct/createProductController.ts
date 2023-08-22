import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export const createProductController = async (req: Request, res: Response) => {
  const { name, description, price, category } = req.body;

  if (!name) {
    return res.status(422).send({ message: 'Name is required!' });
  }
  if (!description) {
    return res.status(422).send({ message: 'Description is required!' });
  }
  if (!price) {
    return res.status(422).send({ message: 'Price is required!' });
  }
  if (typeof price !== 'number') {
    return res.status(422).send({ message: 'Price must be a number!' });
  }
  if (!category) {
    return res.status(422).send({ message: 'Category is required!' });
  }

  const product = {
    name,
    description,
    price,
    category,
  };

  try {
    await Product.create(product);
    return res.status(201).json({ message: 'Product created successfully' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal server error' });
  }
};
