import { Router } from 'express';

import {
  isAdmin, verifyAuth, validateShape,
 } from '../../middlewares';
import {
  deleteBookController,
  updateBookController,
} from '../../controllers/Books';
import { updateBookShape } from '../../shapes';

const routesBooks = Router();

routesBooks.delete('/:id', verifyAuth, isAdmin, deleteBookController);
routesBooks.patch('/:id', verifyAuth, isAdmin, validateShape(updateBookShape), updateBookController);

export default routesBooks;
