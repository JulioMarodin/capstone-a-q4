import { Request, Response } from 'express';
import { GenreRepository } from '../../repositories';

const createGenreController = async (req: Request, res: Response) => {
  try {
    const genre = new GenreRepository().createGenre(req.body);

    await new GenreRepository().saveGenre(genre);

    return res.status(201).json(genre);
  } catch (err) {
    return res.status(404).json({ error: err.driverError.detail });
  }
};

export default createGenreController;
