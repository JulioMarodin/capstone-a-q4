import { Router } from 'express';

import { isAdmin, validateShape, verifyAuth } from '../../middlewares';
import { userShape } from '../../shapes';
import {
  getUsers,
  createUserController,
  deleteUserController,
} from '../../controllers/Users';

const routesUsers = Router();

routesUsers.post('', validateShape(userShape), createUserController);

routesUsers.get('', verifyAuth, getUsers);

routesUsers.delete('/:id', verifyAuth, isAdmin, deleteUserController);

export default routesUsers;
