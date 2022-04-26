import * as yup from 'yup';

const genreShape = yup.object().shape({
    name: yup.string().required().transform((st) => st.toLowerCase()),
});

export default genreShape;
