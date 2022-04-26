import booksRepository from '../repositories/Books';

const updateBookToPostOrPatchUserBook = async (method:string, body:any) => {
    const ratingGive = body.rating;
    if (method === 'POST' && ratingGive) {
        const id = body.book_id;
        const { rating, number_reviews} = await new booksRepository().findBook(id);
        const newNReviews = number_reviews + 1;
        // const newRating = ((rating * number_reviews) + ratingGive) / newNReviews;
        const newRating = rating + ratingGive;
        await new booksRepository().updateBook({id}, {rating: newRating, number_reviews: newNReviews});
    }
    if (method === 'PATCH' && ratingGive) {
        const id = body;
        const { rating, number_reviews} = await new booksRepository().findBook(id);
        const newRating = ((rating * number_reviews) - rating + ratingGive) / number_reviews;
        // const newRating = rating;
        const data = await new booksRepository().updateBook({id}, {rating: newRating });
        console.log(data);
    }
};

export default updateBookToPostOrPatchUserBook;
