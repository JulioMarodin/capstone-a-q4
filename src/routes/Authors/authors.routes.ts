import { Router } from 'express';
import { verifyAuth, isAdmin, validateShape } from '../../middlewares';
import { getAuthor, deleteAuthor, createAuthorController } from '../../controllers/Authors';
import { authorShape } from '../../shapes';

const routesAuthor = Router();

routesAuthor.post('', validateShape(authorShape), createAuthorController);

routesAuthor.get('/authors/:name', verifyAuth, getAuthor);

routesAuthor.delete('/authors/:name', verifyAuth, isAdmin, deleteAuthor);

export default routesAuthor;
