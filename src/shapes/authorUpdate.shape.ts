import * as yup from 'yup';
import { makeTitle } from '../utils';

const authorUpdateShape = yup.object().shape({
  name: yup.string().optional().transform((name) => makeTitle(name)),
  country: yup.string().optional().transform((name) => makeTitle(name)),
  birthday: yup.date().optional(),
  death_date: yup.date().optional(),
});

export default authorUpdateShape;
