import { Router } from 'express';
import { verifyAuth, isAdmin, validateShape } from '../../middlewares';
import {
 getAuthor,
 deleteAuthor,
 createAuthorController,
 getAuthors,
 updateAuthorController,
} from '../../controllers/Authors';
import { authorShape, authorUpdateShape } from '../../shapes';
import { paginateResult } from '../../services';

const routesAuthor = Router();

routesAuthor.post('', verifyAuth, isAdmin, validateShape(authorShape), createAuthorController);

routesAuthor.get('/:name', getAuthor);

routesAuthor.get('', paginateResult, getAuthors);

routesAuthor.patch('/:name', verifyAuth, isAdmin, validateShape(authorUpdateShape), updateAuthorController);

routesAuthor.delete('/:name', verifyAuth, isAdmin, deleteAuthor);

export default routesAuthor;
