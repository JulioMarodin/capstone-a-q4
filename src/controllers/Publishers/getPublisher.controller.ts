import { Request, Response } from 'express';

import { PublisherRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const getPublisherController = async (req: Request, res: Response) => {
  try {
    const publishers = await new PublisherRepository().findPublisher(req.params.id);
    if (!publishers) {
      throw new ErrorHandler(404, 'Publishers not found');
    }
    return res.status(200).json(publishers);
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default getPublisherController;
