import React from 'react';



const Form = (props) => {

    const handleSubmit = evt => {
        evt.preventDefualt();
        props.submit();
    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value);
      }

    return (
       

        <div>
            <input 
                type='text'
                palceholder='Enter your first name'
                name='name'
                id="name-input"
                onChange={handleChange}
            />
            <h2>Build Your Own Pizza</h2>
            <form id='pizza-form' onSubmit={handleSubmit}>

            <label for="size">Choice of Size</label>
            <select id="size-dropdown" name="size" onChange={handleChange}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="XL">XL</option>
            </select>


            <label for="Sauce">Choice of Sauce</label>
            <label for="Tomato Sauce">Tomato Sauce</label>
                <input 
                    type='radio'
                    name="Sauce"
                    id="Tomato Sauce"
                    value="Tomato Sauce"
                />
                <label for="Alfredo Sauce">Alfredo Sauce</label>
                <input 
                    type='radio'
                    name="Sauce"
                    id="Alfredo Sauce"
                    value="Alfredo Sauce"
                />
                <label for="Honey BBQ Sauce">Honey BBQ Sauce</label>
                 <input 
                    type='radio'
                    name="Sauce"
                    id="Honey BBQ Sauce"
                    value="Honey BBQ Sauce"
                />
                <label for="Marinara Sauce">Marinara Sauce</label>
                <input 
                type='radio'
                name="Sauce"
                id="Marinara Sauce"
                value="Marinara Sauce"
            />

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
                type='text'
                value="Anything else you'd like to add?"
                name="Instruction"
                id="special-text"
            />

            <input  
                type='submit'
                name='Add to Order'
                id='order-button'
                value="Add to Order"
            />

            </form>
        </div>

    )


}

export default Form;