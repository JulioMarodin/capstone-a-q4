import { Router } from 'express';

import routesUserBooks from './UserBooks/userBooks.routes';
import routesUser from './User/users.routes';
import routesAuthor from './Authors';

const apiRouter = Router();

apiRouter.use('/users', routesUser);
apiRouter.use('/author', routesAuthor);
apiRouter.use('/userBooks', routesUserBooks);

export default apiRouter;
