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
    axios.get(url)
          .then(response => setState(response));
  }

  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/products">
            <Products products={state}/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>  
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
