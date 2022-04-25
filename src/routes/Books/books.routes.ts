import { Router } from 'express';
import {
   isAdmin, verifyAuth, validateShape, checkUniqueTitleAndIsbnBook, checkIsUserorAdminMiddleware,
   } from '../../middlewares';
import {
  createBookController,
  deleteBookController,
  updateBookController,
  getBooksController,
  getBookController,
} from '../../controllers/Books';
import { bookShape } from '../../shapes';

const routesBooks = Router();

routesBooks.post('', verifyAuth, validateShape(bookShape), checkUniqueTitleAndIsbnBook, createBookController);

routesBooks.get('', verifyAuth, getBooksController);

routesBooks.get('/:id', verifyAuth, getBookController);

routesBooks.delete('/:id', verifyAuth, isAdmin, deleteBookController);
routesBooks.patch('/:id', verifyAuth, checkIsUserorAdminMiddleware, updateBookController);

export default routesBooks;
