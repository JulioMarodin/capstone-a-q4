import { Router } from 'express';
import { verifyAuth, isAdmin, validateShape } from '../../middlewares';
import {
 getAuthor, deleteAuthor, createAuthorController, getAuthors,
} from '../../controllers/Authors';
import { authorShape } from '../../shapes';

const routesAuthor = Router();

routesAuthor.post('', validateShape(authorShape), createAuthorController);

routesAuthor.get('/:name', verifyAuth, getAuthor);

routesAuthor.get('', getAuthors);

routesAuthor.delete('/:name', verifyAuth, isAdmin, deleteAuthor);

export default routesAuthor;
