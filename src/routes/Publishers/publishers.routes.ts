import { Router } from 'express';

import {
  validateShape,
  verifyAuth,
  isAdmin,
} from '../../middlewares';
import { publisherShape } from '../../shapes';
import {
  createPublisherController,
  getPublisherController,
} from '../../controllers/Publishers';

const routesPublisher = Router();

routesPublisher.post('', validateShape(publisherShape), verifyAuth, isAdmin, createPublisherController);

routesPublisher.get('', verifyAuth, getPublisherController);

export default routesPublisher;
