import { AsyncControl } from "../../@types"
import UsersRepository from "../../repositories/Users"
import { signIn } from "../../services/user.service";

const userLogin: AsyncControl = async (req, res) => {
  const { email, password } = req.body;
  const users = await new UsersRepository().findUsers();
  const user = users.find((e) => e.email === email && e.password === password);

  if (!user) res.status(400).json({ error: 'E-mail and password missmatch' });

  req.body.id = user.id;
  const token = signIn(req.body);

  res.status(200).json({ token: token });
};

export { userLogin };
