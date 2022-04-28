import { Request, Response } from 'express';
import { TratativaAdminRepository } from '../../repositories';

const getAllTratativaAdminNotReadController = async (_req:Request, res:Response) => {
    const tratativaAdmin = await new TratativaAdminRepository().findTratativaAdminsNotRead();
    return res.status(200).json(tratativaAdmin);
};

export default getAllTratativaAdminNotReadController;
