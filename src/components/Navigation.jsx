// Navigation.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart'; // Import the Cart component

const Navigation = ({ cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Brand</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">Men</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/services">Women</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/collection">Collection</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/customer-care">Customer Care</Link></li>
        </ul>
        <Cart cartItems={cartItems} />
      </div>
    </nav>
  );
};

export default Navigation;
