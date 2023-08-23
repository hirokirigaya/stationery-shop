import request from 'supertest';
import { app } from '@/config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const db = process.env.DB_URL;

describe('Test route products/create', () => {
  beforeAll(() => {
    if (db) {
      mongoose.connect(db);
    }
  });
  afterAll(() => {
    mongoose.connection.close();
  });
  it('Should create a new product', async () => {
    const product = {
      name: 'Test',
      description: 'Test',
      price: 10,
      category: 'Test',
    };
    const res = await request(app).post('/products/create').send(product);

    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Product created successfully');
    expect(res.statusCode).toEqual(201);
  });

  it('Should return error if name is not provided', async () => {
    const product = {
      description: 'Test',
      price: 10,
      category: 'Test',
    };

    const res = await request(app).post('/products/create').send(product);

    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Name is required!');
    expect(res.statusCode).toEqual(422);
  });

  it('Should return error if description is not provided', async () => {
    const product = {
      name: 'Test',
      price: 10,
      category: 'Test',
    };

    const res = await request(app).post('/products/create').send(product);

    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Description is required!');
    expect(res.statusCode).toEqual(422);
  });

  it('Should return error if price is not provided', async () => {
    const product = {
      name: 'Test',
      description: 'Test',
      category: 'Test',
    };

    const res = await request(app).post('/products/create').send(product);

    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Price is required!');
    expect(res.statusCode).toEqual(422);
  });

  it('Should return error if price is not a number', async () => {
    const product = {
      name: 'Test',
      description: 'Test',
      price: '10',
      category: 'Test',
    };

    const res = await request(app).post('/products/create').send(product);

    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Price must be a number!');
    expect(res.statusCode).toEqual(422);
  });

  it('Should return error if category is not provided', async () => {
    const product = {
      name: 'Test',
      description: 'Test',
      price: 10,
    };

    const res = await request(app).post('/products/create').send(product);

    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toHaveProperty('Category is required!');
    expect(res.statusCode).toEqual(422);
  });
});
