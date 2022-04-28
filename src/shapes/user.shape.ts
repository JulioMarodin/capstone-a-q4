import * as yup from 'yup';
import { hashSync } from 'bcryptjs';
import { makeTitle } from '../utils';

const userShape = yup.object().shape({
  name: yup
    .string()
    .required('name required')
    .transform((str) => makeTitle(str)),
  email: yup.string().email().lowercase().required('email required'),
  password: yup
    .string()
    .required()
    .transform((pw) => hashSync(pw, 10)),
  biography: yup.string().max(400).optional(),
  city: yup
    .string()
    .max(128)
    .optional()
    .transform((cityName) => makeTitle(cityName))
    .nullable(true),
  birthday: yup
    .date()
    .optional()
    .nullable(true),
  admin: yup.boolean().default(() => false),
});

export default userShape;
