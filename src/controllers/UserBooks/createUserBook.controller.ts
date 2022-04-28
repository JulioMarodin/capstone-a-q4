import { Request, Response } from 'express';
import { BooksRepository, UserBooksRepository } from '../../repositories';
import { updateBookToPostOrPatchUserBook } from '../../services';
import { ErrorHandler } from '../../services/errors.services';
import { makeTitle } from '../../utils';

const createUserBookController = async (req: Request, res: Response) => {
  try {
    const userBook = new UserBooksRepository().createUserBooks(req.validated);
    const bookReceived = makeTitle(req.body.book);
    const book = await new BooksRepository().findBookByName(bookReceived);

    userBook.user = req.user.id;
    userBook.book = book;

    await new UserBooksRepository().saveUserBooks(userBook);
    updateBookToPostOrPatchUserBook(req.method, req.validated);

    const userBookToReturn = JSON.parse(JSON.stringify(userBook));
    userBookToReturn.user = req.user.name;
    userBookToReturn.book = book.title;

    return res.status(201).json(userBookToReturn);
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default createUserBookController;
