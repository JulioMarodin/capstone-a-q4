import { Request, Response } from 'express';
import { GenreRepository } from '../../repositories';

const getGenreController = async (req:Request, res:Response) => {
    try {
        const genre = await new GenreRepository().findGenreById(parseInt(req.params.id, 10));
        return res.status(200).json(genre);
    } catch (err) {
        return res.status(err.statusCode).json({ error: err.message });
    }
};

export default getGenreController;
