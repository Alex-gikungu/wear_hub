import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/Men'; // Assuming About refers to Men component
import Services from './components/Women'; // Assuming Services refers to Women component
import Signup from './components/SignUp';
import Signin from './components/SignIn';
import Collection from './components/Collection';

const App = () => {
  // Define an array of shoe data (commented out for now)
  // ... (same as before)

  // Define state for cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About cartItems={cartItems} addToCart={addToCart} />} />
        <Route exact path="/services" element={<Services cartItems={cartItems} addToCart={addToCart} />} />
        <Route exact path="/collection" element={<Collection cartItems={cartItems} addToCart={addToCart} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        {/* Corrected route path for CartDetails */}
        <Route path="/cart-page" element={<CartDetails cartItems={cartItems} />} /> 
      </Routes>
    </Router>
  );
};

export default App;

