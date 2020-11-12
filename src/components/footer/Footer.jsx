import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div>
            footer
            <Link to="/">Landing</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export default Footer;