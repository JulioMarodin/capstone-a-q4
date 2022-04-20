import { Request, Response } from 'express';
import { AuthorsRepository } from '../../repositories';

const createAuthorController = async (req: Request, res: Response) => {
  try {
    const author = await new AuthorsRepository().saveAuthor(req.validated.name);
    return res.status(200).json(author);
  } catch (err) {
    console.log(err);
  }
};

export default createAuthorController;
