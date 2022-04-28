import { Request } from 'express';
import { AuthorsRepository } from '../repositories';

const createAuthorIfNotExists = async (req: Request) => {
  let author = await new AuthorsRepository().findAuthor(req.validated.author);
  if (!author) {
    author = await new AuthorsRepository().createAuthor({ name: req.validated.author });
    await new AuthorsRepository().saveAuthor(author);
    req.validated.author = author;
  } else {
    req.validated.author = author;
  }
};

export default createAuthorIfNotExists;
