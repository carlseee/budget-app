import React from 'react';
import { useHistory } from "react-router-dom";
import Logo from './logo.jpg';
import './SignUp.css';

export const SignUp = () => {

  let history = useHistory();

  return (
    <div>
    <img src={Logo} id="logo1" width="350" height="100" alt="logo" />
      <input type="text" id="username1" placeholder="Username" />
      <input type="password" id="password1" placeholder="Password" />
      <input type="text" id="email1" placeholder="Email" />
      <input type="text" id="number1" placeholder="Cellphone Number" />
      <button className="btn" onClick={() => {
        history.push("/app");
      }}
      >
         Sign Up
         </button>
         <button className="btn" onClick={() => {
        history.push("/");
      }}
      >
         Back to Log In
         </button>
    </div>
  )
};

export default SignUp;