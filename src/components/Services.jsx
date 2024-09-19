import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="container">
        {/* Navigation tabs */}
       
        {/* Services content */}
        <div className="text-center my-4">
          <h1><span style={{ color: '#28a745' }}>Women</span> Collections</h1>
          <p>This is where you can describe the various services you provide.</p>
        </div>

        {/* Render the cards */}
        <div className="row">
          {cardsData.map(card => (
            <div className="col-md-4 mb-4" key={card.id}>
              <div className="card">
                <img src={card.image} alt="Feature" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="text-warning">
                        {Array.from({ length: Math.floor(card.rating) }, (_, index) => (
                          <span key={index}>&#9733;</span>
                        ))}
                        {Array.from({ length: 5 - Math.floor(card.rating) }, (_, index) => (
                          <span key={index + Math.floor(card.rating)}>&#9734;</span>
                        ))}
                      </span>
                    </div>
                    <button className="btn btn-primary" onClick={() => handleBuyNow(card)}>Buy Now</button>
                  </div>
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
