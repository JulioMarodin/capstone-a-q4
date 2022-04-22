import { Router } from 'express';
import { getPosts, getPostsByAuthor } from '../../controllers/Posts';
import { verifyAuth } from '../../middlewares';

const routesPosts = Router();

routesPosts.get('', verifyAuth, getPosts);

routesPosts.get('/:author_id', verifyAuth, getPostsByAuthor);

export default routesPosts;
