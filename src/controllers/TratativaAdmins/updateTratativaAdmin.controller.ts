import { Request, Response } from 'express';
import { TratativaAdminRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';

const updateTratativaAdminController = async (req:Request, res:Response) => {
  try {
    const tratativaAdmin = await new TratativaAdminRepository().updateTratativaAdmin(req.params, req.validated);
    if (!tratativaAdmin.affected) {
      throw new ErrorHandler(404, 'TratativaAdmin not found');
    }
    return res.status(201).json(tratativaAdmin);
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default updateTratativaAdminController;
