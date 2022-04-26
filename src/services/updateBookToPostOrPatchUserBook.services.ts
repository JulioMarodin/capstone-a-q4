import booksRepository from '../repositories/Books';

const updateBookToPostOrPatchUserBook = async (method:string, body:any) => {
    console.log('METHOD', method);
    const ratingGive = body.rating;
    const id = body.book_id;
    if (method === 'POST' && ratingGive) {
        const { rating, number_reviews} = await new booksRepository().findBook(id);
        const newNReviews = number_reviews + 1;
        const newRating = ((rating * number_reviews) + ratingGive) / newNReviews;
        await new booksRepository().updateBook({id}, {rating: newRating, number_reviews: newNReviews});
    }
    if (method === 'PATCH' && ratingGive) {
        const { rating, number_reviews} = await new booksRepository().findBook(id);
        const newRating = ((rating * number_reviews) - rating + ratingGive) / number_reviews;
        await new booksRepository().updateBook({id}, {rating: newRating });
    }
};

export default updateBookToPostOrPatchUserBook;
