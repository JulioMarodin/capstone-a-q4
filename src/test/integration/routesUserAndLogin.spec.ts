/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import faker from '@faker-js/faker';
import supertest from 'supertest';
import {generateUser, ConnectionTest} from '..';
import app from '../../app';

describe('Teste de creation user', () => {
    const user = generateUser();
    user.admin = true;
    let token:string;
    let idUser:string;
    beforeAll(async () => {
        await new ConnectionTest().create();
    });

    afterAll(async () => {
        await new ConnectionTest().clear();
        await new ConnectionTest().close();
    });

    it('Teste create user return status 201', async () => {
        const resp = await supertest(app)
        .post('/api/users')
        .send(user);
        idUser = resp.body.id;
        expect(resp.status).toBe(201);
    });

    it('Test Login', async () => {
        const {email, password} = user;
        const resp = await supertest(app)
        .post('/api/login')
        .send({email, password});
        token = resp.body.token;
        expect(resp.status).toBe(200);
    });

    it('Test get Users', async () => {
        const resp = await supertest(app)
        .get('/api/users')
        .set({Authorization: `Bearer ${token}`});
        expect(resp.status).toBe(200);
    });

    it('Test get one User', async () => {
        const resp = await supertest(app)
        .get(`/api/users/${user.name}`)
        .set({Authorization: `Bearer ${token}`});
        expect(resp.status).toBe(200);
    });

    it('Test patch one User', async () => {
        const resp = await supertest(app)
        .patch(`/api/users/${idUser}`)
        .set({Authorization: `Bearer ${token}`})
        .send({city: 'Teresina'});
        expect(resp.status).toBe(200);
        expect(resp.body.city).toBe('Teresina');
    });

    it('Test delete one User', async () => {
        const resp = await supertest(app)
        .delete(`/api/users/${idUser}`)
        .set({Authorization: `Bearer ${token}`});
        expect(resp.status).toBe(204);
    });
});

describe('Errors in routes User and Login', () => {
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

    it('Teste create User return status 400', async () => {
        const user = generateUser();
        await supertest(app)
        .post('/api/users')
        .send(user);

        const resp = await supertest(app)
        .post('/api/users')
        .send(user);
        expect(resp.status).toBe(400);
    });
});
