import { Router } from 'express';
import { verifyAuth, isAdmin, validateShape } from '../../middlewares';
import {
 getAuthor, deleteAuthor, createAuthorController, getAuthors, updateAuthorController,
} from '../../controllers/Authors';
import { authorShape } from '../../shapes';

const routesAuthor = Router();

routesAuthor.post('', validateShape(authorShape), createAuthorController);

routesAuthor.get('/:name', verifyAuth, getAuthor);

routesAuthor.get('', verifyAuth, getAuthors);

routesAuthor.patch('/:name', verifyAuth, isAdmin, updateAuthorController);

routesAuthor.delete('/:name', verifyAuth, isAdmin, deleteAuthor);

export default routesAuthor;
