import { Router } from 'express';
import { validateShape, checkUnique } from '../../middlewares';
import { authorShape } from '../../shapes';

const authorRouter = Router();

authorRouter.post('', validateShape(authorShape), );
