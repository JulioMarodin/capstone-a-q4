import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';
import TratativaAdminRepository from '../../repositories/TratativaAdmin';
import { ErrorHandler } from '../../services/errors';

const deleteTratativaAdminController = async (req:Request, res:Response) => {
  // return res.status(200).json({teste: req.params});
  try {
    const tratativaAdmin: DeleteResult = await new TratativaAdminRepository().deleteTratativaAdmin(req.params);
    if (!tratativaAdmin.affected) {
      throw new ErrorHandler(404, 'TratativaAdmin not found');
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message});
  }
};

export default deleteTratativaAdminController;
