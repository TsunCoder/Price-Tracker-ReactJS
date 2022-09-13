import React from "react";
import Logo from "../assets/logo.png"
import "../css/header.css"

const header = () => {
  return (
    <div className="header">
      <header>
        <img className="logo" src={Logo} alt="logo" />
        <button href="#" className="header-contact">Liên hệ</button>
      </header>
    </div>
  );
};

export default header;