import { Router } from "express";
import validate from "../../middlewares/validateShape";
import { loginShape } from "../../shapes";
import { SignIn } from "../../controllers";

const routerUser = Router();

routerUser.post('/user/login', validate(loginShape), SignIn);

export default routerUser;
