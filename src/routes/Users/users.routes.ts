import { Router } from 'express';

import { verifyAuth } from '../../middlewares';
import { getUsers } from '../../controllers/Users';

const routesUsers = Router();

routesUsers.get('', verifyAuth, getUsers);

export default routesUsers;
