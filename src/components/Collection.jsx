import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Cart from './Cart';

const Collection = ({ cartItems, setCartItems }) => {
  // Dummy array of data for the cards
  const cardsData = [
    { id: 1, image: 'wom1.jpg', title: 'Transparent Feature 1', description: 'Lorem ipsum...', rating: 4.5, price: '$50', quantity: 1 },
    { id: 2, image: 'wom2.jpg', title: 'Transparent Feature 2', description: 'Lorem ipsum...', rating: 3.8, price: '$60', quantity: 1 },
    { id: 3, image: 'wom3.jpg', title: 'Transparent Feature 3', description: 'Lorem ipsum...', rating: 5.0, price: '$70', quantity: 1 },
    { id: 4, image: 'wom4.jpg', title: 'Transparent Feature 4', description: 'Lorem ipsum...', rating: 4.3, price: '$80', quantity: 1 },
    { id: 5, image: 'wom5.jpg', title: 'Transparent Feature 5', description: 'Lorem ipsum...', rating: 5.0, price: '$90', quantity: 1 },
    { id: 6, image: 'wom6.jpg', title: 'Transparent Feature 6', description: 'Lorem ipsum...', rating: 4.0, price: '$100', quantity: 1 },
    { id: 7, image: 'wom7.jpg', title: 'Transparent Feature 7', description: 'Lorem ipsum...', rating: 4.0, price: '$110', quantity: 1 },
    { id: 8, image: 'wom8.jpg', title: 'Transparent Feature 8', description: 'Lorem ipsum...', rating: 4.0, price: '$120', quantity: 1 },
    { id: 9, image: 'wom9.jpg', title: 'Transparent Feature 9', description: 'Lorem ipsum...', rating: 4.0, price: '$130', quantity: 1 },
    { id: 10, image: 'wom10.jpg', title: 'Transparent Feature 10', description: 'Lorem ipsum...', rating: 4.0, price: '$140', quantity: 1 },
    { id: 11, image: 'shoe1.jpeg', title: 'Transparent Feature 11', description: 'Lorem ipsum...', rating: 4.5, price: '$150', quantity: 1 },
    { id: 12, image: 'shoe2.jpg', title: 'Transparent Feature 12', description: 'Lorem ipsum...', rating: 3.8, price: '$160', quantity: 1 },
    { id: 13, image: 'shoe3.jpg', title: 'Transparent Feature 13', description: 'Lorem ipsum...', rating: 5.0, price: '$170', quantity: 1 },
    { id: 14, image: 'shoe4.jpg', title: 'Transparent Feature 14', description: 'Lorem ipsum...', rating: 4.3, price: '$180', quantity: 1 },
    { id: 15, image: 'shoe5.jpg', title: 'Transparent Feature 15', description: 'Lorem ipsum...', rating: 5.0, price: '$190', quantity: 1 },
    { id: 16, image: 'shoe6.jpg', title: 'Transparent Feature 16', description: 'Lorem ipsum...', rating: 4.0, price: '$200', quantity: 1 },
    { id: 17, image: 'shoe7.jpg', title: 'Transparent Feature 17', description: 'Lorem ipsum...', rating: 4.0, price: '$210', quantity: 1 },
    { id: 18, image: 'shoe8.jpg', title: 'Transparent Feature 18', description: 'Lorem ipsum...', rating: 4.0, price: '$220', quantity: 1 },
    { id: 19, image: 'shoe9.jpg', title: 'Transparent Feature 19', description: 'Lorem ipsum...', rating: 4.0, price: '$230', quantity: 1 },
    { id: 20, image: 'shoe10.jpg', title: 'Transparent Feature 20', description: 'Lorem ipsum...', rating: 4.0, price: '$240', quantity: 1 },
  ];

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <>
      <div className="services-container">
        {/* Navigation tabs */}
        <nav className="navigation-container">
          <ul className="navigation-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Men</Link></li>
            <li><Link to="/services">Women</Link></li>
            <li><Link to="/collection">Collection</Link></li>
            <li><Link to="/customer-care">Customer Care</Link></li>
          </ul>
          <Cart cartItems={cartItems} />
        </nav>

        {/* Services content */}
        <div className='gg'>
          <h1><span> Our </span> Collections </h1>
          <p>This is where you can describe the various services you provide.</p>
        </div>

        {/* Render the cards */}
        <div className="cards-container">
          {cardsData.map(card => (
            <div className="feature-card" key={card.id}>
              <img src={card.image} alt="Feature image" className="feature-image" />
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <div className="review-and-button">
                  <div className="review-stars">
                    {Array.from({ length: Math.floor(card.rating) }, (_, index) => (
                      <span key={index} className="star">&#9733;</span>
                    ))}
                    {Array.from({ length: 5 - Math.floor(card.rating) }, (_, index) => (
                      <span key={index + Math.floor(card.rating)} className="star">&#9734;</span>
                    ))}
                  </div>
                  <button className="buy-button" onClick={() => handleAddToCart(card)}>Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Collection;
