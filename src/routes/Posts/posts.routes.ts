import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPosts,
  getPostsByAuthor,
  getPostsByBook,
  getPostsByUser,
  updatePost,
} from '../../controllers/Posts';
import { validateShape, verifyAuth } from '../../middlewares';
import { postShape, postUpdateShape } from '../../shapes';

const routesPosts = Router();

routesPosts.post('', verifyAuth, validateShape(postShape), createPost);

routesPosts.get('', verifyAuth, getPosts);

routesPosts.get('/author/:author_id', verifyAuth, getPostsByAuthor);

routesPosts.get('/book/:book_id', verifyAuth, getPostsByBook);

routesPosts.get('/user/:user_id', getPostsByUser);

routesPosts.patch('/:id', verifyAuth, validateShape(postUpdateShape), updatePost);

routesPosts.delete('/:id', verifyAuth, deletePost);

export default routesPosts;
