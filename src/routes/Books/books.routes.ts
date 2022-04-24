import { Router } from 'express';

import {
   isAdmin, verifyAuth, validateShape, checkUniqueTitleAndIsbnBook,
   } from '../../middlewares';
import {
  createBookController,
  deleteBookController,
} from '../../controllers/Books';
import { bookShape } from '../../shapes';

const routesBooks = Router();

routesBooks.post('', verifyAuth, validateShape(bookShape), checkUniqueTitleAndIsbnBook, createBookController);
routesBooks.delete('/:id', verifyAuth, isAdmin, deleteBookController);

export default routesBooks;
