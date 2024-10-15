
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRibbon, FaSearch, FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import aware from '../assets/images/aware.jpg';
import { auth } from './Firebase'; 
import { signOut } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

const Navbar = () => {
const navigate = useNavigate();
  const handleLogout = async () => {
    try {
        await signOut(auth); // Sign out the user
        console.log("User logged out successfully");
        navigate('/'); // Redirect to the login or home page
    } catch (error) {
        console.error("Error logging out:", error.message);
    }
};
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
        <Logout/>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button type="submit"><FaSearch /></button>
      </div>
    </nav>
  );
};

export default Navbar;
