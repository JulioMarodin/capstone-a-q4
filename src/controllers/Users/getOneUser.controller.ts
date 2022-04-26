/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
/* eslint-disable no-underscore-dangle */
/* eslint-disable object-shorthand */
import { Request, Response } from 'express';

import { PostsRepository, UserBooksRepository, UsersRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const getOneUser = async (req: Request, res: Response) => {
  try {
    const user = await new UsersRepository().findUser(req.params.name);
    const userBooks = await new UserBooksRepository().findUserBookById(user.id);
    // const userPosts = await new PostsRepository().findPost()

    if (!user) {
      throw new ErrorHandler(404, 'User not found');
    }

    const userBookToReturn = JSON.parse(JSON.stringify(userBooks));
    const userToReturn = JSON.parse(JSON.stringify(user));
    delete userBookToReturn.user_id;
    delete userBookToReturn.book_id;

    userBookToReturn.forEach((item) => {
      item['book_id'] = item.__book_id__.id;
      item['user_id'] = item.__user_id__.id;
      delete item.__user_id__;
      delete item.__book_id__;
    });
    delete userToReturn.password;

    return res.status(200).json({
      user: userToReturn,
      relational_books: userBookToReturn,
      relational_posts: '',
    });
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default getOneUser;
