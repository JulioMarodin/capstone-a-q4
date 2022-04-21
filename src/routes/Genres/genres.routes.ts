import { Router } from 'express';

import { createGenreController, deleteGenreController, updateGenreController } from '../../controllers/Genres';
import { validateShape, verifyAuth, isAdmin } from '../../middlewares';
import { genreShape } from '../../shapes';

const routesGenre = Router();

routesGenre.post('', validateShape(genreShape), verifyAuth, isAdmin, createGenreController);

routesGenre.patch('/:name', verifyAuth, validateShape(genreShape), isAdmin, updateGenreController);

routesGenre.delete('/name', verifyAuth, isAdmin, deleteGenreController);


export default routesGenre;
