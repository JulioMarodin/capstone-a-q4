import { Router } from 'express';

import {
  validateShape,
  verifyAuth,
  checkUpdateUser,
  isAdminOrCreator,
} from '../../middlewares';
import { userShape, userUpdateShape } from '../../shapes';
import {
  getUsers,
  createUserController,
  deleteUserController,
  getOneUser,
  updateUser,
} from '../../controllers/Users';
import { Users } from '../../entities/Users';
import { paginateResult } from '../../services';

const routesUsers = Router();

routesUsers.post('', validateShape(userShape), createUserController);

routesUsers.get('', paginateResult, getUsers);

routesUsers.get('/:name', getOneUser);

routesUsers.patch('/:id', verifyAuth, validateShape(userUpdateShape), checkUpdateUser, updateUser);

routesUsers.delete('/:id', verifyAuth, isAdminOrCreator(Users), deleteUserController);

export default routesUsers;
