import { Router } from 'express';
import { verifyAuth, validateShape } from '../../middlewares';
import { getAuthor, createAuthorController } from '../../controllers/Authors';
import { authorShape } from '../../shapes';

const routesAuthor = Router();

routesAuthor.post('', validateShape(authorShape), createAuthorController);

routesAuthor.get('/author/:name', verifyAuth, getAuthor);

export default routesAuthor;
