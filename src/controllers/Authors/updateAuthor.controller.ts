/* eslint-disable quotes */
import { Request, Response } from 'express';
import { AuthorsRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';
import { makeTitle } from '../../utils';

const updateAuthorController = async (req: Request, res: Response) => {
  try {
    if (req.body.name) {
      const author = makeTitle(req.body.name);
      const checkAuthorExist = await new AuthorsRepository().findAuthor(author);
      if (checkAuthorExist) {
        throw new ErrorHandler(409, `${author} is already registered`);
      }
    }
    const returnUpdate = await new AuthorsRepository().updateAuthor(req.params, req.validated);
    if (!returnUpdate.affected) {
      throw new ErrorHandler(404, 'Author not found');
    }
    const AuthorUpdate = await new AuthorsRepository().findAuthor(req.params.name);
    return res.status(200).json(AuthorUpdate);
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default updateAuthorController;
