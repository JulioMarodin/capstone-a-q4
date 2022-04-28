import { Request, Response } from 'express';

import { UsersRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';
import { dataUserBooks, dataUserPosts } from '../../services';

const getOneUser = async (req: Request, res: Response) => {
  try {
    const user = await new UsersRepository().findUser(req.params.name);

    if (!user) {
      throw new ErrorHandler(404, 'User not found');
    }

    const {
      posts, userBooks, password, ...userData
    } = user;
    const responseUser = { ...userData };

    const relationalBooks = await dataUserBooks(user);

    const relationalPosts = await dataUserPosts(user);

    return res.status(200).json({user: responseUser, relationalBooks, relationalPosts});
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default getOneUser;
