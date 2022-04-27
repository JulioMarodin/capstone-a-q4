import { Request, Response } from 'express';
import { TratativaAdminRepository } from '../../repositories';

const getAllTratativaAdminController = async (_req:Request, res:Response) => {
    const tratativaAdmin = await new TratativaAdminRepository().findTratativaAdmins();
    return res.status(200).json(tratativaAdmin);
};

export default getAllTratativaAdminController;
