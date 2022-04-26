import { Router } from 'express';
import { getAllPublishersController } from '../../controllers/Publishers';
import { verifyAuth } from '../../middlewares';

const routesPublisher = Router();

routesPublisher.get('', verifyAuth, getAllPublishersController);

export default routesPublisher;
