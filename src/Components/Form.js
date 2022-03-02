import React from 'react';

const Form = (props) => {

    const handleChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value);
      }

    const handleSubmit = evt => {
        evt.preventDefualt();
        props.submit();
    }

    return (
       
        
        <div>
            <h2>Build Your Own Pizza</h2>

            <form id='pizza-form' onSubmit={handleSubmit}>
            
            <label for="name">Name: </label>
            <input 
                palceholder='Enter your first name'
                name='name'
                id="name-input"
                value={props.values.name}
                onChange={handleChange}
            />

            <label for="size">Choice of Size</label>
            <select id="size-dropdown" name="size" onChange={handleChange}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="XL">XL</option>
            </select>

            <label for="Toppings">Add Toppings</label>

            <label for="Toppings">Pepperoni</label>
            <input 
                type='checkbox'
                name="Toppings"
                id='Pepperoni'
                checked
            />
            <label for="Toppings">Ham</label>
            <input 
                type='checkbox'
                name="Toppings"
                id='Ham'
                checked
            />
            <label for="Toppings">Onion</label>
            <input 
                type='checkbox'
                name="Toppings"
                id='Onion'
                checked
            />
            <label for="Toppings">Jalepeno</label>
            <input 
                type='checkbox'
                name="Toppings"
                id='Jalepeno'
                checked
            />
            <label for="Instruction">Special Instructions</label>
            <input
                placeholder="Anything else you'd like to add?"
                value={props.values.specialText}
                name="Instruction"
                id="special-text"
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