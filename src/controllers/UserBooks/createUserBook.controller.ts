import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { UserBooksRepository } from '../../repositories';
import { updateBookToPostOrPatchUserBook } from '../../services';
import { Users } from '../../entities/Users';
import { Books } from '../../entities/Books';

const createUserBookController = async (req: Request, res: Response) => {
  try {
    const userBook = new UserBooksRepository().createUserBooks(req.body);
    const user = await getRepository(Users).findOne(userBook.user);
    const book = await getRepository(Books).findOne(userBook.book);
    await new UserBooksRepository().saveUserBooks(userBook);
    updateBookToPostOrPatchUserBook(req.method, req.body);

    const userBookReturn: any = JSON.parse(JSON.stringify(userBook));
    userBookReturn.book = book.title;
    userBookReturn.user = user.name;

    const userBookToReturn = JSON.parse(JSON.stringify(userBookReturn));

    return res.status(201).json(userBookToReturn);
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default createUserBookController;
