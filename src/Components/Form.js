import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import schema from '../validation/schema';

const Form = (props) => {

    const [formValues, setFormValues] = useState({
        name: "",
        size: "",
        pepperonis: false,
        ham: false,
        onions: false,
        jalapenos: false,
        instructions: "",
      });

      const [formErrors, setFormErrors] = useState({
        name: "",
        size: "",
        pepperonis: "",
        ham: "",
        onions: "",
        jalapenos: "",
        instructions: "",
      });

      const validate = (e) => {
        yup
          .reach(schema, e.target.name)
          .validate(e.target.value)
          .then((valid) => {
            setFormErrors({
              ...formErrors,
              [e.target.name]: "",
            });
          })
          .catch((err) => {
            console.log(err.errors);
            setFormErrors({
              ...formErrors,
              [e.target.name]: err.errors[0],
            });
          });
      };

      const handleChange = (e) => {
        e.persist();
        validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormValues({ ...formValues, [e.target.name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
        axios
          .post("https://reqres.in/api/pizzas", formValues)
          .then((response) => {
            props.addPizza(response.data);
          })
          .catch((err) => console.log(err));
      };

    return (
       
        
        <div>
            <h2>Build Your Own Pizza</h2>

            <form id='pizza-form' onSubmit={handleSubmit}>
            
            <label for="name">Name: </label>
            <input 
                palceholder='Enter your first name'
                name='name'
                id="name-input"
                value={formValues.name}
                onChange={handleChange}
            />
            {/* <p>{props.errors.name}</p> */}
            <label for="size">Choice of Size </label>
            <select id="size-dropdown" name="size" onChange={handleChange}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="XL">XL</option>
            </select>

            <label for="Toppings">Add Toppings: </label>

            <label for="pepperonis">Pepperonis</label>
            <input 
                type='checkbox'
                name="pepperonis"
                id='pepperonis'
                checked={formValues.pepperonis}
                onChange={handleChange}
            />
            <label for="ham">Ham</label>
            <input 
                type='checkbox'
                name="ham"
                id='ham'
                checked={formValues.ham}
                onChange={handleChange}
            />
            <label for="onions">Onions</label>
            <input 
                type='checkbox'
                name="onions"
                id='onions'
                checked={formValues.onions}
                onChange={handleChange}
            />
            <label for="jalapenos">Jalepenos</label>
            <input 
                type='checkbox'
                name="jalapenos"
                id='jalapenos'
                checked={formValues.jalapenos}
                onChange={handleChange}
            />
            <label for="instructions">Special Instructions: </label>
            <input
                placeholder="Anything else you'd like to add?"
                value={formValues.instructions}
                name="instructions"
                id="special-text"
                onChange={handleChange}
            />

            <input  
                type='submit'
                id='order-button'
                value="Add to Order"
            />

            </form>
        </div>

    )


}

export default Form;