import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories';

const getUsers = async (req: Request, res: Response) => {
  try {
    const results = await new UsersRepository().findFilteredUsers(
      req.paginate.name,
      req.paginate.page,
      req.paginate.limit,
    );

    const users = results.map((r) => {
      const { password, ...user } = r;
      return user;
    });

    return res.status(200).json({ response: users, navigate_links: req.navlinks });
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default getUsers;
