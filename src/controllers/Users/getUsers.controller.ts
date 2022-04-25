import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories';

const getUsers = async (req:Request, res:Response) => {
  const page: number = parseInt(req.params.page ?? '0', 10);
  const limit: number = parseInt(req.params.limit ?? '15', 10);
  const name: string = req.params.name ?? '';

  const users = await new UsersRepository().findFilteredUsers(name, page, limit);

  return res.status(200)
  .json(users);
};

export default getUsers;
