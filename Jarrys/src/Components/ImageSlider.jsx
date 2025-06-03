import React, { useState } from "react";
import "../styles/ImageSlider.css";
import image1 from "../assets/slider1.jpg";
import image2 from "../assets/slider2.jpg";
import image3 from "../assets/slider3.jpg";

const images = [image1, image2, image3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt="Slider" />
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ImageSlider;
