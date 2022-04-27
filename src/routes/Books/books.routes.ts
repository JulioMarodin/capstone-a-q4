import { Router } from 'express';
import {
  createBookController,
  deleteBookController,
  updateBookController,
  getBooksController,
  getBookController,
} from '../../controllers/Books';
import {
  isAdmin,
  verifyAuth,
  validateShape,
  checkUniqueTitleAndIsbnBook,
  isAdminOrCreator,
} from '../../middlewares';

import { bookShape } from '../../shapes';

const routesBooks = Router();

routesBooks.post('', verifyAuth, validateShape(bookShape), checkUniqueTitleAndIsbnBook, createBookController);

routesBooks.get('', verifyAuth, getBooksController);

routesBooks.get('/:id', verifyAuth, getBookController);

routesBooks.delete('/:id', verifyAuth, isAdmin, deleteBookController);

routesBooks.patch('/:id', verifyAuth, isAdminOrCreator, updateBookController);

export default routesBooks;
