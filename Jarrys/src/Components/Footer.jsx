import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2025 All Rights Reserved</p>
      <div className="social-icons">
        <FaInstagram className="icon instagram" />
        <FaYoutube className="icon youtube" />
        <FaWhatsapp className="icon whatsapp" />
      </div>
    </div>
  );
};

export default Footer;
