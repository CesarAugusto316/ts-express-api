import supertest from 'supertest';
import { app } from '../src/app';


const agent = supertest.agent(app);

describe('sum module', () => {
  test('get hello world', async () => {
    const res = await agent.get('/');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
  });

  test('create a new user', async () => {
    const res = await agent.post('/').send({ name: 'carlotita' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('user');
  });
});
