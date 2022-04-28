import { Request, Response } from 'express';
import { UserBooksRepository } from '../../repositories';
import { IData } from '../../repositories/UserBooksRepository/interfaces';
import { ErrorHandler } from '../../services/errors';

const getUserBookController = async (req: Request, res: Response) => {
  try {
    const userBook = await new UserBooksRepository().findUserBook(req.params as unknown as IData);
    if (!userBook) {
      throw new ErrorHandler(404, 'userBook not found');
    }
    return res.status(200).json(userBook);
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default getUserBookController;
