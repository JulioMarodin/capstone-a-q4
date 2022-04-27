import { Router } from 'express';

import {
  deleteGenreController,
  createGenreController,
  getGenreController,
  updateGenreController,
} from '../../controllers/Genres';
import {
  validateShape,
  verifyAuth,
  isAdmin,
} from '../../middlewares';
import { genreShape } from '../../shapes';

const routesGenre = Router();

routesGenre.post('', validateShape(genreShape), verifyAuth, isAdmin, createGenreController);
routesGenre.patch('/:name', verifyAuth, validateShape(genreShape), isAdmin, updateGenreController);
routesGenre.delete('/:name', verifyAuth, isAdmin, deleteGenreController);
routesGenre.get('/:id', verifyAuth, getGenreController);

export default routesGenre;
