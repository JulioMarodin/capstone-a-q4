import * as yup from 'yup';

const genreShape = yup.object().shape({
    name: yup.string().required(),
});

export default genreShape;
