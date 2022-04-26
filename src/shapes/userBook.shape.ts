import * as yup from 'yup';

const userBookShape = yup.object().shape({
  read: yup.boolean().default(false),
  reading: yup.boolean().default(false),
  want_to_read: yup.boolean().default(false),
  favorites: yup.boolean().default(false),
  rating: yup.number().default(0),
  __book_id__: yup.number().required(),
  __user_id__: yup.string().required(),
});

export default userBookShape;
