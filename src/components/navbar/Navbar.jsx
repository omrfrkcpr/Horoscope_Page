import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/general/logo.png";
import "../navbar/Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [menuOpacity, setMenuOpacity] = useState(0); // Opaklık durumu

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = (event) => {
    // Menü açıkken ve tıklanan öğe menü dışında ve buton dışında ise menüyü kapat
    if (
      showMenu &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    // Body'ye tıklama olayını dinle
    document.body.addEventListener("click", handleOutsideClick);

    // Cleanup: Component kaldırıldığında event listener'ı temizle
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [showMenu]);

  useEffect(() => {
    // Opaklık durumunu güncelle
    if (window.innerWidth <= 800) {
      setMenuOpacity(showMenu ? 1 : 0);
    }
  }, [showMenu]);

  return (
    <div className="nav">
      <div className="nav--left">
        <img src={logo} alt="" width="150px" className="logo" />
      </div>
      <div className="nav--middle">
        <h1>Horoscope</h1>
      </div>
      <div className="nav--right" ref={menuRef}>
        <ul
          className={`pages list-unstyled ${showMenu ? "show" : ""}`}
          style={{ opacity: menuOpacity, transition: "opacity 0.5s" }}
        >
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
      <div className="nav--toggle" ref={buttonRef}>
        <button onClick={toggleMenu} className="px-3 py-2 border-0 fs-4 me-3">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
