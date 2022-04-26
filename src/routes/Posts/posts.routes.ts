import { Router } from 'express';
import { deletePost, getPosts, getPostsByAuthor } from '../../controllers/Posts';
import getPostsByBook from '../../controllers/Posts/getPostsByBook.controller';
import { validateShape, verifyAuth } from '../../middlewares';

const routesPosts = Router();

// routesPosts.post('', verifyAuth, validateShape())

routesPosts.get('', verifyAuth, getPosts);

routesPosts.get('/:author_id', verifyAuth, getPostsByAuthor);

routesPosts.get('/:book_id', verifyAuth, getPostsByBook);

routesPosts.delete('/:id', verifyAuth, deletePost);

export default routesPosts;
