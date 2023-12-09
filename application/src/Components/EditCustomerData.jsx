import { Alert, Col, Container, Form , Row} from "react-bootstrap";

import React, { useEffect, useState } from 'react';
import "../Styles/newConnection.css"
import { fetchDataFromName, saveNewConnection, updateCustomerData } from "../Services/services";
import { useParams } from "react-router-dom";
// import './NewConnection.css';
export function EditCustomerData() {




  const params=useParams();

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
 const [customer,setCustomers]=useState({});

  const [isSubmit,setIsSubmit]=useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(params.name);
    // e.preventDefault();
    // Add logic to handle form submission
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const result=await updateCustomerData(formData,params.name);
        console.log(result);
    } catch (error) {
      console.log(error);
    }
    // console.log(formData);
    // Add logic to handle form submission (e.g., API request)
  };
  const populateCustomerData=async()=>{
    try {
        const result=await fetchDataFromName(params.name);
        setCustomers(result.NewConnections);
        console.log(customer.name);
    } catch (error) {
       console.log(error); 
    }

  }
  useEffect(()=>{
    populateCustomerData();
    // console.log(params.name);
  },[]);
  return (
    <div> 
    <h1>Upadate Customer</h1>
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
            // value={customer.name}
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
          value={formData.status}
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
          value={formData.city}
          onChange={handleChange}
          required
        /><br></br>


        <strong>Zipcode:</strong>

        <input
          type="text"
          id="Zip"
          name="zip"
          className="ncinput"
          value={formData.zip}
          onChange={handleChange}
          required
        /><br></br>

        <button type="submit" className="ncbutton">
          Update
        </button>
      </form>
      <Row mt-4 >
        <Col lg={4}> 
          {isSubmit?<Alert variant="success">connection successfully</Alert>:null}
        </Col>
      </Row>
    </div>
  </div>
    
  );
}
