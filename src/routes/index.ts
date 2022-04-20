import { Router } from 'express';
import routesAuthor from './Authors';

const apiRouter = Router();

apiRouter.use('/author', routesAuthor);

export default apiRouter;
