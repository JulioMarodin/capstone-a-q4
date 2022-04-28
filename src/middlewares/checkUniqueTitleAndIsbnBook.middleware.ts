import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Books } from '../entities/Books';
import { AuthorsRepository, GenreRepository, PublisherRepository } from '../repositories';
import { IGenres } from '../repositories/Genres/interfaces';
import { ErrorHandler } from '../services/errors.services';
import { makeTitle } from '../utils';

const checkUniqueTitleAndIsbnBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookForTitle = await getRepository(Books).findOne({ where: { title: makeTitle(req.body.title) } });
    const bookForIsbn = await getRepository(Books).findOne({ where: { isbn: req.body.isbn } });

    if (bookForTitle || bookForIsbn) {
      throw new ErrorHandler(409, 'Title and/or isbn already registered');
    }

    return next();
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default checkUniqueTitleAndIsbnBook;
