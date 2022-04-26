import { Router } from 'express';

import { verifyAuth, validateShape, isAdminOrCreator } from '../../middlewares';
import { userBookShape, userBookUpdateShape } from '../../shapes';
import {
  createUserBookController,
  getUserBookController,
  UpdateUserBooksController,
  deleteUserBookController,
} from '../../controllers/UserBooks';
import { UserBooks } from '../../entities/UserBooks';

const routesUserBooks = Router();
routesUserBooks.post('', validateShape(userBookShape), createUserBookController);
routesUserBooks.get('/:id', verifyAuth, getUserBookController);
routesUserBooks.patch(
  '/:id',
  validateShape(userBookUpdateShape),
  UpdateUserBooksController,
);
routesUserBooks.delete('/:id', verifyAuth, isAdminOrCreator(UserBooks), deleteUserBookController);

export default routesUserBooks;
