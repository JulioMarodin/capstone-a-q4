import { Request, Response } from 'express';
import AuthorsRepository from '../../repositories/Authors/index';

const getAuthor = async (req:Request, res:Response) => {
    const user = await new AuthorsRepository().findAuthor(Number(req.params));
    return res.status(200).json({ user });
};

export default getAuthor;
