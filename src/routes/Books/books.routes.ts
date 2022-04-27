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

import { bookShape, bookUpdateShape } from '../../shapes';

const routesBooks = Router();

routesBooks.post('', verifyAuth, validateShape(bookShape), checkUniqueTitleAndIsbnBook, createBookController);

routesBooks.get('/:id', verifyAuth, getBookController);

routesBooks.get('', verifyAuth, getBooksController);

routesBooks.delete('/:id', verifyAuth, isAdmin, deleteBookController);

routesBooks.patch('/:id', verifyAuth, validateShape(bookUpdateShape), updateBookController);

export default routesBooks;
