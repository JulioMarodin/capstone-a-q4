import * as yup from 'yup';
import { makeTitle } from '../utils';

const bookShape = yup.object().shape({
    isbn: yup.string().length(13).optional(),
    title: yup.string().required().max(128).transform((title) => makeTitle(title)),
    volume: yup.number().optional(),
    cover_image: yup.string().optional(),
    released_date: yup.date().optional().transform((date) => new Date(date)),
    number_pages: yup.number().optional(),
});

export default bookShape;
