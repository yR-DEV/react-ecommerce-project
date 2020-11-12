import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Header = () => {


    return (
        <div>
            header
            <Link to="/">Landing</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export default Header;