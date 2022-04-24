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

const routesBooks = Router();

routesBooks.post('', verifyAuth, validateShape(bookShape), checkUniqueTitleAndIsbnBook, createBookController);
routesBooks.delete('/:id', verifyAuth, isAdmin, deleteBookController);
routesBooks.get('', verifyAuth, getBooksController);

export default routesBooks;
