import * as yup from 'yup';
import { transformToTitle } from '../utils';

const authorShape = yup.object().shape({
  name: yup.string().required().transform((name) => transformToTitle(name)),
  country: yup.string().optional().transform((name) => transformToTitle(name)).nullable(true),
  birthday: yup.date().optional().nullable(true),
  death_date: yup.date().optional().nullable(true),
});

export default authorShape;