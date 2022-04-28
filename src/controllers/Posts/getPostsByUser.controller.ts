import { Request, Response } from 'express';
import { PostsRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const getPostsByUser = async (req:Request, res:Response) => {
    try {
      const posts = await new PostsRepository().findPostsByUser(req.params.user_id, req.paginate.page, req.paginate.limit);
      if (!posts) {
        throw new ErrorHandler(404, 'User or posts not found');
      }
      return res.status(200)
      .json(posts);
    } catch (err) {
      return res.status(err.statusCode).json({ error: err.message });
    }
};

export default getPostsByUser;
