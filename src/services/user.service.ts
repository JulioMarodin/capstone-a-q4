import jwt from 'jsonwebtoken';
import { jwtConfig } from '../configs';

const signIn = (data: any) => {
   const token = jwt.sign(
      { id: data.id },
      jwtConfig.secret,
      { expiresIn: jwtConfig.expiresIn },
   );

   return token;
};

export { signIn };
