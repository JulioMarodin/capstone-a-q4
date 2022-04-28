/* eslint-disable no-undef */
import { NextFunction, Request, Response } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import {generateUser, ConnectionTest} from '..';
import { isAdmin } from '../../middlewares';
import { ErrorHandler } from '../../services/errors';

describe('Test isAdmin', () => {
    const mockReq: Partial<Request> = {};
    const mockRes: Partial<Response> = {};
    const mockNext: Partial<NextFunction> = jest.fn();

    beforeAll(async () => {
        await new ConnectionTest().create();
      });

    afterAll(async () => {
       await new ConnectionTest().clear();
       await new ConnectionTest().close();
    });

    beforeEach(async () => {
        await new ConnectionTest().clear();
        mockRes.json = jest.fn().mockReturnValue(mockRes);
        mockRes.status = jest.fn().mockReturnValue(mockRes);
    });

    it('Teste return 401 Unauthorized', () => {
        mockReq.user = generateUser();
        const spy = jest.spyOn(mockNext, 'Router' as never).mockImplementation(() => { throw new ErrorHandler(401, 'Unauthorized'); });
        isAdmin(
            mockReq as Request,
            mockRes as Response,
            mockNext as NextFunction,
        );
        expect(mockNext).toBeCalled();
        expect(mockNext).toBeCalledTimes(1);
        expect(spy).toHaveBeenCalled();
        // expect(mockNext).toHaveBeenCalledWith(new ErrorHandler(401, 'Unauthorized');
    });
});
