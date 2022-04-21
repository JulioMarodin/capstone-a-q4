import { Request, Response } from 'express';
import { AuthorsRepository } from '../../repositories';
import { paginate } from '../../services';

const getAuthors = async (req:Request, res:Response) => {
    const authors = await new AuthorsRepository().findAuthors();
    return res.status(200)
    .json(paginate(authors, req.query.page, req.query.perPage));
};

export default getAuthors;
