import * as yup from 'yup';
import { makeTitle } from '../utils';

const bookShape = yup.object().shape({
    isbn: yup.string().length(13).optional(),
    title: yup.string().required().max(128).transform((title) => makeTitle(title)),
    volume: yup.number().optional(),
    cover_image: yup.string().url().optional(),
    released_date: yup.date().optional(),
    number_pages: yup.number().positive().integer().optional(),
    author: yup.string().required().transform((au) => makeTitle(au)),
    publisher: yup.string().required().transform((pb) => makeTitle(pb)),
    genres: yup.array().of(yup.string()).optional().transform((arr: String[]) => arr.map((genre) => genre.toLowerCase())),
});

export default bookShape;
