import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories';

const getUsers = async (req:Request, res:Response) => {
  console.log(req.query);
  const page: number = req.query.page ? parseInt(req.query.page as string, 10) : 0;
  const limit: number = req.query.limit ? parseInt(req.query.limit as string, 10) : 15;
  console.log(req);
  const name: string = req.query.name as string ?? '';

  const results = await new UsersRepository().findFilteredUsers(name, page, limit);

  const users = results.map((r) => {
    const { password, ...user } = r;
    return user;
  });

  return res.status(200)
  .json(users);
};

export default getUsers;
