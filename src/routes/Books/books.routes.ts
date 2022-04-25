import { Router } from 'express';

import {
   isAdmin, verifyAuth, validateShape, checkUniqueTitleAndIsbnBook,
   } from '../../middlewares';
import {
  createBookController,
  deleteBookController,
  getBooksController,
} from '../../controllers/Books';
import { bookShape } from '../../shapes';
import getBookController from '../../controllers/Books/getBook.controller';

const routesBooks = Router();

routesBooks.post('', verifyAuth, validateShape(bookShape), checkUniqueTitleAndIsbnBook, createBookController);

routesBooks.get('', verifyAuth, getBooksController);

routesBooks.get('/:id', verifyAuth, getBookController);

routesBooks.delete('/:id', verifyAuth, isAdmin, deleteBookController);

export default routesBooks;
