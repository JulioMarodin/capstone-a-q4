import { Request, Response } from 'express';
import { BooksRepository, PostsRepository, PostsTypesRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';

const createPost = async (req: Request, res: Response) => {
  try {
    const book = await new BooksRepository().findBookByName(req.validated.book);
    if (!book) {
      throw new ErrorHandler(404, 'Book not found');
    }
    const type = await new PostsTypesRepository().findPostType(req.validated.type_id);

    if (!type) {
      throw new ErrorHandler(404, "Post's type not found");
    }

    req.validated.visible = await type.visible;
    req.validated.user = req.user;
    req.validated.book = book;
    req.validated.author = await book.author;

    const post = await new PostsRepository().createPost(req.validated);
    await new PostsRepository().savePost(post);

    return res.status(200).json(post);
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default createPost;
