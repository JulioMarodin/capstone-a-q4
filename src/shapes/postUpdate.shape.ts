import * as yup from 'yup';

const postUpdateShape = yup.object().shape({
  type_id: yup.string().required(),
  visible: yup.boolean().required(),
  update_date: yup.date().transform(() => new Date()),
  description: yup.string().optional(),
  image: yup.string().optional(),
});

export default postUpdateShape;
