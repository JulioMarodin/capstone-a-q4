import { Request, Response } from 'express';
import { PublisherRepository } from '../../repositories';

const createPublisherController = async (req:Request, res:Response) => {
  const publisher = new PublisherRepository().createPublisher(req.body);
  await new PublisherRepository().savePublisher(publisher);
  return res.status(201).json(publisher);
};

export default createPublisherController;
