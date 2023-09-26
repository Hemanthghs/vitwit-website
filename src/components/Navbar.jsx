import React, { useEffect, useMemo, useState } from "react";
import VitwitLogo from "../assets/vitwit-logo.png";
import { NavLink, useLocation } from "react-router-dom";
import HamburgerIcon from "../assets/HamburgerIcon";
import CloseIcon from "../assets/CloseIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const location = useLocation();

  const path = useMemo(() => location.pathname.split("/"), [location.pathname]);

  const [activePage, setActivePage] = useState([false, false, false, false]);

  useEffect(() => {
    if (path.includes("validator")) setActivePage([false, true, false, false]);
    else if (path.includes("contact"))
      setActivePage([false, false, false, true]);
    else setActivePage([true, false, false, false]);
  }, [path]);

  return (
    <div>
      <div className="nav">
        <NavLink to="/" className="cursor-pointer">
          <img className="nav__logo" src={VitwitLogo} alt="Vitwit Logo" />
        </NavLink>
        <div className={open ? "nav__menu nav__menu__open" : "nav__menu"}>
          <NavLink
            to="/"
            className={
              activePage[0] ? `nav__menu__link nav__active` : `nav__menu__link`
            }
            onClick={handleClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/validator"
            className={
              activePage[1] ? `nav__menu__link nav__active` : `nav__menu__link`
            }
            onClick={handleClick}
          >
            Validator
          </NavLink>
          <NavLink
            to="https://medium.com/vitwit"
            className={
              activePage[2] ? `nav__menu__link nav__active` : `nav__menu__link`
            }
            target="_blank"
            onClick={handleClick}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            className={
              activePage[3]
                ? `nav__menu__link nav__menu__link__contact mr-0 nav__active`
                : `nav__menu__link nav__menu__link__contact mr-0`
            }
            onClick={handleClick}
          >
            Contact Us
          </NavLink>
        </div>
        <div
          className="inline-block tablet:hidden cursor-pointer"
          onClick={handleClick}
        >
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
