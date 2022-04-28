import { Request, Response } from 'express';
import { PostsRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';

const updatePost = async (req:Request, res:Response) => {
    try {
        const data = await new PostsRepository().updatePost(req.params, req.body);
        if (!data.affected) {
            throw new ErrorHandler(404, 'Post not found');
        }
        const post = await new PostsRepository().findPost(req.params.id);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(error.statusCode).json({ error: error.message });
    }
};

export default updatePost;
