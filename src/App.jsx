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

  const axiosGet = () => {
    axios.get("https://rickandmortyapi.com/api/character")
          .then(response => setState({characters: response.data.results, dates: []}))
  }

  const clearState = () => {
    // setState({characters: []});
    console.log(state);
  }

  const addToCart = (date) => {
    // let dateCart = state.dates[1];
    // dateCart.push(date);
    console.log(date);
    setState({...state, dates: [date]})
    console.log(state);
  }

  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/products">
            <Products getApi={axiosGet} clearState={clearState} addToCart={addToCart} people={state.characters}/>
          </Route>
          <Route path="/cart">
            <Cart getApi={axiosGet} clearState={clearState} cart={state.dates}/>
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
