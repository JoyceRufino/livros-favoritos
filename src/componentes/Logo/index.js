import React from "react";
import logo from "../../assets/image/logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <div className="logo">
        <img  
        src={logo} alt="logo" 
        className="logo-img"/>
        <p>
          Livros<strong> Enjoy</strong>
        </p>
      </div>
    </div>
  );
};

export default Logo;
