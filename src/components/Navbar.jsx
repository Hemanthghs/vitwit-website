import React from 'react'
import VitwitLogo from '../assets/vitwit-logo.png';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../assets/HamburgerIcon';
import CloseIcon from '../assets/CloseIcon';

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
            <img className='nav__logo' src={VitwitLogo} alt="Vitwit Logo" />
            <div className='nav__menu'>
                <Link className='nav__menu__link'>Home</Link>
                <Link className='nav__menu__link'>Validator</Link>
                <Link className='nav__menu__link'>Blogs</Link>
                <Link className='nav__menu__link mr-0'>Contact Us</Link>
            </div>
            <div>
                <HamburgerIcon />
                {/* <CloseIcon /> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar