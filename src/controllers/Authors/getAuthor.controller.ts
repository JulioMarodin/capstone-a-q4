import { Request, Response } from 'express';
import AuthorsRepository from '../../repositories/Authors/index';
import { ErrorHandler } from '../../services/errors';

const getAuthor = async (req:Request, res:Response) => {
    try {
        const user = await new AuthorsRepository().findAuthor(req.params.name);
        if (!user) {
            throw new ErrorHandler(404, 'Author not found');
        }
        return res.status(200).json({ user });
    } catch (err) {
        return res.status(err.statusCode).json({ error: err.message });
    }
};

export default getAuthor;
