import { Request, Response } from 'express';
import { UsersRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const updateUser = async (req:Request, res:Response) => {
    try {
        const data = await new UsersRepository().updateUser(req.params, req.body);
        if (!data.affected) {
            throw new ErrorHandler(404, 'User not found');
        }
        const user = await new UsersRepository().findUserToId(req.params.id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

export default updateUser;
