import { UpdateResult, DeleteResult } from 'typeorm';
import { IUsers } from '../Users/interfaces';
import {IBooks} from '../Books/interfaces';

interface IUserBooks {
  id?: number;
  read: boolean;
  reading: boolean;
  want_to_read: boolean;
  favorites: boolean;
  rating: number;
  user: any;
  book: any;
}

interface IData {
  [key: string]: boolean | number;
}

interface IUserBooksRepo {
  createUserBooks: (data: IUserBooks) => IUserBooks;
  saveUserBooks: (data: IUserBooks) => void;
  findUserBook: (data: IData) => Promise<IUserBooks>;
  findUserBookById: (id: string) => Promise<Array<IUserBooks>>;
  findUserBooks: () => Promise<Array<IUserBooks>>;
  updateUserBooks: (data: IData, dataChange: IData) => Promise<UpdateResult>;
  deleteUserBooks: (data: IData) => Promise<DeleteResult>;
}

export { IUserBooks, IData, IUserBooksRepo };
