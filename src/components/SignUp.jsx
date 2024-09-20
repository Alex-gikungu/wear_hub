import React, { useState } from 'react';

const Signup = ({ onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Password match validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Ensure all required fields are in the payload
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phoneNumber,
      password: password, // Hashing handled in the backend
    };

    try {
      const response = await fetch('https://shoe-hub-2.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Signup successful');
        window.location.href = '/signin'; // Redirect to sign-in page
      } else {
        const errorData = await response.json();
        setError('Signup failed: ' + (errorData.error || 'Unknown error'));
      }
    } catch (error) {
      setError('Signup failed: ' + error.message);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="signup-overlay" onClick={handleClose}>
      <div className="signup-form-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>Close</button>
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
