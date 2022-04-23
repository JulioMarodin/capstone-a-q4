import { Router } from 'express';

import { isAdmin, verifyAuth } from '../../middlewares';
import {
  deleteBookController,
} from '../../controllers/Books';

const routesBooks = Router();

routesBooks.delete('/:id', verifyAuth, isAdmin, deleteBookController);

export default routesBooks;
