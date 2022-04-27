import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Books } from '../entities/Books';
import { AuthorsRepository, GenreRepository, PublisherRepository } from '../repositories';
import { IGenres } from '../repositories/Genres/interfaces';
import { ErrorHandler } from '../services/errors';
import { makeTitle } from '../utils';

const checkUniqueTitleAndIsbnBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookForTitle = await getRepository(Books).findOne({ where: { title: makeTitle(req.body.title) } });
    const bookForIsbn = await getRepository(Books).findOne({ where: { isbn: req.body.isbn } });

    if (bookForTitle || bookForIsbn) {
      throw new ErrorHandler(409, 'Title and/or isbn already registered');
    }

    const bookForAuthor = await new AuthorsRepository().findAuthor(req.validated.author);
    if (!bookForAuthor) {
      const author = await new AuthorsRepository().createAuthor({ name: req.validated.author });
      await new AuthorsRepository().saveAuthor(author);
      req.validated.author = author;
      console.log(req.validated.author);
    } else {
      req.validated.author = bookForAuthor;
      console.log(req.validated.author);
    }

    const bookForPublisher = await new PublisherRepository().findPublisherByName(req.validated.publisher);
    if (!bookForPublisher) {
      const publisher = await new PublisherRepository().createPublisher({ name: req.validated.publisher });
      await new PublisherRepository().savePublisher(publisher);
      req.validated.publisher = publisher;
    } else {
      req.validated.publisher = bookForPublisher;
    }

    req.validated.user = req.user;

    console.log('geral', req.validated);
    return next();
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default checkUniqueTitleAndIsbnBook;
