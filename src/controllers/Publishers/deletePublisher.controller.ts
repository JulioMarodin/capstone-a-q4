import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';
import PublisherRepository from '../../repositories/Publishers';
import { ErrorHandler } from '../../services/errors.services';

const deletePublisherController = async (req:Request, res:Response) => {
  try {
    const publisher: DeleteResult = await new PublisherRepository().deletePublisher(req.params);
    if (!publisher.affected) {
      throw new ErrorHandler(404, 'Publisher not found');
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message});
  }
};

export default deletePublisherController;
