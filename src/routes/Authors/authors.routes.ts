import { Router } from 'express';
import { verifyAuth, isAdmin } from '../../middlewares';
import { getAuthor, deleteAuthor } from '../../controllers/authors';

const routesAuthor = Router();

routesAuthor.get('/authors/:name', verifyAuth, getAuthor);

routesAuthor.delete('/authors/:name', verifyAuth, isAdmin, deleteAuthor);

export default routesAuthor;
