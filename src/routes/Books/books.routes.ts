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
} from '../../middlewares';
import { paginateResult } from '../../services';

import { bookShape, bookUpdateShape } from '../../shapes';

const routesBooks = Router();

routesBooks.post('', verifyAuth, validateShape(bookShape), checkUniqueTitleAndIsbnBook, createBookController);

routesBooks.get('/:id', getBookController);

routesBooks.get('', paginateResult, getBooksController);

routesBooks.delete('/:id', verifyAuth, isAdmin, deleteBookController);

routesBooks.patch('/:id', verifyAuth, isAdmin, validateShape(bookUpdateShape), updateBookController);

export default routesBooks;
