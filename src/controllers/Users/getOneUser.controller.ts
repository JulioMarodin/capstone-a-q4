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
    const userPosts = await new PostsRepository().findPostsByUser(user.id);

    const favoritesBooks = userBooks.filter((item) => item.favorites === true).length;
    const readBooks = userBooks.filter((item) => item.read === true).length;
    const readingBooks = userBooks.filter((item) => item.reading === true).length;
    const wantRead = userBooks.filter((item) => item.want_to_read === true).length;

    const review = userPosts.filter((item) => item.type_id.type === 'resenha').length;
    const comment = userPosts.filter((item) => item.type_id.type === 'comentario').length;
    const notes = userPosts.filter((item) => item.type_id.type === 'marcacao').length;

    if (!user) {
      throw new ErrorHandler(404, 'User not found');
    }

    const relationalBooks = {
      favorites_books: favoritesBooks,
      read_books: readBooks,
      reading: readingBooks,
      want_to_read: wantRead,
      // favorites_books_list: '',
      // read_books_list: '',
      // want_to_read_list: '',
    };

    const relationalPosts = {
      review_posts: review,
      comment_posts: comment,
      notes_posts: notes,
    };

    console.log(userBooks[0]);
    console.log(relationalBooks);

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
      relational_books: relationalBooks,
      relational_posts: relationalPosts,
    });
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default getOneUser;