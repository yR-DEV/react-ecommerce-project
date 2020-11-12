import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Products />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
