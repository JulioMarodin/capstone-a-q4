import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../services/errors';

const isAdmin = (req: Request, _res: Response, next: NextFunction) => {
  const { user } = req;
  try {
    if (!user.admin) {
      throw new ErrorHandler(401, "You're Unauthorized");
    }
    return next();
  } catch (err) {
    console.log('is admin middleware', err);
    return next(err);
  }
};

export default isAdmin;
