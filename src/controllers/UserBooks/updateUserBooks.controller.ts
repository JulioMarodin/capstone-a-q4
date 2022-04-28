/* eslint-disable prefer-const */
import { Request, Response } from 'express';
import { updateBookToPostOrPatchUserBook } from '../../services';
import { BooksRepository, UserBooksRepository } from '../../repositories';
import { IData } from '../../repositories/UserBooksRepository/interfaces';
import { ErrorHandler } from '../../services/errors';
import { makeTitle } from '../../utils';

const UpdateUserBooksController = async (req: Request, res: Response) => {
  try {
    const nowUserBook = await new UserBooksRepository().findUserBook({ id: parseInt(req.params.id, 10) });
    let body = req.validated;

    if (body.book) {
      const bookReceived = makeTitle(req.body.book);
      const book = await new BooksRepository().findBookByName(bookReceived);
      if (!book) {
        throw new ErrorHandler(404, 'Book not found');
      }
      delete body.book;
      body = { book: book.id };
    }

    const data = await new UserBooksRepository().updateUserBooks(req.params as unknown as IData, body);

    if (!data.affected) {
      throw new ErrorHandler(404, 'UserBook not found');
    }

    const userBook = await new UserBooksRepository().findUserBook({ id: parseInt(req.params.id, 10) });

    const userBookToReturn = JSON.parse(JSON.stringify(userBook));

    delete userBookToReturn.user;
    delete userBookToReturn.book;
    userBookToReturn.book = userBook.book.title;
    userBookToReturn.user = userBook.user.name;

    updateBookToPostOrPatchUserBook(req.method, req.body, nowUserBook);
    return res.status(200).json(userBookToReturn);
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default UpdateUserBooksController;
