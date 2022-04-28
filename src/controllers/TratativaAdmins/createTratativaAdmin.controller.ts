import { Request, Response } from 'express';
import { TratativaAdminRepository } from '../../repositories';

const createTratativaAdminController = async (req:Request, res:Response) => {
  req.body.origin_user = req.user.id;
  const TratativaAdmin = new TratativaAdminRepository().createTratativaAdmin(req.body);
  await new TratativaAdminRepository().saveTratativaAdmin(TratativaAdmin);
  return res.status(201).json(TratativaAdmin);
};

export default createTratativaAdminController;
