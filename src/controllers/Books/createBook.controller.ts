/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { BooksRepository } from '../../repositories';

const createBookController = async (req: Request, res: Response) => {
  try {
    const book = new BooksRepository().createBook(req.validated);
    await new BooksRepository().saveBook(book);
    const bookToReturn = JSON.parse(JSON.stringify(book));
    delete bookToReturn.user;
    delete bookToReturn.__author__;
    return res.status(201).json(bookToReturn);
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default createBookController;
