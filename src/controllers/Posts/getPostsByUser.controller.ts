/* eslint-disable no-param-reassign */
import { Request, Response } from 'express';
import { PostsRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';

const getPostsByUser = async (req: Request, res: Response) => {
  try {
    const posts = await new PostsRepository().findPostsByUser(
      req.params.user_id,
      req.paginate.page,
      req.paginate.limit,
    );
    if (!posts) {
      throw new ErrorHandler(404, 'User or posts not found');
    }

    const postsToReturn = JSON.parse(JSON.stringify(posts));

    postsToReturn.forEach((item) => {
      item.user = item.user.name;
      item.type = item.type.type;
    });

    return res.status(200).json(postsToReturn);
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default getPostsByUser;
