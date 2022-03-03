import React  from "react";
import "../App.css"
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <>
        <div className="header-wrapper">
            <h1>chubby's pizza</h1>
            <div>
                <Link to={"/pizza"}>
                    <button id="order-pizza">
                        Order
                    </button>
                </Link>
                <button>Help</button>
            </div>
        </div>
        </>    
    )
}

export default Home;