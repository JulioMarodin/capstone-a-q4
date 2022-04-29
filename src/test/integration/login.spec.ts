/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import dotenv from 'dotenv';
import supertest from 'supertest';
import {generateUser, ConnectionTest} from '..';
import app from '../../app';

dotenv.config();

describe('Test route Post', () => {
    beforeAll(async () => {
        await new ConnectionTest().create();
    });

    afterAll(async () => {
        await new ConnectionTest().clear();
        await new ConnectionTest().close();
    });

    beforeEach(async () => {
        await new ConnectionTest().clear();
    });

    it('Should login user', async () => {
      const user = generateUser();
      const {email, password} = user;
      const resp = await supertest(app)
      .post('/api/users')
      .send(user);

      const login = await supertest(app)
      .post('/api/login')
      .send({email, password});

      expect(login.status).toBe(200);
      expect(login.body).toHaveProperty('token');
    });
});
