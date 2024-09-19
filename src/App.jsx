import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Signup from './components/SignUp';
import Signin from './components/SignIn';
import Collection from './components/Collection';
import CartPage from './components/CartPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems(prevCartItems => [...prevCartItems, { ...item, quantity: 1 }]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route
          exact
          path="/services"
          element={<Services handleAddToCart={handleAddToCart} cartItems={cartItems} />}
        />
        <Route
          exact
          path="/collection"
          element={<Collection cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/cart-page"
          element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
