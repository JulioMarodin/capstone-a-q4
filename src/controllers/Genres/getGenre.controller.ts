import { Request, Response } from 'express';
import { GenreRepository } from '../../repositories';

const getGenreController = async (req:Request, res:Response) => {
    const genre = await new GenreRepository().findGenreById(req.params.id);
    return res.status(200).json(genre);
};

export default getGenreController;
