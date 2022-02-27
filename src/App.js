import React, { useState, useEffect } from "react";
import * as yup from 'yup';

import Form from './Components/Form';
import Home from './Components/Home';
import schema from './validation/schema';


const initialFormValues = {
  toppings: false,
  size: '',
  specialText: "Anything else you'd like to add?",
  Sauce: false

}

const App = () => {


  return (
    <div>

      <Route exact path="/">
       <Home
         
        />
      </Route> 
      <Route path ="/pizza">
        <Form />
      </Route>


  
    </div>
  );
};
export default App;
