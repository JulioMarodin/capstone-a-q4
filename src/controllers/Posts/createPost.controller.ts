import { Request, Response } from 'express';
import { BooksRepository, PostsRepository, PostsTypesRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors';

const createPost = async (req: Request, res: Response) => {
  try {
    const book = await new BooksRepository().findBookByName(req.validated.book);
    if (!book) {
      // throw new ErrorHandler(404, 'Book not found');
      return res.status(400).json('deu ruim no book');
    }
    const type = await new PostsTypesRepository().findPostType(req.validated.type_id);

    if (!type) {
      // throw new ErrorHandler(404, "Post's type not found");
      return res.status(400).json('deu ruim no type');
    }

    req.validated.user = req.user;
    req.validated.book = book;
    console.log(req.validated);
    // req.validated.author = book.author;

    const post = await new PostsRepository().createPost(req.validated);
    await new PostsRepository().savePost(post);

    return res.status(200).json(post);
  } catch (error) {
    return res.status(error.statusCode).json({ error: error.message });
  }
};

export default createPost;
