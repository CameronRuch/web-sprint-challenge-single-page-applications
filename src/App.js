import React, { useState } from "react";
import * as yup from 'yup';
import { Route } from 'react-router-dom';

//ROute Components
import Form from './Components/Form';
import Home from './Components/Home';
import schema from './validation/schema';


const initialFormValues = {
  toppings: false,
  size: '',
  specialText: "Anything else you'd like to add?",
  Sauce: false

}


const App = (props) => {
  
  const [formValues, setFormValues] = useState(initialFormValues);
  const [order, setOrders] = useState([]);

   const handleSubmit = (evt) => {
         setOrders([formValues, ...order]);
         evt.preventDefault();
   }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }
      
  return (
    <div>
      <Route exact path="/">
       <Home />
      </Route> 
      <Route path ="/pizza">
        <Form 
         values={formValues}
         submit={handleSubmit}
         change={handleChange}
        />
      </Route>

    </div>
  );
};
export default App;
