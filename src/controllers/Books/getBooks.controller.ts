import { Request, Response } from 'express';
import { BooksRepository } from '../../repositories';
import { paginate } from '../../services';

const getBooksController = async (req:Request, res:Response) => {
  const books = await new BooksRepository().findBooks();
  return res.status(200).json(paginate(books, req.query.page, req.query.perPage));
};

export default getBooksController;
