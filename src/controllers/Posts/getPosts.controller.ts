import { Request, Response } from 'express';
import { PostsRepository } from '../../repositories';
import { paginate } from '../../services';

const getPosts = async (req:Request, res:Response) => {
    const posts = await new PostsRepository().findPosts();
    return res.status(200)
    .json(paginate(posts, req.query.page, req.query.perPage));
};

export default getPosts;
