import { Router } from 'express';
import authorRouter from './authors';

const apiRouter = Router();

apiRouter.use('/author', authorRouter);

export default apiRouter;
