import { Router } from 'express';

import {
  validateShape,
  verifyAuth,
  isAdmin,
} from '../../middlewares';
import { publisherShape } from '../../shapes';
import { createPublisherController } from '../../controllers/Publishers';

const routesPublisher = Router();

routesPublisher.post('', validateShape(publisherShape), verifyAuth, isAdmin, createPublisherController);

export default routesPublisher;
