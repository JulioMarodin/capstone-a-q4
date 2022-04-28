import { Request, Response } from 'express';
import { PostsRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';
import { isNumeric } from '../../utils';

const getPostsByBook = async (req:Request, res:Response) => {
    try {
      const { book_id } = req.params;
      if (!isNumeric(book_id)) {
        throw new ErrorHandler(400, 'Book\'s id must be in integer numeric digits');
      }

      const posts = await new PostsRepository().findPostsByBook(parseInt(book_id, 10), req.paginate.page, req.paginate.limit);
      if (posts.length === 0) {
        throw new ErrorHandler(404, 'Book or book\'s posts not found');
      }
      return res.status(200)
      .json(posts);
    } catch (err) {
      return res.status(err.statusCode).json({ error: err.message });
    }
};

export default getPostsByBook;
