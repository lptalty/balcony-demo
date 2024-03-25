import React from "react";
import "./Header.css";

const balconyLogo =
  "https://demo.balcony.technology/static/media/balcony.81c96be6c6ed893cf6c91a2209248d57.svg";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={balconyLogo} alt="logo" alt="Property" className="logo" />
      </a>
      <button className="login-button">Login</button>
    </div>
  );
};

export default Header;
