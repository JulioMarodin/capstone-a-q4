import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';

import { PostsRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';

const deletePost = async (req:Request, res:Response) => {
  try {
    const post:DeleteResult = await new PostsRepository().deletePost(req.params);
    if (!post.affected) {
      throw new ErrorHandler(404, 'Post not found');
    }
    return res.status(204).json();
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default deletePost;
