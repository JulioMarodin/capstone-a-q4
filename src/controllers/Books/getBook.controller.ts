import { Request, Response } from 'express';
import { BooksRepository } from '../../repositories';

const getBookController = async (req:Request, res:Response) => {
  const book = await new BooksRepository().findBooks();
  return res.status(200).json(book);
};

export default getBookController;
