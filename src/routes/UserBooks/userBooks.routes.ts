import { Router } from 'express';

import { verifyAuth, validateShape, checkMySelfMiddleware } from '../../middlewares';
import { userBookShape } from '../../shapes';
import { createUserBookController, getUserBookController, UpdateUserBooksController } from '../../controllers/UserBooks';
import { UserBooks } from '../../entities/UserBooks';

const routesUserBooks = Router();
routesUserBooks.post('', verifyAuth, validateShape(userBookShape), createUserBookController);
routesUserBooks.get('/:id', getUserBookController);
routesUserBooks.patch('/:id', UpdateUserBooksController);

export default routesUserBooks;
