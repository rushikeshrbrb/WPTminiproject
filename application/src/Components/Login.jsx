
import React, { useState } from "react";

import "../Styles/login.css"
import { Alert, Container } from "react-bootstrap";
import { login } from "../Services/AdminSevice";
import { useNavigate } from "react-router-dom";
export function Login(){
   const navigate=useNavigate();
    const[formData,setFormData]=useState({email:"",password:"",});
    const [loginError,setLoginError]=useState(false);
    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value});
    }

  // const [email, setEmail] = useState('');
  // const [pass,setPass] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
     const result= await login(formData);
    //  console.log(result);
     localStorage.setItem("token",result.token);
      navigate("/home");
      
    } catch (error) {
      console.log(error);
      setLoginError(true);
    }
    // console.log(email);
  }

    return(
        <Container className="lbody">
          <div className="auth-form-container">
             <h2 className=" lh2 ">Please Login</h2>
            
             <form className="login-form" onSubmit={handleSubmit}>
                <lable htmlfor ="email" className="lable">Username</lable>
                <input className="linput" type ="email" placeholder="email@gmail.com" id="email" name="email" onChange={handleChange}></input>
            
                <lable htmlfor ="password" className="lable">Password</lable>
                <input className="linput" type ="password" placeholder="******" id="password" name="password" onChange={handleChange}></input>
               
               <button type= "submit" className="lbutton">Login</button>
               {/* <button>Forgot Password</button> */}
        
             </form>
      {loginError?<Alert variant="danger" className="mt-3">Invalid Phone And PassWord</Alert>:null}
             
      </div>
      </Container>
       
    )
}
    