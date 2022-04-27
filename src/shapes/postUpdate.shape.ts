import * as yup from 'yup';

const postUpdateShape = yup.object().shape({
  type_id: yup.string().optional(),
  visible: yup.boolean().optional(),
  update_date: yup.date().transform(() => new Date()),
  description: yup.string().optional(),
  image: yup.string().optional(),
});

export default postUpdateShape;
