import * as yup from 'yup';

const postShape = yup.object().shape({
  visible: yup.boolean().default(() => false),
  description: yup.string().optional(),
  image: yup.string().url().optional(),
  user_id: yup.string().uuid().required(),
  book: yup.string().optional(),
  type_id: yup.number().required(),
  author_id: yup.number().optional(),
});
