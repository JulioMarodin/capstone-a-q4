import { Request, Response } from 'express';
import { AuthorsRepository } from '../../repositories';

const createAuthorController = async (req: Request, res: Response) => {
  try {
    const author = await new AuthorsRepository().saveAuthor(req.validated);
    return res.status(201).json(author);
  } catch (err) {
    if (err.detail.includes('already exists')) {
      return res.status(409).json({ error: 'This name is already exists in authors\' list.' });
    }
    return res.status(500).json(err);
  }
};

export default createAuthorController;
