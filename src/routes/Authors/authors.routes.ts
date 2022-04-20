import { Router } from 'express';
import { verifyAuth } from '../../middlewares';
import { getAuthor } from '../../controllers/authors';

const routesAuthor = Router();

routesAuthor.get('/author/:id', verifyAuth, getAuthor);

export default routesAuthor;
