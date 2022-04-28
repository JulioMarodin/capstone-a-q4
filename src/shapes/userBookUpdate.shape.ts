import * as yup from 'yup';

const userBookUpdateShape = yup.object().shape({
  read: yup.boolean().optional(),
  reading: yup.boolean().optional(),
  want_to_read: yup.boolean().optional(),
  favorites: yup.boolean().optional(),
  rating: yup.number().optional().max(5),
  book: yup.string().optional(),
});

export default userBookUpdateShape;
