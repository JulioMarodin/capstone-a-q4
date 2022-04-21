import { Router } from 'express';

import {
  deleteGenreController,
  createGenreController,
  getGenreController,
} from '../../controllers/Genres';
import {
  validateShape,
  verifyAuth,
  isAdmin,
} from '../../middlewares';
import { genreShape } from '../../shapes';

const routesGenre = Router();

routesGenre.post('', validateShape(genreShape), verifyAuth, isAdmin, createGenreController);
routesGenre.delete('/name', verifyAuth, isAdmin, deleteGenreController);
routesGenre.get('/:id', verifyAuth, getGenreController);

export default routesGenre;
