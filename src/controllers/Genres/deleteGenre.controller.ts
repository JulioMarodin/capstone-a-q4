import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';

import GenreRepository from '../../repositories/Genres';
import { ErrorHandler } from '../../services/errors';

const deleteGenreController = async (req:Request, res:Response) => {
  try {
    const genre: DeleteResult = await new GenreRepository().deleteGenre(req.params);
    if (!genre.affected) {
      throw new ErrorHandler(404, 'Genre not found');
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default deleteGenreController;
