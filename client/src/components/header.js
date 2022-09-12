import React from "react";
import Logo from "../assets/logo.png"
import "../css/header.css"
const header = () => {
  return (
    <div>
      <header>
        <img className="logo" src={Logo} alt="logo" />
        <nav>
            <ul className="nav__link">
            </ul>
        </nav>
      </header>
    </div>
  );
};

export default header;