import { Router } from 'express';
import getPosts from '../../controllers/Posts/getPosts.controller';
import { verifyAuth } from '../../middlewares';

const routesPosts = Router();

routesPosts.get('', verifyAuth, getPosts);

routesPosts.get('', verifyAuth, getPosts);

export default routesPosts;
