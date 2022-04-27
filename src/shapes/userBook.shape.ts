import * as yup from 'yup';

const userBookShape = yup.object().shape({
  read: yup.boolean().default(false),
  reading: yup.boolean().default(false),
  want_to_read: yup.boolean().default(false),
  favorites: yup.boolean().default(false),
  rating: yup.number().default(0),
  book: yup.string().required(),
  user: yup.string().required(),
});

export default userBookShape;
