import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function HomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div>
      <center>
      <br></br><br></br><br></br>
      <h1>Welcome to our App!</h1>
      <p>This is the homepage.</p>

      <div>
        <button onClick={handleLoginClick} className="button">Login</button>
        <button onClick={handleRegisterClick} className="button">Register</button>
      </div>
        </center>
    </div>
  );
}

export default HomePage;