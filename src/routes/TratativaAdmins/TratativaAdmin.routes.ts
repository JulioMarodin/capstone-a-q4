import { Router } from 'express';

import {
  validateShape,
  verifyAuth,
  isAdmin,
} from '../../middlewares';
import { tratativaAdminShape } from '../../shapes';
import {
  createTratativaAdminController,
  deleteTratativaAdminController,
  getAllTratativaAdminController,
  getTratativaAdminController,
  updateTratativaAdminController,
} from '../../controllers/TratativaAdmins';

const routesTratativaAdmin = Router();

routesTratativaAdmin.post('', verifyAuth, validateShape(tratativaAdminShape), createTratativaAdminController);

routesTratativaAdmin.get('/:id', verifyAuth, isAdmin, getTratativaAdminController);

routesTratativaAdmin.get('', verifyAuth, isAdmin, getAllTratativaAdminController);

routesTratativaAdmin.delete('/:id', verifyAuth, isAdmin, deleteTratativaAdminController);

routesTratativaAdmin.patch('/:id', verifyAuth, isAdmin, validateShape(tratativaAdminShape), updateTratativaAdminController);

export default routesTratativaAdmin;
