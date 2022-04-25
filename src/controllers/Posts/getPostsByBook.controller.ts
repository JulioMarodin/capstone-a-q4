import { Request, Response } from 'express';
import { PostsRepository } from '../../repositories';
import { paginate } from '../../services';
import { ErrorHandler } from '../../services/errors';

const getPostsByBook = async (req:Request, res:Response) => {
    try {
      const posts = await new PostsRepository().findPostsByBook(req.params.book_id);
      if (!posts) {
        throw new ErrorHandler(404, 'Book or posts not found');
      }
      return res.status(200)
      .json(paginate(posts, req.query.page, req.query.perPage));
    } catch (err) {
      return res.status(err.statusCode).json({ error: err.message });
    }
};

export default getPostsByBook;
