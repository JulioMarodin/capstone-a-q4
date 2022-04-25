import { Router } from 'express';

import routesUserBooks from './UserBooks/userBooks.routes';
import routesUsers from './Users/users.routes';
import routesAuthor from './Authors';
import routesBooks from './Books';
import routesGenre from './Genres';
import routesPosts from './Posts';
import routerLogin from './Login';
import routesPublisher from './Publishers';

const apiRouter = Router();

apiRouter.use('/login', routerLogin);
apiRouter.use('/users', routesUsers);
apiRouter.use('/author', routesAuthor);
apiRouter.use('/userBooks', routesUserBooks);
apiRouter.use('/genres', routesGenre);
apiRouter.use('/posts', routesPosts);
apiRouter.use('/books', routesBooks);
apiRouter.use('/publishers', routesPublisher);

export default apiRouter;
