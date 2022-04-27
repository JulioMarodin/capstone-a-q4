import { Request, Response } from 'express';
import { TratativaAdminRepository } from '../../repositories';

const getAllTratativaAdminReadController = async (_req:Request, res:Response) => {
    const tratativaAdmin = await new TratativaAdminRepository().findTratativaAdminsRead();
    return res.status(200).json(tratativaAdmin);
};

export default getAllTratativaAdminReadController;
