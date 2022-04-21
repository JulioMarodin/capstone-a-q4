import { Router } from 'express';

import routesUserBooks from './UserBooks/userBooks.routes';
import routesUser from './User/users.routes';
import routesAuthor from './Authors';
import routesGenre from './Genres';
import routesPosts from './Posts';

const apiRouter = Router();

apiRouter.use('/users', routesUser);
apiRouter.use('/author', routesAuthor);
apiRouter.use('/userBooks', routesUserBooks);
apiRouter.use('/genres', routesGenre);
apiRouter.use('/posts', routesPosts);

export default apiRouter;
