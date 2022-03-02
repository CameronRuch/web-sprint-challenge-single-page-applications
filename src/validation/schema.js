import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is a required field.")
      .min(2, "name must be at least 2 characters"),
    size: yup.string().required("You must pick a size."),
    pepperonis: yup.boolean().oneOf([true]),
    ham: yup.boolean().oneOf([true]),
    onions: yup.boolean().oneOf([true]),
    jalapenos: yup.boolean().oneOf([true]),
    instructions: yup.string()
  });

export default schema;
