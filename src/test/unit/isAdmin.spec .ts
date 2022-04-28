/* eslint-disable no-undef */
import { NextFunction, Request, Response } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import {generateUser, ConnectionTest} from '..';
import { isAdmin } from '../../middlewares';

describe('Test isAdmin', () => {
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

    it('Teste return 401 Unauthorized', () => {
        mockReq.user = generateUser();
        isAdmin(
            mockReq as Request,
            mockRes as Response,
            mockNext as NextFunction,
        );
        expect(mockNext).toBeCalled();
        expect(mockNext).toBeCalledTimes(1);
        expect(mockNext).toHaveBeenCalledWith(expect.objectContaining({statusCode: 401, message: 'Unauthorized'}));
    });

    it('Teste não há return', () => {
        mockReq.user = generateUser();
        mockReq.user.admin = true;
        isAdmin(
            mockReq as Request,
            mockRes as Response,
            mockNext as NextFunction,
        );
        expect(mockNext).toBeCalled();
        expect(mockNext).toBeCalledTimes(1);
        expect(mockNext).toHaveBeenCalledWith();
    });
});
