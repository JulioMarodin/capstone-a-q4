import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';

import { BooksRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';

const deleteBookController = async (req:Request, res:Response) => {
  try {
    const book: DeleteResult = await new BooksRepository().deleteBook(req.params);
    if (!book.affected) {
      throw new ErrorHandler(404, 'Book not found');
    }
    return res.status(204).json();
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default deleteBookController;
