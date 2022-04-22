import * as yup from 'yup';
import { hashSync } from 'bcryptjs';
import { transformToTitle } from '../utils';

const authorShape = yup.object().shape({
  name: yup.string().required().transform((name) => transformToTitle(name)),
  email: yup.string().email().required().transform((email) => email.toLowerCase()),
  password: yup.string().required().transform((pwd) => hashSync(pwd, 10)),
  biography: yup.string().optional(),
  city: yup.string()
  .max(128)
  .optional()
  .transform((name) => transformToTitle(name))
  .nullable(true),
  birthday: yup.date().optional().nullable(true),
  admin: yup.boolean().default(() => false),
});

export default authorShape;
