import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { UserBooks } from '../entities/UserBooks';
import { ErrorHandler } from '../services/errors';

const checkUniqueUserBook = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const listUserBooks = await getRepository(UserBooks).find({
            where: { user: req.body.user},
        });
        if (listUserBooks.length > 0) {
            throw new ErrorHandler(400, 'There is already a record');
        }
        return next();
    } catch (error) {
        return res.status(error.statusCode).json({error: error.message});
    }
};

export default checkUniqueUserBook;
