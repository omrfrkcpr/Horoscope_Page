import React, { useState } from "react";
import logo from "../../assets/general/logo.png";
import "../navbar/Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav">
      <div className="nav--left">
        <img src={logo} alt="" width="150px" className="logo" />
      </div>
      <div className="nav--middle">
        <h1>Horoscope</h1>
      </div>
      <div className="nav--right">
        <ul className={`pages list-unstyled  ${showMenu ? "show" : ""}`}>
          <li className="me-1">
            <a href="#home" className="w-100">
              Home
            </a>
          </li>
          <li className="me-1">
            <a href="#tarot">Tarot</a>
          </li>
          <li className="me-1">
            <a href="#astrology">Astrology</a>
          </li>
          <li className="me-1">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav--toggle">
        <button onClick={toggleMenu} className="px-3 py-2 border-0 fs-4 me-3">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
