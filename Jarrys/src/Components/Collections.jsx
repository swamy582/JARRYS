import React from "react";
import "../styles/Collections.css";
import men1 from "../assets/men1.jpg";
import women1 from "../assets/women1.jpg";

const Collections = () => {
  return (
    <div className="collections">
      <h2>Our Collections</h2>

      <h3>Men's Collection</h3>
      <div className="collection-grid">
        <div className="item">
          <img src={men1} alt="Men's Fashion" />
          <p>$50</p>
          <button>Add to Cart</button>
        </div>
        {/* Add more men's collection items here */}
      </div>

      <h3>Women's Collection</h3>
      <div className="collection-grid">
        <div className="item">
          <img src={women1} alt="Women's Fashion" />
          <p>$40</p>
          <button>Add to Cart</button>
        </div>
        {/* Add more women's collection items here */}
      </div>
    </div>
  );
};

export default Collections;
