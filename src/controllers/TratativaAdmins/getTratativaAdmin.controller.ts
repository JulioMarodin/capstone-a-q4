import { Request, Response } from 'express';
import { TratativaAdminRepository } from '../../repositories';

const getTratativaAdminController = async (req:Request, res:Response) => {
  const tratativaAdmin = await new TratativaAdminRepository().findTratativaAdmin(req.params.id);
  return res.status(200).json(tratativaAdmin);
};

export default getTratativaAdminController;
