import { Router } from 'express';

import { verifyAuth, validateShape } from '../../middlewares';
import { userBookShape } from '../../shapes';
import { createUserBookController } from '../../controllers/UserBooks';

const routesUserBooks = Router();
routesUserBooks.post('', verifyAuth, validateShape(userBookShape), createUserBookController);

export default routesUserBooks;
