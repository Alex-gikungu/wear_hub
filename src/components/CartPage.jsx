import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import axios from 'axios'; // Add this line

const CartPage = ({ cartItems, setCartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    let total = 0;
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((item) => {
        if (item && item.price) {
          total += parseInt(item.price.replace('$', ''), 10) * item.quantity;
        }
      });
    }
    setTotalPrice(total);
  }, [cartItems]);

  const handlePayment = async () => {
    const formattedPhone = phone.startsWith('0') ? phone.replace('0', '254') : phone;
    try {
      const response = await axios.post('http://localhost:3001/pay', {
        phone: formattedPhone,
        amount: totalPrice
      });
      alert('Payment initiated. Please check your phone.');
    } catch (error) {
      console.error('Payment error:', error.response ? error.response.data : error.message);
      alert('Payment failed. Please try again.');
    }
  };
  
  

  const handleRemove = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-page-container">
      <h2>Cart Items</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Number of Items</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems && cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price ? `$${item.price}` : ''}</td>
              <td>
                <button onClick={() => handleRemove(item)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total Price</td>
            <td>${totalPrice}</td>
          </tr>
        </tfoot>
      </table>

      <div className="payment-section">
        <h3>Select Payment Method</h3>
        <div className="radio-group">
          <input type="radio" id="mpesa" name="paymentMethod" value="mpesa" checked readOnly />
          <label htmlFor="mpesa">Mpesa</label>
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button onClick={handlePayment}>Pay</button>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
