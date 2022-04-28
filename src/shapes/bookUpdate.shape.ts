import * as yup from 'yup';
import { makeTitle } from '../utils';

const bookUpdateShape = yup.object().shape({
    isbn: yup.string().length(13).optional(),
    title: yup.string().optional().max(128).transform((title) => makeTitle(title)),
    volume: yup.number().optional(),
    cover_image: yup.string().url().optional(),
    released_date: yup.date().optional(),
    number_pages: yup.number().positive().integer().optional(),
    author: yup.string().optional().transform((au) => makeTitle(au)),
    publisher: yup.string().optional().transform((pb) => makeTitle(pb)),
    genres: yup.array().of(yup.string()).optional().transform((arr: String[]) => arr.map((genre) => genre.toLowerCase())),
});

export default bookUpdateShape;
