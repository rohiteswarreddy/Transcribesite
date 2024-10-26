import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful!');
      
        navigate('/dashboard'); 
      } else {
        setErrorMessage(response.data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage(
        error.response.data.message || 'Login failed. Please try again.'
      );
    }
  };

  return (
    <div className="registration-form">
      <h1>Login</h1>
      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;