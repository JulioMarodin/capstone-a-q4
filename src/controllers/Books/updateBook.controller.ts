import { Request, Response } from 'express';
import { BooksRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const updateBookController = async (req:Request, res:Response) => {
    try {
        const data = await new BooksRepository().updateBook(req.params, req.validated);
        if (!data.affected) {
            throw new ErrorHandler(404, 'Book not found');
        }
        const book = await new BooksRepository().findBook(Number(req.params.id));
        return res.status(200).json(book);
    } catch (err) {
        return res.status(err.statusCode).json({ error: err.message });
    }
};

export default updateBookController;
