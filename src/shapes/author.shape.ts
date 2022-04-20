import * as yup from 'yup';
import titlelizer from '../utils/funcTitle';

const authorShape = yup.object().shape({
  name: yup.string().required().transform((name) => titlelizer(name)),
  country: yup.string().optional(),
  birthday: yup.date().optional(),
  death_date: yup.date().optional(),
});

export default authorShape;
