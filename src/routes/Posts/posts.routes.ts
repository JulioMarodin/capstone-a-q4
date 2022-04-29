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
import { validateShape, verifyAuth, isAdminOrCreator } from '../../middlewares';
import { paginateResult } from '../../services';
import { postShape, postUpdateShape } from '../../shapes';
import { Posts } from '../../entities/Posts';

const routesPosts = Router();

routesPosts.post('', verifyAuth, validateShape(postShape), createPost);

routesPosts.get('', paginateResult, getPosts);

routesPosts.get('/author/:author_id', paginateResult, getPostsByAuthor);

routesPosts.get('/book/:book_id', paginateResult, getPostsByBook);

routesPosts.get('/user/:user_id', paginateResult, getPostsByUser);

routesPosts.patch('/:id', verifyAuth, isAdminOrCreator(Posts), validateShape(postUpdateShape), updatePost);

routesPosts.delete('/:id', verifyAuth, deletePost);

export default routesPosts;
