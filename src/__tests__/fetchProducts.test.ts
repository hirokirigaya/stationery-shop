import request from 'supertest';
import { app } from '../config';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ProductType } from '../types/ProductType';
dotenv.config();

const db = process.env.DB_URL;

describe('Test route products/fetch', () => {
  beforeAll(() => {
    if (db) {
      mongoose.connect(db);
    }
  });
  afterAll(() => {
    mongoose.connection.close();
  });

  it('Should get array of products', async () => {
    const res = await request(app).get('/products/fetch');

    expect(res.body).toBeInstanceOf(Array);

    res.body.forEach((product: ProductType) => {
      expect(product).toHaveProperty('_id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('__v');
    });

    expect(res.statusCode).toEqual(200);
  });
});
