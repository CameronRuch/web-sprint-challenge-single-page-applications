import React from 'react';
import Pizza from '../Images/Pizza.jpg';
import { Link } from 'react-router-dom';

const Home = () => {

    // const RouteChange = () => {
    //     const history = useNavigate();
    //     const path = '/pizza'
    //     history.push(path);
    // }

    return (

        <header>
            <h1>chubby's pizza</h1>
            <Link to="/">
            <button>Home</button>
            </Link>
            <button>Help</button>
    
            <div>
                <img src={Pizza} />
                <Link to="/pizza "id="order-pizza">
                   <button>Order Pizza!</button> 
                </Link>
            </div>
        </header>


    )
}

export default Home;