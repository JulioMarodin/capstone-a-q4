import booksRepository from '../repositories/Books';

const updateBookToPostOrPatchUserBook = async (method: string, body: any, params: any = undefined) => {
  const ratingGive = body.rating;
  if (method === 'POST' && ratingGive) {
    const id = body.book;
    const { rating, number_reviews } = await new booksRepository().findBook(id);
    const newNReviews = number_reviews + 1;
    const newRating = (rating * number_reviews + ratingGive) / newNReviews;
    const data = await new booksRepository().updateBook({ id }, { rating: newRating, number_reviews: newNReviews });
  }
  if (method === 'PATCH' && ratingGive) {
    const { book, rating: ratingUB } = params;
    const { rating, number_reviews } = await new booksRepository().findBook(book.id);
    const newRating = (rating * number_reviews - ratingUB + ratingGive) / number_reviews;
    await new booksRepository().updateBook({ id: book.id }, { rating: newRating });
  }
};

export default updateBookToPostOrPatchUserBook;
