import * as yup from 'yup';
import { transformToTitle } from '../utils';

const authorUpdateShape = yup.object().shape({
  name: yup.string().optional().transform((name) => transformToTitle(name)),
  country: yup.string().optional().transform((name) => transformToTitle(name)),
  birthday: yup.date().optional(),
  death_date: yup.date().optional(),
});

export default authorUpdateShape;
