import { useState } from 'react';
import { motion, Animatpresence } from 'framer-motion';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      prevIndex + 1 === images.length ? 0 : prevIndex + 1;
    });
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1;
    });
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
};
