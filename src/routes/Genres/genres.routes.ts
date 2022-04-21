import { Router } from 'express';
import { createGenreController, getGenre } from '../../controllers/Genres';
import { validateShape, verifyAuth, isAdmin } from '../../middlewares';
import { genreShape } from '../../shapes';

const routesGenre = Router();

routesGenre.post('', validateShape(genreShape), verifyAuth, isAdmin, createGenreController);

routesGenre.get('/:id', getGenre);

export default routesGenre;
