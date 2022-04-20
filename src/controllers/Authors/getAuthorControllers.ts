import { Request, Response } from 'express';
import AuthorsRepository from '../../repositories/Authors/index';

const getAuthor = async (req:Request, res:Response) => {
    const user = await new AuthorsRepository().findAuthor(req.params as any);
    return res.status(200).json({ user });
};

export default getAuthor;