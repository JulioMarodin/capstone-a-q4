import { Router } from 'express';

import { createUserController } from '../../controllers';
import { validateShape } from '../../middlewares';
import { userShape } from '../../shapes';

const routesUser = Router();

routesUser.post('', validateShape(userShape), createUserController);

export default routesUser;
