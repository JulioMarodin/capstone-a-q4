import { Request, Response } from 'express';
import { PostsRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const getPosts = async (req: Request, res: Response) => {
  try {
    const results = await new PostsRepository().findPosts(req.paginate.name, req.paginate.page, req.paginate.limit);
    if (!results) {
      throw new ErrorHandler(404, 'Any posts were found');
    }

    const posts: any[] = [];
    // eslint-disable-next-line no-restricted-syntax
    for await (const result of results) {
      const serializedPosts = {
        id: result.id,
        user: {
          name: result.user.name,
          id: result.user.id,
        },
        book: result.book.title,
        author: result.author.name,
        description: result.description,
        image: result.image,
        create_date: result.create_date,
        update_date: result.update_date,
      };
      posts.push(serializedPosts);
    }

    return res.status(200).json({ response: posts, navigate_links: req.navlinks });
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default getPosts;
