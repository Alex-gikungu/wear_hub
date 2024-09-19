import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Cart from './Cart';

const About = ({ cartItems, setCartItems }) => {
  // Dummy array of data for the cards
  const cardsData = [
    {
      id: 1,
      image: 'shoe1.jpeg',
      title: 'Transparent Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      price: '$6',
      rating: 4.5
    },
    {
      id: 2,
      image: 'shoe2.jpg',
      title: 'Transparent Feature 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      price: '$50',
      rating: 3.8
    },
    {
      id: 3,
      image: 'shoe3.jpg',
      title: 'Transparent Feature 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      price: '$60',
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
      price: '$560',
      rating: 5.0
    },
    {
      id: 6,
      image: 'shoe6.jpg',
      title: 'Transparent Feature 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      price: '$500',
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
      price: '$230',
      rating: 4.0
    },
    {
      id: 9,
      image: 'shoe9.jpg',
      title: 'Transparent Feature 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      price: '$312',
      rating: 4.0
    },
    {
      id: 10,
      image: 'shoe10.jpg',
      title: 'Transparent Feature 10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio mauris. Aenean euismod bibendum laoreet.',
      price: '$100',
      rating: 4.0
    },
  ];
  

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    if (!cartItems) {
      console.log('cartItems:', cartItems);
      return;
    }

    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <>
      <div className="container my-5">
        {/* Navigation */}
        {/* Title */}
        <div className="text-center mb-5">
          <h1><span> Our </span> Collections </h1>
          <p>This is where you can describe the various services you provide.</p>
        </div>

        {/* Render the cards */}
        <div className="row">
          {cardsData.map(card => (
            <div className="col-lg-4 col-md-6 mb-4" key={card.id}>
              <div className="card h-100">
                <img src={card.image} alt="Feature image" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="review-stars">
                      {Array.from({ length: Math.floor(card.rating) }, (_, index) => (
                        <span key={index} className="text-warning">&#9733;</span>
                      ))}
                      {Array.from({ length: 5 - Math.floor(card.rating) }, (_, index) => (
                        <span key={index + Math.floor(card.rating)} className="text-muted">&#9734;</span>
                      ))}
                    </div>
                    <button className="btn btn-primary" onClick={() => handleAddToCart(card)}>Buy Now</button>
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

export default About;
