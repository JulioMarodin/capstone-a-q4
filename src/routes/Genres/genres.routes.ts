import { Router } from 'express';
import { createGenreController } from '../../controllers/Genres';
import { validateShape, verifyAuth, isAdmin } from '../../middlewares';
import { genreShape } from '../../shapes';

const routesGenre = Router();

routesGenre.post('', validateShape(genreShape), verifyAuth, isAdmin, createGenreController);

export default routesGenre;
