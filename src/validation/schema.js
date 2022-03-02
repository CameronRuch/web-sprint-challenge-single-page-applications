import * as yup from 'yup';

const schema = yup.object().shape({

        name: yup 
            .string()
            .required('name must be at least 2 characters')
            .trim()
            .min(2, 'name must be at least 2 characters'),

})

export default schema;