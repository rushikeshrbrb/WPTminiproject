
import React, { useState } from "react";

import "../Styles/login.css"
import { Container } from "react-bootstrap";
export function Login(){
    

  const [email, setEmail] = useState('');
  const [pass,setPass] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email);
  }

    return(
        <Container className="lbody">
          <div className="auth-form-container">
             <h2 className=" lh2 ">Please Login</h2>
            
             <form className="login-form" onSubmit={handleSubmit}>
                <lable htmlfor ="email" className="lable">Username</lable>
                <input className="linput" value ={email} onChange={(e) => setEmail(e.target.value)}type ="email" placeholder="email@gmail.com" id="email" name="email"></input>
            
                <lable htmlfor ="password" className="lable">Password</lable>
                <input className="linput" value ={pass} onChange={(e) => setPass(e.target.value)}type ="password" placeholder="******" id="password" name="password"></input>
               
               <button type= "submit" className="lbutton">Login</button>
               {/* <button>Forgot Password</button> */}
        
             </form>

             
      </div>
      </Container>
       
    )
}
    