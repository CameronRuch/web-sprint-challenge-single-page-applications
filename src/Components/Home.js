import React from 'react';
import Pizza from '../Images/Pizza.jpg'
import { useHistory } from 'react-router-dom';

const Home = () => {

    const history = useHistory();
    const routeChange = () => {
        const path = '/pizza'
        history.push(path);
    }

    return (

        <header>
            <h1>chubby's pizza</h1>
            <button>Home</button>
            <button>Help</button>
    
            <div>
                <img src={Pizza} />
                <button id="order-pizza" onClick={routeChange}>
                    Pizza
                </button>
            </div>
        </header>


    )
}

export default Home;