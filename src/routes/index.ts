import { Router } from 'express';

import routesAuthor from './Authors';
import routesBooks from './Books';
import routesGenre from './Genres';
import routerLogin from './Login';
import routesPosts from './Posts';
import routesPublisher from './Publishers';
import routesTratativaAdmin from './TratativaAdmins';
import routesUserBooks from './UserBooks';
import routesUsers from './Users';

const apiRouter = Router();

apiRouter.use('/authors', routesAuthor);
apiRouter.use('/books', routesBooks);
apiRouter.use('/genres', routesGenre);
apiRouter.use('/login', routerLogin);
apiRouter.use('/posts', routesPosts);
apiRouter.use('/publishers', routesPublisher);
apiRouter.use('/tratativaAdmin', routesTratativaAdmin);
apiRouter.use('/userBooks', routesUserBooks);
apiRouter.use('/users', routesUsers);

export default apiRouter;
