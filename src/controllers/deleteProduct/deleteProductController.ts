import { Request, Response } from 'express';
import { Product } from '@/models/Product';

const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Product.deleteOne({
      _id: id,
    });
    return res.status(200).send({ message: 'Product deleted successfully!' });
  } catch (err) {
    return res.status(400).send({ message: 'Product not found!' });
  }
};

export { deleteProductController };
