// Module imports
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

// Component imports
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

// CSS imports
import './App.css';

const App = () => {

  const [state, setState] = useState([]);

  const axiosGet = (url) => {
    axios.get("https://rickandmortyapi.com/api/character")
          .then(response => setState(response.data.results))
  }

  const clearState = () => {
    setState([]);
  }

  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/products">
            <Products getApi={axiosGet} clearState={clearState} people={state}/>
          </Route>
          <Route path="/cart">
            <Cart getApi={axiosGet} clearState={clearState} cart={state}/>
          </Route>  
          <Route exact path="/">
            <Landing getApi={axiosGet} clearState={clearState} locs={state}/>
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
