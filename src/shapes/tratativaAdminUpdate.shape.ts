import * as yup from 'yup';

const tratativaAdminUpdateShape = yup.object().shape({
  description: yup.string().optional(),
  endpoint: yup.string().optional(),
  resolution: yup.string().optional(),
  sorted_out: yup.boolean().optional(),
});

export default tratativaAdminUpdateShape;
