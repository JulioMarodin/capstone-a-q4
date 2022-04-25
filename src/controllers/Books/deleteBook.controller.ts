import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';

import { BooksRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const deleteBookController = async (req:Request, res:Response) => {
  try {
    const book: DeleteResult = await new BooksRepository().deleteBook(req.params);
    if (!book.affected) {
      throw new ErrorHandler(404, 'Book not found');
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default deleteBookController;
