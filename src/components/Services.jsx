import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Cart from './Cart';

const Services = ({ handleAddToCart, cartItems }) => {

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
  ];


  const handleBuyNow = (item) => {
    handleAddToCart(item);
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
          {/* Display cart summary */}
          <Cart cartItems={cartItems} />
        </nav>

        {/* Services content */}
        <div className='gg'>
          <h1><span> Women </span> Collections </h1>
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
                  {/* Use handleBuyNow to add item to cart */}
                  <button className="buy-button" onClick={() => handleBuyNow(card)}>Buy Now</button>
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

export default Services;
