import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import the CSS for styling
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'

const images = [
    image1,
    image2,
  ];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 800); // Duration of the fade-out effect
    }, 5000); // Duration for each image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`slideshow-image ${fade ? 'fade-in' : 'fade-out'}`}
      />
    </div>
  );
};

export default Slideshow;
