import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPosts,
  getPostsByAuthor,
  getPostsByBook,
  updatePost,
} from '../../controllers/Posts';
import { validateShape, verifyAuth } from '../../middlewares';
import { postShape, postUpdateShape } from '../../shapes';

const routesPosts = Router();

routesPosts.post('', verifyAuth, validateShape(postShape), createPost);

routesPosts.get('', verifyAuth, getPosts);

routesPosts.get('/:author_id', verifyAuth, getPostsByAuthor);

routesPosts.get('/:book_id', verifyAuth, getPostsByBook);

routesPosts.patch('/:id', verifyAuth, validateShape(postUpdateShape), updatePost);

routesPosts.delete('/:id', verifyAuth, deletePost);

export default routesPosts;
