import { Router } from 'express';
import routesAuthor from './Authors';
import routesUserBooks from './UserBooks/userBooks.routes';
import routesGenre from './Genres';

const apiRouter = Router();

apiRouter.use('/author', routesAuthor);
apiRouter.use('/userBooks', routesUserBooks);
apiRouter.use('/genres', routesGenre);

export default apiRouter;
