/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import supertest from 'supertest';
import {generateUser, ConnectionTest} from '..';
import app from '../../app';

describe('Test route Author', () => {
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

    it('Should delete an author', async () => {
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

      const authorObj = {name: 'Sejesfredo'};

      const authorRet = await supertest(app)
      .post('/api/authors')
      .set('Authorization', `Bearer ${token}`)
      .send({...authorObj});

      const authorDel = await supertest(app)
      .delete('/api/authors/Sejesfredo')
      .set('Authorization', `Bearer ${token}`);

      expect(authorDel.status).toBe(204);
    });
});
