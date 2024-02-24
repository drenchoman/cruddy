'use client';
import { useState } from 'react';
import { motion, Animatpresence } from 'framer-motion';
import styles from './carousel.module.css';
import Image from 'next/image';
import rightArrow from '@/public/right-arrow.svg';
import leftArrow from '@/public/left-arrow.svg';

export default function Carousel({ products }) {
  const images = products.map((product) => product.image);
  const [currentIndex, setCurrentIndex] = useState(0);
  const copy = [
    'Carry Your World in Style!',
    'Elevate Your Casual Game',
    'Classic Comfort, Modern Style',
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={`${styles.cardInner} ${
          currentIndex === 1 ? styles.reverse : ''
        }`}
      >
        <div className={styles.description}>
          <h3>{copy[currentIndex]}</h3>
          <p>{products[currentIndex].title}</p>
        </div>

        <div className={styles.image}>
          <Image
            key={currentIndex}
            src={images[currentIndex]}
            fill
            alt="test"
          />
        </div>
        <div className={styles.slideDirection}>
          <div className={styles.left} onClick={handlePrevious}>
            <Image src={leftArrow} alt="Left arrow" fill />
          </div>
          <div className={styles.right} onClick={handleNext}>
            <Image src={rightArrow} alt="Right Arrow" fill />
          </div>
        </div>
      </div>

      <div className={styles.indicator}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ''
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
