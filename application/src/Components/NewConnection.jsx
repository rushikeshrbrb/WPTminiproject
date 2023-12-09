import { Col, Container, Form , Row} from "react-bootstrap";

import React, { useState } from 'react';
import "../Styles/newConnection.css"
import { saveNewConnection } from "../Services/services";
// import './NewConnection.css';
export function NewConnection() {






  const [formData, setFormData] = useState({
    name: '',
    
    email: '',
    phone: '',
    date:'',
    nation:'',
    address: '',
    status: '',
    city: '',
    zip: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // e.preventDefault();
    // Add logic to handle form submission
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const result= await saveNewConnection(formData);
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
    // console.log(formData);
    // Add logic to handle form submission (e.g., API request)
  };
  return (
    <div>
    <h1>New Connection Form</h1>
    <div className="nccontainer">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="nclabel" htmlFor="firstName">
            <strong>Name:</strong>
          </label>

          <input
            type="text"
            id="firstName"
            name="name"
            className="ncinput"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>



        <div>
          <label className="nclabel" htmlFor="firstName">
            <strong>Email:</strong>
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="ncinput"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="nclabel" htmlFor="firstName">
            <strong>Mobile Number:</strong>
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            className="ncinput"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <strong>Date of Birth:</strong>

        <input
          type="date"
          id="date"
          name="date"
          className="ncinput"
          value={formData.date}
          onChange={handleChange}
          required
        /><br></br>

        <strong>Nationality:</strong>

        <input
          type="text"
          id="nation"
          name="nation"
          className="ncinput"
          value={formData.nation}
          onChange={handleChange}
          required
        /><br></br>

        <strong>Marital Status:</strong>
        <input
          type="text"
          id="status"
          name="status"
          className="ncinput"
          value={formData.firstName}
          onChange={handleChange}
          required
        /><br></br>

        <strong>Address:</strong>

        <textarea
          id="address"
          className="ncinput"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea><br></br>

        <strong>City/Town/Village:</strong>

        <input
          type="text"
          id="town"
          name="city"
          className="ncinput"
          value={formData.firstName}
          onChange={handleChange}
          required
        /><br></br>


        <strong>Zipcode:</strong>

        <input
          type="text"
          id="Zip"
          name="zip"
          className="ncinput"
          value={formData.firstName}
          onChange={handleChange}
          required
        /><br></br>

        <button type="submit" className="ncbutton">
          Submit Request
        </button>
      </form>
    </div>
  </div>
    
  );
}
