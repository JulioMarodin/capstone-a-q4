import { Router } from 'express';
import { deletePost, getPosts, getPostsByAuthor } from '../../controllers/Posts';
import getPostsByBook from '../../controllers/Posts/getPostsByBook.controller';
import updatePost from '../../controllers/Posts/updatePost.controller';
import { validateShape, verifyAuth } from '../../middlewares';
import postUpdateShape from '../../shapes/postUpdate.shape';

const routesPosts = Router();

routesPosts.get('', verifyAuth, getPosts);

routesPosts.get('/:author_id', verifyAuth, getPostsByAuthor);

routesPosts.get('/:book_id', verifyAuth, getPostsByBook);

routesPosts.patch('/:id', validateShape(postUpdateShape), updatePost);

routesPosts.delete('/:id', verifyAuth, deletePost);

export default routesPosts;
