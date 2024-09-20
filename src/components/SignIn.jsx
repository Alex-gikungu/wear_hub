import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // To programmatically navigate after signin

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(''); // Clear any previous error messages

    try {
      const response = await fetch('https://shoe-hub-2.onrender.com/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailOrPhone,  // Use 'email' key for signin
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful signin: Redirect to the homepage
        navigate('/homepage');
      } else {
        // Show error message
        setErrorMessage(data.error || 'Signin failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
};


  return (
    <div className="signin-container">
      <h2>Signin</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
          className="signin-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="signin-input"
        />
        <button type="submit" className="signin-button">Signin</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}  {/* Show error message */}

      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
};

export default Signin;


