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

      {/* Main content */}
      <div className="home-container">
        <h1 className="hero-title">Welcome to our Shoe-Hub Collection!</h1>
        <h3 className="hero-subtitle">Your number one shoes collection</h3>
        <p>Walk under the planet</p>
        
        <div className="buttons">
          <Link to="/signin"><button className='button1'>Sign In</button></Link>
          <Link to="/signup"><button className='button2'>Sign Up</button></Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
