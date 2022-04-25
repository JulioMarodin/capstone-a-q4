import { Router } from 'express';
import { isAdmin, verifyAuth, checkIsUserorAdminMiddleware } from '../../middlewares';
import {
  createBookController,
  deleteBookController,
  updateBookController,
  getBooksController,
} from '../../controllers/Books';
import { bookShape } from '../../shapes';
import getBookController from '../../controllers/Books/getBook.controller';

const routesBooks = Router();

routesBooks.post('', verifyAuth, validateShape(bookShape), checkUniqueTitleAndIsbnBook, createBookController);

routesBooks.get('', verifyAuth, getBooksController);

routesBooks.get('/:id', verifyAuth, getBookController);

routesBooks.delete('/:id', verifyAuth, isAdmin, deleteBookController);
routesBooks.patch('/:id', verifyAuth, checkIsUserorAdminMiddleware, updateBookController);

export default routesBooks;
