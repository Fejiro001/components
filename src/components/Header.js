import { useState } from "react";
import logo from "../media/images/logo.png";
import Nav from "./Nav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="container header-container">
          <div className="logo">
            <img className="logo-image" src={logo} alt="Company logo" />
            <h1>One Scoop Co.</h1>
          </div>
          <Nav className="desktop-nav" />
          <button onClick={toggleMenu} className="menu">
            {isOpen ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars-staggered"></i>}
          </button>
        </div>
      </header>
      {/* Mobile Nav */}
      {/* Outside the header because of position stacking context */}
      <Nav className={`mobile-nav ${isOpen ? "menu-open" : "menu-closed"}`} />
    </>
  );
}

export default Header;
