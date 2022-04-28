import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../services/errors.services';
import { checkEmail } from '../utils';

// Verifica se no corpo da requisição pretende-se editar a coluna admin, se houve então verifica se
//  quem está tentando editar é um isAdmin.
const checkUpdateUser = async (req:Request, _res:Response, next: NextFunction) => {
    try {
        if (Object.keys(req.body).filter((e) => e === 'admin').length === 1) {
            if (req.user.admin) {
                checkEmail(req.body);
                return next();
            }
            throw new ErrorHandler(401, 'Only admin can update admin status');
        }
        checkEmail(req.body);
        return next();
    } catch (error) {
        return next(error);
    }
};

export default checkUpdateUser;
