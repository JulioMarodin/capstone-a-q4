import * as yup from 'yup';
import { transformToTitle } from '../utils';

const genreShape = yup.object().shape({
    name: yup.string().required().transform((name) => transformToTitle(name)),
});

export default genreShape;
