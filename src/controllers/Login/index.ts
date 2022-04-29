import { compareSync } from 'bcryptjs';
import { AsyncControl } from '../../@types';
import UsersRepository from '../../repositories/Users';
import { signIn } from '../../services/userCreateToken.service';

const userLogin: AsyncControl = async (req, res) => {
  try {
    const { email, password } = req.validated;

    const user = await new UsersRepository().findToLogin(email);
    if (!user) {
      return res.status(400).json({ error: 'E-mail and password missmatch' });
    }

    const checkablePassword = compareSync(password, user.password);
    if (!checkablePassword) {
      return res.status(400).json({ error: 'E-mail and password missmatch' });
    }

    req.body.id = user.id as string;

    const token = signIn(req.body);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export { userLogin };
