import { Request, Response } from 'express';
import { BooksRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const getBookController = async (req: Request, res: Response) => {
  try {
    const book = await new BooksRepository().findBook(Number(req.params.id));

    if (!book) {
      throw new ErrorHandler(404, 'Book not found');
    }

    return res.status(200).json(book);
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default getBookController;
