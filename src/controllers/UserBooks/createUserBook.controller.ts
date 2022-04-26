import { Request, Response } from 'express';
import { UserBooksRepository } from '../../repositories';
import { updateBookToPostOrPatchUserBook } from '../../services';

const createUserBookController = async (req: Request, res: Response) => {
  try {
    const userBook = await new UserBooksRepository().saveUserBooks(req.validated);
    updateBookToPostOrPatchUserBook(req.method, req.body);
    return res.status(201).json(userBook);
  } catch (error) {
    if (error.detail.includes('already exists')) {
      /* Isso não pode acontecer aqui pq é só relacionamento */
      return res.status(409).json({ error: 'This userBook is already exists' });
    }
    return res.status(500).json(error);
  }
};

export default createUserBookController;
