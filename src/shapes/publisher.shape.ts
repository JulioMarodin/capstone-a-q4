import * as yup from 'yup';
import { transformToTitle } from '../utils';

const publisherShape = yup.object().shape({
  name: yup.string().transform((name) => transformToTitle(name)),
});

export default publisherShape;
