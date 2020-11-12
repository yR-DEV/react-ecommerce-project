import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';


import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Header />
          <Switch>
            <Route path="/products">
              <Products />
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
    </div>
  );
}

export default App;
