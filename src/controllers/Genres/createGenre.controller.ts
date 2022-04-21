import { Request, Response } from 'express';
import { GenreRepository } from '../../repositories';

const createGenreController = async (req:Request, res:Response) => {
    const genre = new GenreRepository().createGenre(req.body);
    await new GenreRepository().saveGenre(genre);

    return res.status(201).json(genre);
};

export default createGenreController;
