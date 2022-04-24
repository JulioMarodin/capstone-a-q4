import * as yup from 'yup';

const updateBookShape = yup.object().shape({
    volume: yup.number().optional(),
    cover_image: yup.string().optional(),
    released_date: yup.date().optional().transform((data) => new Date(data)),
    number_pages: yup.number().optional(),
});

export default updateBookShape;
