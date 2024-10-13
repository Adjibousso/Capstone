
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRibbon, FaSearch, FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import aware from '../assets/images/aware.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <IconContext.Provider value={{ color: '#f72d92f3' }}>
          <FaRibbon className="logo-icon" />
        </IconContext.Provider>
        <img src={aware} alt="logo" className="aware" />
        <h3>Breast Cancer Awareness &nbsp;</h3>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/signin"><FaSignInAlt /></Link></li>
        <li><Link to="/register"><FaUserPlus /></Link></li>
        <li><Link to="/cart"><FaShoppingCart /></Link></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button type="submit"><FaSearch /></button>
      </div>
    </nav>
  );
};

export default Navbar;
