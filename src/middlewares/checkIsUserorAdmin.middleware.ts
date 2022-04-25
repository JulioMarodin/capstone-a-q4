import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { ErrorHandler } from '../services/errors';

const checkIsUserOrAdminMiddleware = (entity) => async (req:Request, _res:Response, next: NextFunction) => {
    try {
        const userBook : any = await getRepository(entity).findOne(req.params.id);
        const { user } = req;
        if (userBook.user_id !== user.id && !user.admin) {
            throw new ErrorHandler(403, 'It is not possible to change the data of other users.');
        }
        return next();
    } catch (err) {
        return next(err);
    }
};

export default checkIsUserOrAdminMiddleware;
