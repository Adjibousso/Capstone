import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRibbon, FaSearch, FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useSelector } from "react-redux";
import { signOut } from 'firebase/auth'; 
import { auth } from './Firebase'; 
import aware from '../assets/images/aware.jpg';
import Logout from './Logout';
import { toast,ToastContainer } from 'react-toastify';

const Navbar = () => {
  // state for cart products and search input
  const products = useSelector(state => state.cart.products);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // function to handle search logic
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      
      
    }

    if(searchTerm ==="africa"){
      navigate("/Afrique")
    }else if (searchTerm=== 'europe'){
      navigate ('/Europe')
    } else if (searchTerm==='asia'){
      navigate('/Asia')
    }else if (searchTerm==='usa'){
      navigate('/NorthAmerica')
    }else{
      navigate('./')
    }

  };

  // function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log("User logged out successfully");
      //display the a pop-up message  for successfull logging
      toast.success('you are logged out successfully')

      navigate('/'); // Redirect to the login or home page
    } catch (error) {
      //catch error
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
      {/* navigation bar links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/signin"><FaSignInAlt /></Link></li>
        <li><Link to="/register"><FaUserPlus /></Link></li>
        <li>
          {/* link to shopping cart */}
          <Link to="/cart"><FaShoppingCart />
            {products.length > 0 && (
              <span className="cartItem">{products.length}</span>
            )}
          </Link>
        </li>
        <Logout />
      </ul>
      {/* handle search   */}
      <div className="navbar-search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit"><FaSearch /></button>
        </form>
        {/* toastcontainer  */}
        <ToastContainer/>
      </div>
    </nav>
  );
};

export default Navbar;
