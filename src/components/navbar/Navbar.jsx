import React from "react";
import logo from "../../assets/general/logo.png";
import "../navbar/Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav d-flex justify-content-between align-items-center  p-4">
      <div className="nav--left">
        <img src={logo} alt="" width="150px" className="logo" />
      </div>
      <div className="nav--middle">
        <h1>Horoscope</h1>
      </div>
      <div className="nav--right">
        <ul className="pages list-unstyled d-flex fs-4 mt-3">
          <li className="me-3">
            <a href="#home">Home</a>
          </li>
          <li className="me-3">
            <a href="#tarot">Tarot</a>
          </li>
          <li className="me-3">
            <a href="#astrology">Astrology</a>
          </li>
          <li className="me-3">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
