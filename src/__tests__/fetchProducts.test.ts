import request from 'supertest';
import { app } from '../config';

describe('Test server', () => {
  it('should get main route', async () => {
    const res = await request(app).get('/');

    expect(res.body).toHaveProperty('message');
    expect(res.statusCode).toEqual(200);
  });
});
