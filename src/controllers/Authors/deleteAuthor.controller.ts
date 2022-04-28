import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';
import AuthorRepository from '../../repositories/Authors';
import { ErrorHandler } from '../../services/errors.services';

const deleteAuthor = async (req:Request, res:Response) => {
    try {
        const nElements:DeleteResult = await new AuthorRepository().deleteAuthor(req.params);
        if (!nElements.affected) {
            throw new ErrorHandler(404, 'Author not found');
        }
        return res.status(204).json();
    } catch (err) {
        return res.status(err.statusCode).json({ error: err.message });
    }
};
export default deleteAuthor;
