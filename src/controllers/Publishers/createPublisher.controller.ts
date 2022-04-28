import { Request, Response } from 'express';
import { PublisherRepository } from '../../repositories';

const createPublisherController = async (req: Request, res: Response) => {
  try {
    const publisher = new PublisherRepository().createPublisher(req.body);
    await new PublisherRepository().savePublisher(publisher);
    return res.status(201).json(publisher);
  } catch (e) {
    return res.status(409).json({ error: `${req.body.name} Already in use!` });
  }
};

export default createPublisherController;
