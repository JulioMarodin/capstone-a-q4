import * as yup from 'yup';

const userBookUpdateShape = yup.object().shape({
  read: yup.boolean().optional(),
  reading: yup.boolean().optional(),
  want_to_read: yup.boolean().optional(),
  favorites: yup.boolean().optional(),
  rating: yup.number().min(0).max(5).optional(),
  book_id: yup.number().optional(),
  user_id: yup.string().optional(),
});

export default userBookUpdateShape;
