import { Request, Response, NextFunction } from 'express';
import { AuthorsRepository } from '../repositories';

const checkUnique = (type, value) => async (_req: Request, res: Response, next: NextFunction) => {
  if (type === 'author') {
    const author = await new AuthorsRepository().findAuthor(value);
    if (author) {
      return res.status(400).json({ message: 'This author\'s name is already exists.' });
    }
  }
  return next();
};

export default checkUnique;
