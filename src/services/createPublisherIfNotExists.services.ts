import { Request } from 'express';
import { PublisherRepository } from '../repositories';

const createPublisherIfNotExists = async (req: Request) => {
  let publisher = await new PublisherRepository().findPublisherByName(req.validated.publisher);
  if (!publisher) {
    publisher = await new PublisherRepository().createPublisher({ name: req.validated.publisher });
    await new PublisherRepository().savePublisher(publisher);
    req.validated.publisher = publisher;
  } else {
    req.validated.publisher = publisher;
  }
};

export default createPublisherIfNotExists;
