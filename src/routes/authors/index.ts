import { Router } from 'express';
import { validateShape, checkUnique } from '../../middlewares';
import { authorShape } from '../../shapes';
import { createAuthorController } from '../../controllers/authors';

const authorRouter = Router();

authorRouter.post('', validateShape(authorShape), createAuthorController);

export default authorRouter;
