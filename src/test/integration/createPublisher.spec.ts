/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import supertest from 'supertest';
import {generateUser, ConnectionTest} from '..';
import app from '../../app';

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

    it('Should create a publisher', async () => {
      const user = generateUser();
      user.admin = true;
      const {email, password} = user;
      const resp = await supertest(app)
      .post('/api/users')
      .send(user);

      const login = await supertest(app)
      .post('/api/login')
      .send({email, password});

      const {token} = login.body;

      const publisherObj = {name: 'Editora Famosa'};

      const publi = await supertest(app)
      .post('/api/publishers')
      .set('Authorization', `Bearer ${token}`)
      .send({...publisherObj});

      expect(publi.status).toBe(201);
    });
});
