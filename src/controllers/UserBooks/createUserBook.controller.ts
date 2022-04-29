import { Request, Response } from 'express';
import { BooksRepository, UserBooksRepository } from '../../repositories';
import { updateBookToPostOrPatchUserBook } from '../../services';

const createUserBookController = async (req: Request, res: Response) => {
  try {
    const userBook = new UserBooksRepository().createUserBooks(req.body);

    await new UserBooksRepository().saveUserBooks(userBook);
    updateBookToPostOrPatchUserBook(req.method, req.body);

    const userBookToReturn = JSON.parse(JSON.stringify(userBook));
    console.log('AQUI', userBookToReturn);
    console.log('USERBOOK', userBook);
    console.log('USER', req.user.name);
    // userBookToReturn.user = req.user.name;
    // userBookToReturn.book = book.title;

    return res.status(201).json(userBookToReturn);
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default createUserBookController;
