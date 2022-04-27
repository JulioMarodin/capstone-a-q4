import { Request, Response } from 'express';
import { PostsRepository } from '../../repositories';
import { paginate } from '../../services';
import { ErrorHandler } from '../../services/errors';

const getPostsByUser = async (req:Request, res:Response) => {
    try {
      const posts = await new PostsRepository().findPostsByUser(req.params.user_id);
      if (!posts) {
        throw new ErrorHandler(404, 'User or posts not found');
      }
      return res.status(200)
      .json(paginate(posts, req.query.page, req.query.perPage));
    } catch (err) {
      return res.status(err.statusCode).json({ error: err.message });
    }
};

export default getPostsByUser;
