import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import axios from 'axios';

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
        amount: totalPrice,
      });
      alert('Payment initiated. Please check your phone.');
    } catch (error) {
      console.error('Payment error:', error.response ? error.response.data : error.message);
      alert('Payment failed. Please try again.');
    }
  };

  const handleRemove = (itemToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      
      <div className="table-responsive mb-5">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
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
                  <button className="btn btn-danger btn-sm" onClick={() => handleRemove(item)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="text-end">Total Price</td>
              <td colSpan="2">${totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="payment-section">
        <h3>Select Payment Method</h3>
        <div className="mb-3">
          <div className="form-check">
            <input className="form-check-input" type="radio" id="mpesa" name="paymentMethod" value="mpesa" checked readOnly />
            <label className="form-check-label" htmlFor="mpesa">Mpesa</label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button className="btn btn-success w-100" onClick={handlePayment}>
          Pay Now
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
