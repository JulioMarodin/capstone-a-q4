import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';

import { UsersRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const user: DeleteResult = await new UsersRepository().deleteUser(req.params);
    if (!user.affected) {
      throw new ErrorHandler(404, 'User not found');
    }
    return res.status(204).json();
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default deleteUserController;
