/* eslint-disable no-undef */
import supertest from 'supertest';
import { NextFunction, Request, Response } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import {generateUser, ConnectionTest} from '..';
import { validateShape } from '../../middlewares';
import {userShape} from '../../shapes';

describe('Test validateShape', () => {
    const mockReq: Partial<Request> = {};
    const mockRes: Partial<Response> = {};
    let mockNext: Partial<NextFunction>;

    beforeAll(async () => {
        await new ConnectionTest().create();
      });

    afterAll(async () => {
       await new ConnectionTest().clear();
       await new ConnectionTest().close();
    });

    beforeEach(async () => {
        await new ConnectionTest().clear();
        mockNext = jest.fn();
        mockRes.json = jest.fn().mockReturnValue(mockRes);
        mockRes.status = jest.fn().mockReturnValue(mockRes);
    });

    it('Teste return 400', () => {
        mockReq.body = {
            name: faker.name.firstName().toLowerCase(),
        };
        validateShape(userShape)(
            mockReq as Request,
            mockRes as Response,
            mockNext as NextFunction,
        );
        expect(mockNext).toBeCalled();
        expect(mockNext).toBeCalledTimes(1);
        expect(mockNext).toBeCalledWith(expect.objectContaining({statusCode: 400, message: 'Unauthorized'}));
    });
});
