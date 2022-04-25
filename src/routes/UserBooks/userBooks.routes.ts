import { Router } from 'express';

import { verifyAuth, validateShape, checkMySelfMiddleware } from '../../middlewares';
import { userBookShape, userBookUpdateShape } from '../../shapes';
import {
  createUserBookController,
  getUserBookController,
  UpdateUserBooksController,
  deleteUserBookController,
} from '../../controllers/UserBooks';
import { UserBooks } from '../../entities/UserBooks';

const routesUserBooks = Router();
routesUserBooks.post('', verifyAuth, validateShape(userBookShape), createUserBookController);
routesUserBooks.get('/:id', verifyAuth, getUserBookController);
routesUserBooks.patch(
  '/:id',
  verifyAuth,
  checkMySelfMiddleware(UserBooks),
  validateShape(userBookUpdateShape),
  UpdateUserBooksController,
);
routesUserBooks.delete('/:id', verifyAuth, checkMySelfMiddleware(UserBooks), deleteUserBookController);

export default routesUserBooks;
