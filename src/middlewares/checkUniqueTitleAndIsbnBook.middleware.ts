import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Books } from '../entities/Books';
import { AuthorsRepository, GenreRepository, PublisherRepository } from '../repositories';
import { IGenres } from '../repositories/Genres/interfaces';
import { ErrorHandler } from '../services/errors';
import { makeTitle } from '../utils';

const checkUniqueTitleAndIsbnBook = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  console.log('entrou');
  const bookForTitle = await getRepository(Books).findOne({ where: { title: makeTitle(req.body.title) } });
  const bookForIsbn = await getRepository(Books).findOne({ where: { isbn: req.body.isbn } });
  console.log(bookForTitle);
  console.log(bookForIsbn);
  if (bookForTitle || bookForIsbn) {
    throw new ErrorHandler(409, 'Title and/or isbn already registered');
  }
  const bookForAuthor = await new AuthorsRepository().findAuthor(req.validated.author);
  if (!bookForAuthor) {
    const author = await new AuthorsRepository().createAuthor(req.validated.author);
    await new AuthorsRepository().saveAuthor(author);
    req.validated.author = author;
  } else {
    req.validated.author = bookForAuthor;
  }

  const bookForPublisher = await new PublisherRepository().findPublisherByName(req.validated.publisher);
  if (!bookForPublisher) {
    const publisher = await new PublisherRepository().createPublisher(req.validated.publisher);
    await new PublisherRepository().savePublisher(publisher);
    req.validated.publisher = publisher;
  } else {
    req.validated.publisher = bookForPublisher;
  }

  return next();
  //   } catch (error) {
  //     return res.status(error.statusCode).json({ error: error.message });
  //   }
};

export default checkUniqueTitleAndIsbnBook;
