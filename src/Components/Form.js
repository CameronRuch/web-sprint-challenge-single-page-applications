import React from 'react';
import "../App.css"


export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name,value,checked,type } = evt.target;
        const trueValue = type === 'checkbox' ? checked : value;
        console.log(`name: ${name} trueValue: ${trueValue}`)
        change(name, trueValue);
        console.log(values)
    }

    return (
        <form id="pizza-form">
            <div>
                <h2>Order your pizza</h2>
                <div className="diverrors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>
            <div>
                 <label>Enter name&nbsp;
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        id='name-input'
                    />
                </label>
                <label>Choose size
                    <select id="size-dropdown" value={values.size} name="size" onChange={onChange}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <h5>Choose toppings</h5>
                <label>Pepperonis
                    <input
                        type="checkbox"
                        name="toppings"
                        value="pepperonis"
                    />
                </label>
                <label>Ham
                    <input
                        type="checkbox"
                        name="toppings"
                        value="ham"
                    />
                </label>
                <label>Onions
                    <input
                        type="checkbox"
                        name="toppings"
                        value="onions"
                    />
                </label>
                <label>Jalapenos
                    <input
                        type="checkbox"
                        name="toppings"
                        value="jalapenos"
                    />
                </label>
                <label>Special Instructions
                    <input
                        type="text"
                        name="instructions"
                        id="special-text"
                    />
                </label>
                <button id="order-button" disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}
