import { Router } from 'express';

import {
  isAdmin, validateShape, verifyAuth, checkUpdateUser,
} from '../../middlewares';
import { userShape } from '../../shapes';
import {
  getUsers,
  createUserController,
  deleteUserController,
  updateUser,
} from '../../controllers/Users';

const routesUsers = Router();

routesUsers.post('', validateShape(userShape), createUserController);

routesUsers.get('', verifyAuth, getUsers);

routesUsers.patch('/:id', validateShape(userShape), checkUpdateUser, updateUser);

routesUsers.delete('/:id', verifyAuth, isAdmin, deleteUserController);

export default routesUsers;
