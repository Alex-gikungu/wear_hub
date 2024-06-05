import React from 'react';
import About from '.About';

const YourComponent = () => {
  return (
    <div className="container">
   <About
  shoes={[
    { image: 'shoe1.jpg', descriptions: 'Description of shoe 1', price: '$50', reviews: 4.5 },
    { image: 'shoe2.jpg', descriptions: 'Description of shoe 2', price: '$60', reviews: 4.0 },
    // Add more shoes as needed
  ]}
/>

    </div>
  );
};

export default YourComponent;
