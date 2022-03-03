import * as yup from 'yup';

const schema = yup.object().shape({ 
    name: yup
      .string()
      .trim()
      .min(2, "name must be at least 2 characters"),
    size: yup
      .string()
      .required("You must pick a size."),

  });

export default schema;
