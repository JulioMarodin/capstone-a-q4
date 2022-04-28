import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../services/errors.services';

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { user } = req;
  try {
    if (!user.admin) {
      throw new ErrorHandler(401, 'Unauthorized');
    }
    return next();
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default isAdmin;
