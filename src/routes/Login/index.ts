import { Router } from 'express';
import validate from '../../middlewares/validateShape';
import { loginShape } from '../../shapes';
import { userLogin } from '../../controllers/Login';

const routerLogin = Router();

routerLogin.post('', validate(loginShape), userLogin);

export default routerLogin;
