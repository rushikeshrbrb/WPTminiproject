import { useState } from "react";
import axios from "axios";

import "../Styles/Registration.css";
import { saveInfo } from "../Services/services";

export function Registration() {
  const [formData, setFormData] = useState({
    // Add form fields as needed
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // e.preventDefault();
    // Add logic to handle form submission
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
       const result= await saveInfo(formData);
      
       console.log(result.message);
    } catch (error) {
        console.log(error);
    }
    
   
        
    
   
  };
 

  return (
    <div>
      <div className="heading">
        <h2>Registration</h2>
        <p>Sign Up For a new Account</p>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label" htmlFor="username">
              <strong>Full Name</strong>
            </label>
            <input
              type="text"
              id="username"
              name="name"
              className="input"
              // value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              className="input"
              name="email"
                // value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="username">
              <strong>Mobile Number</strong>
            </label>
            <input
              type="text"
              
              id="mobile"
              className="input"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
            
              id="password"
              className="input"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="button">
            Register
          </button>

        

          
        </form>

        {/* Add error messages or additional content as needed */}
      </div>
    </div>
  );
}
