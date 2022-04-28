import * as yup from 'yup';
import { makeTitle } from '../utils';

const postShape = yup.object().shape({
  description: yup.string().optional(),
  image: yup.string().url().optional(),
  book: yup
    .string()
    .optional()
    .transform((tt) => makeTitle(tt)),
  type_id: yup.number().required(),
});

export default postShape;
