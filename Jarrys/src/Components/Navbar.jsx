import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; // Ensure this image is in the assets folder

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="icons">
        <FaShoppingCart className="cart-icon" />
        <FaUser className="user-icon" />
      </div>
    </div>
  );
};

export default Navbar;
