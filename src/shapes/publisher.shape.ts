import * as yup from 'yup';
import { makeTitle } from '../utils';

const publisherShape = yup.object().shape({
  name: yup.string().transform((name) => makeTitle(name)),
});

export default publisherShape;
