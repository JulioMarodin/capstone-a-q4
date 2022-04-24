import { Request, Response } from 'express';
import { BooksRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const updateBookController = async (req:Request, res:Response) => {
    try {
        const data = await new BooksRepository().updateBook(req.params, req.body);
        if (!data.affected) {
            throw new ErrorHandler(404, 'Book not found');
        }
        const book = await new BooksRepository().findBook(req.params.id);
        return res.status(200).json(book);
    } catch (err) {
        return res.status(err.statusCode).json({ err: err.message });
    }
};

export default updateBookController;
