import { Request, Response } from 'express';
import { BooksRepository } from '../../repositories';

const createBookController = async (req:Request, res:Response) => {
    const book = new BooksRepository().createBook(req.validated);
    await new BooksRepository().saveBook(book);
    return res.status(201).json(book);
};

export default createBookController;
