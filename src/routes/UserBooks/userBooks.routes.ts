import { Router } from 'express';

import { verifyAuth, validateShape, checkIsUserOrAdminMiddleware } from '../../middlewares';
import { userBookShape } from '../../shapes';
import {
     createUserBookController, getUserBookController, UpdateUserBooksController, deleteUserBookController,
     } from '../../controllers/UserBooks';
import { UserBooks } from '../../entities/UserBooks';

const routesUserBooks = Router();
routesUserBooks.post('', verifyAuth, validateShape(userBookShape), createUserBookController);
routesUserBooks.get('/:id', verifyAuth, getUserBookController);
routesUserBooks.patch('/:id', verifyAuth, checkIsUserOrAdminMiddleware(UserBooks), UpdateUserBooksController);
routesUserBooks.delete('/:id', verifyAuth, checkIsUserOrAdminMiddleware(UserBooks), deleteUserBookController);

export default routesUserBooks;
