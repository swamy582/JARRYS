import React from "react";
import "../styles/NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li>All</li>
        <li>Men's Collection</li>
        <li>Women's Collection</li>
        <li>Wedding Collections</li>
        <li>Hot Offers</li>
        <li>Buy 1 Get 1 Free</li>
      </ul>
    </div>
  );
};

export default NavigationBar;
