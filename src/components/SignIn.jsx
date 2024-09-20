import React, { useState } from 'react';

const Signin = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const payload = {
      email_or_phone: emailOrPhone,
      password
    };
  
    try {
      const response = await fetch('https://shoe-hub-2.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Signin successful', data);
        // Redirect to the homepage or dashboard after sign-in
      } else {
        const errorData = await response.json();
        setError('Signin failed: ' + (errorData.error || 'Invalid credentials'));
      }
    } catch (error) {
      setError('Signin failed: ' + error.message);
    }
  };
  


  return (
    <div className="signin-container">
      <h2>Signin</h2>
      {error && <p className="error-message">{error}</p>}
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
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
};

export default Signin;
