import "./image-carousel.css";

import carousel1 from "../assets/react-core-concepts.png";
import carousel2 from "../assets/components.png";
import carousel3 from "../assets/jsx-ui.png";
import carousel4 from "../assets/config.png";
import carousel5 from "../assets/state-mgmt.png";
import { useState } from "react";

const images = [carousel1, carousel2, carousel3, carousel4, carousel5];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-box">
      <h3>Image Carousel</h3>
      <p>Implement a basic image carousel using useState to cycle through a list of images. Allow the user to navigate through the images.</p>
      <div className="carousel-container">
        <button className="carousel-btn" onClick={goPrev}>&lt;</button>
        <img src={images[current]} alt={`carousel-${current}`} className="carousel-img" />
        <button className="carousel-btn" onClick={goNext}>&gt;</button>
      </div>
      <p className="carousel-indicator">Image {current + 1} of {images.length}</p>
    </section>
  );
};

export default ImageCarousel;
