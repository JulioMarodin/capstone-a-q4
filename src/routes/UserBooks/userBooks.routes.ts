import { Router } from 'express';

import { verifyAuth, validateShape } from '../../middlewares';
import { userBookShape } from '../../shapes';
import { createUserBookController, getUserBookController } from '../../controllers/UserBooks';

const routesUserBooks = Router();
routesUserBooks.post('', verifyAuth, validateShape(userBookShape), createUserBookController);
routesUserBooks.get('/:id', getUserBookController);

export default routesUserBooks;
