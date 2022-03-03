import React, { useState,useEffect } from "react";
import Home from './Components/Home'
import { Route } from 'react-router-dom'
import axios from 'axios';
import * as yup from 'yup';
import Form from "./Components/Form";
import formSchema from './validation/schema'; 


const initialFormValues= {
    name: '',
    size: '',
  }
  
  const initialFormErrors = {
    name: '',
    size: '',
  }
  
  const initialOrders = []
  const initialDisabled = true


const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrders = () => {
      axios.get('https://reqres.in/api/orders')
      .then(res => {
          setOrders(res.data);
          }).catch(err => console.log(err))
      }

  const postNewOrder = newOrder => {
      axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
          setOrders([res.data, ...orders])
          setFormValues(initialFormValues);
          setFormErrors(initialFormErrors);
      }).catch(err => console.error(err))
  }

  const validate = (name,value) => {
      yup.reach(formSchema,name)
      .validate(value)
      .then(()=> setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name,value) => {
      validate(name,value);
      setFormValues({...formValues,[name]: value})
  }

  const formSubmit = () => {
      const newOrder = {
          name: formValues.name.trim(),
          size: formValues.size,
      }
      postNewOrder(newOrder);
  }

  useEffect(() => {
      formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pizza">
        <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>

    </div>
  );
};
export default App;
