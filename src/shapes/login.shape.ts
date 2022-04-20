import * as yup from 'yup';

const loginShape = yup.object().shape({
    email: yup.string().email().strict().required(),
    password: yup.string().strict().required(),
});

export default loginShape;
