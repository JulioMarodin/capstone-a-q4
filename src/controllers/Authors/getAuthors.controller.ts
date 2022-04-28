import { Request, Response } from 'express';
import { AuthorsRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';

const getAuthors = async (req:Request, res:Response) => {
    try {
        const results = await new AuthorsRepository().findAuthors(
            req.paginate.name,
            req.paginate.page,
            req.paginate.limit,
            );
        if (!results) {
            throw new ErrorHandler(404, 'Any authors were found');
        }
        const authors: any[] = [];
        results.forEach(async (a) => {
            const serializedAuthor = {
                id: a.id,
                name: a.name,
                country: a.country,
                birthday: a.birthday,
                death_date: a.death_date,
                books: (await a.books.map((b) => b.title)),
            };
            authors.push(serializedAuthor);
        });
        return res.status(200)
        .json({ response: await authors, navigate_links: req.navlinks });
    } catch (err) {
        return res.status(err.statusCode).json({ error: err.message });
    }
};

export default getAuthors;
