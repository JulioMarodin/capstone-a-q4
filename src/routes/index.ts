import { Router } from 'express';
import routesAuthor from './Authors/authors.routes';

const apiRouter = Router();

apiRouter.use('/author', routesAuthor);

export default apiRouter;
