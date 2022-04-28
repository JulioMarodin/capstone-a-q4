import { Request, Response } from 'express';
import { updateBookToPostOrPatchUserBook } from '../../services';
import { UserBooksRepository } from '../../repositories';
import { IData } from '../../repositories/UserBooksRepository/interfaces';
import { ErrorHandler } from '../../services/errors.services';

const UpdateUserBooksController = async (req:Request, res:Response) => {
    try {
        const nowUserBook = await new UserBooksRepository().findUserBook({ id: parseInt(req.params.id, 10) });
        const data = await new UserBooksRepository().updateUserBooks(req.params as unknown as IData, req.validated);
        if (!data.affected) {
            throw new ErrorHandler(404, 'UserBook not found');
        }

        const userBook = await new UserBooksRepository().findUserBook({ id: parseInt(req.params.id, 10) });
        updateBookToPostOrPatchUserBook(req.method, req.body, nowUserBook);
        return res.status(200).json(userBook);
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

export default UpdateUserBooksController;
