//-----------------------------------------------------------------------

import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function RegistrationForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    if (!email || !companyName || !name || !mobile || !designation || !password) {
      setErrorMessage("Please fill in all required fields.");
      return; // Stop submission
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await axios.post('https://bbd51a59-302c-47a8-8512-dcf9f19ba6d8-00-340pauc7y3mrt.sisko.replit.dev/api/register', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        console.log("Registration successful!");
       
        navigate("/login");
      } else {
        // Handle other status codes like 400, 409 (Conflict)
        setErrorMessage(
          response.data.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
       
        
        {errorMessage && (
          <p className="error-message">{errorMessage}</p>
        )}
        <label htmlFor="email">Email:</label>
                    <input
                   type="email"
                   id="email"
                   name="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                 />
                 <br />
                 <br />

                 <label htmlFor="company">Company Name:</label>
                 <input
                   type="text"
                   id="company"
                   name="company"
                   value={companyName}
                   onChange={(e) => setCompanyName(e.target.value)}
                   required
                 />
                 <br />
                 <br />

                 <label htmlFor="name">Name:</label>
                 <input
                   type="text"
                   id="name"
                   name="name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   required
                 />
                 <br />
                 <br />

                 <label htmlFor="mobile">Mobile Number:</label>
                 <input
                   type="tel"
                   id="mobile"
                   name="mobile"
                   value={mobile}
                   onChange={(e) => setMobile(e.target.value)}
                   required
                 />
                 <br />
                 <br />

                 <label htmlFor="designation">Designation:</label>
                 <input
                   type="text"
                  id="designation"
                   name="designation"
                   value={designation}
                   onChange={(e) => setDesignation(e.target.value)}
                   required
                 />
                 <br />
                 <br />

                 <label htmlFor="password">Password:</label>
                 <input
                   type="password"
                   id="password"
                   name="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   required
                 />
                 <br />
                 <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;

//==========================================================================
