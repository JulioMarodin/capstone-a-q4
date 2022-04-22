import { Router } from 'express';
import routesAuthor from './Authors';
import routesUserBooks from './UserBooks/userBooks.routes';
import routesUsers from './Users/users.routes';

const apiRouter = Router();

apiRouter.use('/author', routesAuthor);
apiRouter.use('/userBooks', routesUserBooks);
apiRouter.use('/users', routesUsers);

export default apiRouter;
