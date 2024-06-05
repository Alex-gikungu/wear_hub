import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Cart from './Cart';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      {/* Navigation bar with cart icon */}
      <nav className="navigation-container">
        <ul className="navigation-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Men</Link></li>
          <li><Link to="/services">Women</Link></li>
          <li><Link to="/services">Collection</Link></li>
          <li><Link to="/customer-care">Customer Care</Link></li>
          <li className="cart-container">
            {/* Pass cartItems as a prop to Cart component */}
            <Cart cartItems={cartItems} />
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="home-container">
        <div className="buttons">
          <Link to="/signin"><button className='button1'>Sign In</button></Link>
          <Link to="/signup"><button className='button2'>Sign Up</button></Link>
        </div>
        <h1>Welcome to our Shoe-Hub Collection !</h1>
        <h3>Your number one shoes collections </h3>
        <p>Walk under the planet  </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
