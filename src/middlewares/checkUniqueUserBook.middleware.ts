import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { UserBooks } from '../entities/UserBooks';
import { BooksRepository } from '../repositories';
import { ErrorHandler } from '../services/errors';

const checkUniqueUserBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const listUserBooks = await getRepository(UserBooks).find({
      where: { user: req.user.id },
    });
    const book = await new BooksRepository().findBookByName(req.body.book);

    if (!book) {
      throw new ErrorHandler(404, 'Book not found');
    }

    const filterBook = listUserBooks.filter((item) => item.book.id === book.id);

    if (filterBook) {
      throw new ErrorHandler(400, 'There is already a record');
    }
    return next();
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default checkUniqueUserBook;
