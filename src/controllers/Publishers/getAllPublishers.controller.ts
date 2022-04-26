import { Request, Response } from 'express';
import { PublisherRepository } from '../../repositories';

const getAllPublishersController = async (_req:Request, res:Response) => {
    const publishers = await new PublisherRepository().findPublishers();
    return res.status(200).json(publishers);
};

export default getAllPublishersController;
