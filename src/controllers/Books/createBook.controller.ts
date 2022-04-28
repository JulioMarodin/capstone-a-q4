/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { BooksRepository } from '../../repositories';

const createBookController = async (req: Request, res: Response) => {
  const book = new BooksRepository().createBook(req.validated);
  await new BooksRepository().saveBook(book);
  const bookToReturn = JSON.parse(JSON.stringify(book));
  delete bookToReturn.user;
  delete bookToReturn.__author__;
  return res.status(201).json(bookToReturn);
};

export default createBookController;
