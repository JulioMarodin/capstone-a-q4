import { Router } from 'express';
import { validateShape } from '../../middlewares';
import { loginShape } from '../../shapes';
import { userLogin } from '../../controllers/Login';

const routerLogin = Router();

routerLogin.post('', validateShape(loginShape), userLogin);

export default routerLogin;
