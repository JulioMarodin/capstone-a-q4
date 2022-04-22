import { Request, Response } from 'express';
import { Users } from '../../entities/Users';
import { UsersRepository } from '../../repositories';

const createUserController = async (req: Request, res: Response) => {
  try {
    const user: Users = await new UsersRepository().saveUser(req.validated as Users);

    const userToReturn = JSON.parse(JSON.stringify(user));
    delete userToReturn.password;

    return res.status(201).json(userToReturn);
  } catch (e) {
    return res.status(400).json({ error: 'Email Already in use!' });
  }
};

export default createUserController;
