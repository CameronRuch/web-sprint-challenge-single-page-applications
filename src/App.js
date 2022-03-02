import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const addPizza = (pizza) => {
    setPizzas([...pizzas, pizza]);
  };
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Form addPizza={addPizza} order={pizzas} />
      </Route>
    </div>
  );
};
export default App;