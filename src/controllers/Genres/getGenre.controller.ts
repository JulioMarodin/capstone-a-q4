import { Request, Response } from 'express';
import { GenreRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const getGenreController = async (req: Request, res: Response) => {
  try {
    const genre = await new GenreRepository().findGenreById(parseInt(req.params.id, 10));
    if (!genre) {
      throw new ErrorHandler(404, 'Genre not found');
    }
    return res.status(200).json(genre);
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default getGenreController;
