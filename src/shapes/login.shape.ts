import * as yup from 'yup';
import { hashSync } from 'bcryptjs';

const loginShape = yup.object().shape({
    email: yup
    .string()
    .email()
    .required()
    .transform((st) => st.toLowerCase()),
    password: yup.string().required(),
});

export default loginShape;
