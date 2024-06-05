
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Cart from './Cart';

const Collection = () => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Dummy array of data for the cards
  const cardsData = [
    {
      id: 1,
      image: 'wom1.jpg',
      title: 'Transparent Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.5
    },
    {
      id: 2,
      image: 'wom2.jpg',
      title: 'Transparent Feature 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 3.8
    },
    {
      id: 3,
      image: 'wom3.jpg',
      title: 'Transparent Feature 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 5.0
    },
    
    {
      id: 4,
      image: 'wom4.jpg',
      title: 'Transparent Feature 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.3
    },
    {
      id: 5,
      image: 'wom5.jpg',
      title: 'Transparent Feature 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 5.0
    },
    {
      id: 6,
      image: 'wom6.jpg',
      title: 'Transparent Feature 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.0
    },
    {
      id: 7,
      image: 'wom7.jpg',
      title: 'Transparent Feature 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.0
    },
    {
      id: 8,
      image: 'wom8.jpg',
      title: 'Transparent Feature 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.0
    },
    {
      id: 9,
      image: 'wom9.jpg',
      title: 'Transparent Feature 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.0
    },
    {
      id: 10,
      image: 'wom10.jpg',
      title: 'Transparent Feature 10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.0
    },

    {
      id: 1,
      image: 'shoe1.jpeg',
      title: 'Transparent Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.5
    },
    {
      id: 2,
      image: 'shoe2.jpg',
      title: 'Transparent Feature 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 3.8
    },
    {
      id: 3,
      image: 'shoe3.jpg',
      title: 'Transparent Feature 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 5.0
    },
    
    {
      id: 4,
      image: 'shoe4.jpg',
      title: 'Transparent Feature 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.3
    },
    {
      id: 5,
      image: 'shoe5.jpg',
      title: 'Transparent Feature 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 5.0
    },
    {
      id: 6,
      image: 'shoe6.jpg',
      title: 'Transparent Feature 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.0
    },
    {
      id: 7,
      image: 'shoe7.jpg',
      title: 'Transparent Feature 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.0
    },
    {
      id: 8,
      image: 'shoe8.jpg',
      title: 'Transparent Feature 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.0
    },
    {
      id: 9,
      image: 'shoe9.jpg',
      title: 'Transparent Feature 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.0
    },
    {
      id: 10,
      image: 'shoe10.jpg',
      title: 'Transparent Feature 10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      rating: 4.0
    },
  ];

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
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
          {/* Pass cartItems and handleAddToCart function as props to Cart component */}
          <Cart cartItems={cartItems} />
        </nav>

        {/* Services content */}
        <div className='gg'>
          <h1><span> Our </span> Collections </h1>
          <p>
            This is where you can describe the various services you provide.
          </p>
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
                    {/* Render review stars dynamically (replace with your logic) */}
                    {Array.from({ length: Math.floor(card.rating) }, (_, index) => (
                      <span key={index} className="star">&#9733;</span>
                    ))}
                    {Array.from({ length: 5 - Math.floor(card.rating) }, (_, index) => (
                      <span key={index + Math.floor(card.rating)} className="star">&#9734;</span>
                    ))}
                  </div>
                  {/* Pass handleAddToCart function as a prop to the button */}
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
