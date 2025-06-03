import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBox,
  FaMoneyBill,
  FaUserCircle,
  FaHeart,
  FaSignOutAlt,
  FaInstagram,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";
import "../styles/Home.css";
import logo from "../assets/logo.png";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import men4 from "../assets/men4.jpg";
import men5 from "../assets/men5.jpg";
import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";
import women4 from "../assets/women4.jpg";
import women5 from "../assets/women5.jpg";
import wedding1 from "../assets/weeding1.jpeg";
import wedding2 from "../assets/weeding2.jpeg";
import wedding3 from "../assets/weeding3.jpeg";
import wedding4 from "../assets/weeding4.jpeg";
import wedding5 from "../assets/wedding5.webp";

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <FaShoppingCart className="cart-icon" />
        <div className="user-section">
          <FaUser className="user-icon" onClick={() => setDropdownOpen(!dropdownOpen)} />
        </div>
      </header>

      {/* User Dropdown - Moved outside the header */}
      {dropdownOpen && (
        <div className="user-dropdown" ref={dropdownRef}>
          <ul>
            <li><FaBox className="icon" /> My Orders</li>
            <li><FaMoneyBill className="icon" /> My Payments</li>
            <li><FaUserCircle className="icon" /> My Profile</li>
            <li><FaHeart className="icon" /> Wish List</li>
            <li onClick={handleLogout}><FaSignOutAlt className="icon" /> Logout</li>
          </ul>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <ul>
          <li>All</li>
          <li>Men's Collection</li>
          <li>Women's Collection</li>
          <li>Wedding Collections</li>
          <li>Hot Offers</li>
          <li>Buy 1 Get 1 Free</li>
        </ul>
      </nav>

      {/* Image Slider */}
      <div className="slider">
        {[slider1, slider2, slider3].map((img, index) => (
          <img key={index} src={img} alt={`Slider ${index + 1}`} />
        ))}
      </div>

      {/* Collections */}
      <section className="collections">
        {[{ title: "Men's Collection", images: [men1, men2, men3, men4, men5] },
          { title: "Women's Collection", images: [women1, women2, women3, women4, women5] },
          { title: "Wedding Collection", images: [wedding1, wedding2, wedding3, wedding4, wedding5] }].map((collection, idx) => (
          <div key={idx}>
            <h2>{collection.title}</h2>
            <div className="collection-grid">
              {collection.images.map((img, index) => (
                <div className="product" key={index}>
                  <img src={img} alt={`${collection.title} ${index + 1}`} className="collection-image" />
                  <p>₹{1999 + index * 500}</p>
                  <button>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 All Rights Reserved</p>
        <div className="social-icons">
          <FaInstagram className="instagram" />
          <FaYoutube className="youtube" />
          <FaWhatsapp className="whatsapp" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
