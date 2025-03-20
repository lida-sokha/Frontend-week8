import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevImage} />

      <img
        src={images[currentIndex].src} // Display the current image
        alt={images[currentIndex].alt}
        className="slide"
      />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextImage} />
    </div>
  );
};
