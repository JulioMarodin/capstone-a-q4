import * as yup from 'yup';

const userBookShape = yup.object().shape({
  read: yup.boolean().default(false),
  reading: yup.boolean().default(false),
  want_to_read: yup.boolean().default(false),
  favorites: yup.boolean().default(false),
  rating: yup.boolean().default(false),
  /* TODO Resolver isso na daily
  book_id: yup.number().required(),
  user_id: yup.string().required(),
  */
});

export default userBookShape;
