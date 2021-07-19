import React from 'react';
import { useHistory } from "react-router-dom";
import Logo from './logo.jpg';

export const LogIn = () => {

  let history = useHistory();

  return (
    <div classname="LogIn">
      <img src={Logo}  width="350" height="100" alt="logo" />
      <input type="text" id="email" c placeholder="Username or Email" />
      <input type="password" id="password" placeholder="Password" />
      <button className="btn" onClick={() => {
        history.push("/app");
      }}
      >
         Log In 
         </button>
         <button className="btn" onClick={() => {
        history.push("/signup");
      }}
      >
         Sign Up Now
         </button>
    </div>
  )
};

export default LogIn;