import { Router } from 'express';

import {
  validateShape,
  verifyAuth,
  isAdmin,
} from '../../middlewares';
import { publisherShape } from '../../shapes';
import {
  createPublisherController,
  getAllPublishersController,
  getPublisherController,
  updatePublisherController,
} from '../../controllers/Publishers';

const routesPublisher = Router();

routesPublisher.post('', validateShape(publisherShape), verifyAuth, isAdmin, createPublisherController);

routesPublisher.get('/:id', verifyAuth, getPublisherController);

routesPublisher.get('', verifyAuth, getAllPublishersController);

routesPublisher.patch('/:id', verifyAuth, isAdmin, validateShape(publisherShape), updatePublisherController);

export default routesPublisher;
