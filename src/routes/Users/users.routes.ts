import { Router } from 'express';

import {
  isAdmin,
  validateShape,
  verifyAuth,
  checkUpdateUser,
} from '../../middlewares';
import { userShape, userUpdateShape } from '../../shapes';
import {
  getUsers,
  createUserController,
  deleteUserController,
  getOneUser,
  updateUser,
} from '../../controllers/Users';

const routesUsers = Router();

routesUsers.post('', validateShape(userShape), createUserController);

routesUsers.get('', verifyAuth, getUsers);

routesUsers.get('/:name', verifyAuth, getOneUser);

routesUsers.patch('/:id', verifyAuth, validateShape(userUpdateShape), checkUpdateUser, updateUser);

routesUsers.delete('/:id', verifyAuth, isAdmin, deleteUserController);

export default routesUsers;
