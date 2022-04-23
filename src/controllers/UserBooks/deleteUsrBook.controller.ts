import { Request, Response } from 'express';
import { UserBooksRepository } from '../../repositories';
import { IData } from '../../repositories/UserBooksRepository/interfaces';
import { ErrorHandler } from '../../services/errors';

const deleteUserBookController = async (req:Request, res:Response) => {
    try {
        const data = await new UserBooksRepository().deleteUserBooks(req.params as unknown as IData);
        if (!data.affected) {
            throw new ErrorHandler(404, 'UserBook not found');
        }
        return res.status(200).json({ message: 'Deleted userBook' });
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

export default deleteUserBookController;
