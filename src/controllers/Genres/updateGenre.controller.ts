import { Request, Response } from 'express';

import { GenreRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';

const updateGenreController = async (req:Request, res:Response) => {
  try {
    const genre = await new GenreRepository().updateGenre(req.params, req.body);
    if (!genre.affected) {
      throw new ErrorHandler(404, 'Genre not found');
    }
    const genreUpdate = await new GenreRepository().findGenre(req.params.name);
    return res.status(200).json(genreUpdate);
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default updateGenreController;
