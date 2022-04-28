/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import supertest from 'supertest';
import {generateUser, ConnectionTest} from '..';
import app from '../../app';

describe('Teste de creation user', () => {
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

    it('Teste status 201', async () => {
        const resp = await supertest(app)
        .post('/api/users')
        .send(generateUser());
        expect(resp.status).toBe(201);
    });
});
