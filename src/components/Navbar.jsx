import React, { useState } from "react";
import VitwitLogo from "../assets/vitwit-logo.png";
import { NavLink } from "react-router-dom";
import HamburgerIcon from "../assets/HamburgerIcon";
import CloseIcon from "../assets/CloseIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div>
      <div className="nav">
        <img className="nav__logo" src={VitwitLogo} alt="Vitwit Logo" />
        <div className={open ? "nav__menu nav__menu__open" : "nav__menu"}>
          <NavLink to="/" className="nav__menu__link" onClick={handleClick}>
            Home
          </NavLink>
          <NavLink to="/validator" className="nav__menu__link" onClick={handleClick}>
            Validator
          </NavLink>
          <a href="/#bg" className="nav__menu__link" onClick={handleClick}>Blogs</a>
          <NavLink to="/contact" className="nav__menu__link mr-0" onClick={handleClick}>
            Contact Us
          </NavLink>
        </div>
        <div className="inline-block tablet:hidden cursor-pointer" onClick={handleClick}>
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
