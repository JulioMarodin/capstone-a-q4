import { UserBooks } from '../entities/UserBooks';
import { Users } from '../entities/Users';

const dataUserBooks = async (user:Users) => {
  const dataUser = await user.userBooks;
    let favoritesBooks: string[] | UserBooks[] = ['User hasn\'t any book associated'];
    let readBooks: string[] | UserBooks[] = ['User hasn\'t any book associated'];
    let readingBooks: string[] | UserBooks[] = ['User hasn\'t any book associated'];
    let wantRead: string[] | UserBooks[] = ['User hasn\'t any book associated'];

    if (dataUser) {
      favoritesBooks = dataUser.filter((item) => item.favorites === true);
      readBooks = dataUser.filter((item) => item.read === true);
      readingBooks = dataUser.filter((item) => item.reading === true);
      wantRead = dataUser.filter((item) => item.want_to_read === true);
    }

    const favoritesList = favoritesBooks.map((item) => {
      return item.book ? item.book.title : 'There\'s no favorites books';
    });
    const readBooksList = readBooks.map((item) => {
      return item.book ? item.book.title : 'There\'s no read books';
    });
    const wantReadLit = wantRead.map((item) => {
      return item.book ? item.book.title : 'There\'s no wish books list';
    });

    return {
      favorites_books: favoritesBooks.length,
      read_books: readBooks.length,
      reading: readingBooks.length,
      want_to_read: wantRead.length,
      favorites_books_list: favoritesList,
      read_books_list: readBooksList,
      want_to_read_list: wantReadLit,
    };
};

export default dataUserBooks;
