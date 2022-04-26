import { Request, Response } from 'express';

import { PublisherRepository } from '../../repositories';

const getPublisherController = async (req:Request, res:Response) => {
  const publishers = await new PublisherRepository().findPublishers();
  return res.status(200).json(publishers);
};

export default getPublisherController;
