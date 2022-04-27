import * as yup from 'yup';
import { hashSync } from 'bcryptjs';
import { transformToTitle, makeTitle } from '../utils';

const userUpdateShape = yup.object().shape({
  name: yup
    .string()
    .optional()
    .transform((str) => makeTitle(str)),
  email: yup.string().email().lowercase().optional(),
  password: yup
    .string()
    .optional()
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
    // .matches(
    //   /^\d{4}[/]?((((0[13578])|(1[02]))[/]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[/]?(([0-2][0-9])|(30)))|(02[/]?[0-2][0-9]))$/,
    //   'date must be in the format yyyy/mm/dd',
    // ),
    .optional()
    .nullable(true),
  admin: yup.boolean().default(() => false),
});

export default userUpdateShape;
