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

    const favoritesBooks = userBooks.filter((item) => item.favorites === true);
    const readBooks = userBooks.filter((item) => item.read === true);
    const readingBooks = userBooks.filter((item) => item.reading === true);
    const wantRead = userBooks.filter((item) => item.want_to_read === true);

    const favoritesList = favoritesBooks.map((item) => item.book.title);
    const readBooksList = readBooks.map((item) => item.book.title);
    const wantReadLit = wantRead.map((item) => item.book.title);

    const review = userPosts.filter((item) => item.type.type === 'resenha').length;
    const comment = userPosts.filter((item) => item.type.type === 'comentario').length;
    const notes = userPosts.filter((item) => item.type.type === 'marcacao').length;

    if (!user) {
      throw new ErrorHandler(404, 'User not found');
    }

    const relationalBooks = {
      favorites_books: favoritesBooks.length,
      read_books: readBooks.length,
      reading: readingBooks.length,
      want_to_read: wantRead.length,
      favorites_books_list: favoritesList,
      read_books_list: readBooksList,
      want_to_read_list: wantReadLit,
    };

    const relationalPosts = {
      review_posts: review,
      comment_posts: comment,
      notes_posts: notes,
    };

    const userBookToReturn = JSON.parse(JSON.stringify(userBooks));
    const userToReturn = JSON.parse(JSON.stringify(user));
    delete userBookToReturn.user_id;
    delete userBookToReturn.book_id;

    userBookToReturn.forEach((item) => {
      item['book'] = item.book.id;
      item['user'] = item.user.id;
      delete item.user;
      delete item.book;
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
