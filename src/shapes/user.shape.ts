import * as yup from 'yup';
import bcrypt from 'bcrypt';
import { makeTitle } from '../utils';

const userShape = yup.object().shape({
  city: yup
    .string()
    .required()
    .transform((cityName) => makeTitle(cityName)),
  birthday: yup
    .string()
    .matches(
      /^\d{4}[/]?((((0[13578])|(1[02]))[/]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[/]?(([0-2][0-9])|(30)))|(02[/]?[0-2][0-9]))$/,
      'date must be in the format yyyy/mm/dd',
    ),
  biography: yup.string().max(400),
  email: yup.string().email().lowercase().required('email required'),
  password: yup
    .string()
    .required()
    .transform((pw) => bcrypt.hashSync(pw, 10)),
  name: yup
    .string()
    .required('name required')
    .transform((str) => makeTitle(str)),
});

export default userShape;
