import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  // Check if cartItems is defined and not null before accessing length
  const cartCount = cartItems ? cartItems.length : 0;

  return (
    <div className="carts">
      <Link to="/cart-page">
        <img src="cart.jpg" alt="Cart Icon" />
        <span className="cart-count">{cartCount}</span>
      </Link>
    </div>
  );
};

export default Cart;
