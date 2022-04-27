import * as yup from 'yup';

const tratativaAdminShape = yup.object().shape({
  description: yup.string().required(),
  endpoint: yup.string().required(),
});

export default tratativaAdminShape;
