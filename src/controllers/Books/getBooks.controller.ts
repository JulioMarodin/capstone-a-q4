import { Request, Response } from 'express';
import { BooksRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';

const getBooksController = async (req: Request, res: Response) => {
  try {
    const results = await new BooksRepository().findBooks(req.paginate.name, req.paginate.page, req.paginate.limit);
    if (!results) {
      throw new ErrorHandler(404, 'Any book were found');
    }
    const books: any[] = [];
    results.forEach(async (b) => {
      const serializedBook = {
        id: b.id,
        title: b.title,
        author: (await b.author).name,
        volume: b.volume,
        isbn: b.isbn,
        cover_image: b.cover_image,
        released_date: b.released_date,
        number_pages: b.number_pages,
        rating: b.rating,
        qts_reviews: b.number_reviews,
      };
      books.push(serializedBook);
    });

    return res.status(200).json({ reponse: await books, navigate_links: req.navlinks });
  } catch (err) {
    return res.status(err.statusCode).json({ error: err.message });
  }
};

export default getBooksController;
