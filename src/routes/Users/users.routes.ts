import { Router } from 'express';

import { validateShape, verifyAuth } from '../../middlewares';
import { userShape } from '../../shapes';
import { getUsers, createUserController } from '../../controllers/Users';

const routesUsers = Router();

routesUsers.post('', validateShape(userShape), createUserController);

routesUsers.get('', verifyAuth, getUsers);

export default routesUsers;
