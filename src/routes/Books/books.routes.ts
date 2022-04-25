import { Router } from 'express';

import { isAdmin, verifyAuth, checkIsUserorAdminMiddleware } from '../../middlewares';
import {
  deleteBookController,
  updateBookController,
} from '../../controllers/Books';

const routesBooks = Router();

routesBooks.delete('/:id', verifyAuth, isAdmin, deleteBookController);
routesBooks.patch('/:id', verifyAuth, checkIsUserorAdminMiddleware, updateBookController);

export default routesBooks;
