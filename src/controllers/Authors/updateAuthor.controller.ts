import { Request, Response } from 'express';
import { AuthorsRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const updateAuthorController = async (req:Request, res:Response) => {
    try {
        const returnUpdate = await new AuthorsRepository().updateAuthor(req.params, req.body);
        if (!returnUpdate.affected) {
            throw new ErrorHandler(404, 'Author not found');
        }
        const AuthorUpdate = await new AuthorsRepository().findAuthor(req.params.name);
        return res.status(200).json(AuthorUpdate);
    } catch (err) {
        return res.status(err.statusCode).json({ error: err.message });
    }
};

export default updateAuthorController;
