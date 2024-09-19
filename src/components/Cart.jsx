import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const Cart = ({ cartItems }) => {
  // Check if cartItems is defined and not null before accessing length
  const cartCount = cartItems ? cartItems.length : 0;

  return (
    <div className="cart-container d-flex align-items-center">
      <Link to="/cart-page" className="text-decoration-none position-relative">
        {/* Cart Icon */}
        <img src="cart.jpg" alt="Cart Icon" className="cart-icon img-fluid" />
        
        {/* Cart count */}
        {cartCount > 0 && (
          <Badge
            bg="danger"
            className="position-absolute top-0 start-100 translate-middle badge-rounded-pill">
            {cartCount}
          </Badge>
        )}
      </Link>
    </div>
  );
};

export default Cart;
