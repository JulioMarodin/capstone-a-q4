import { Request, Response } from 'express';
import { TratativaAdminRepository } from '../../repositories';

const createTratativaAdminController = async (req:Request, res:Response) => {
  const TratativaAdmin = new TratativaAdminRepository().createTratativaAdmin(req.body);
  await new TratativaAdminRepository().saveTratativaAdmin(TratativaAdmin);
  return res.status(201).json(TratativaAdmin);
};

export default createTratativaAdminController;
