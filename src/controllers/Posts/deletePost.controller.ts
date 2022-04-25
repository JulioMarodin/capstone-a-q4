import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';

import { PostsRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const deletePost = async (req:Request, res:Response) => {
  try {
    const post:DeleteResult = await new PostsRepository().deletePost(req.params);
    if (!post.affected) {
      throw new ErrorHandler(404, 'Post not found');
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default deletePost;
