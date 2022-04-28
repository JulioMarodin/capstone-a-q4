import { Request, Response } from 'express';
import { PublisherRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';

const updatePublisherController = async (req: Request, res: Response) => {
  try {
    const checkPublishers = await new PublisherRepository().findPublisherByName(req.body.name);
    const publisher = await new PublisherRepository().updatePublisher(req.params, req.validated);

    if (!publisher.affected) {
      throw new ErrorHandler(404, 'Publisher not found');
    }

    if (checkPublishers) {
      throw new ErrorHandler(404, 'Publisher already exists');
    }
    return res.status(201).json(publisher);
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default updatePublisherController;
