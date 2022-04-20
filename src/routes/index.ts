import { Router } from 'express';
import routesAuthor from './Authors';
import routesUserBooks from './UserBooks/userBooks.routes';

const apiRouter = Router();

apiRouter.use('/author', routesAuthor);
apiRouter.use('/userBooks', routesUserBooks);

export default apiRouter;
