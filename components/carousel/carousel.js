'use client';
import { useState } from 'react';
import {
  motion,
  Animatpresence,
  AnimatePresence,
} from 'framer-motion';
import styles from './carousel.module.css';
import Image from 'next/image';
import rightArrow from '@/public/right-arrow.svg';
import leftArrow from '@/public/left-arrow.svg';
import Link from 'next/link';

export default function Carousel({ products }) {
  const images = products.map((product) => product.image);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('left');
  const copy = [
    'Carry Your World in Style!',
    'Elevate Your Casual Game',
    'Classic Comfort, Modern Style',
  ];

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.4,
      },
    },
    imagevisible: {
      opacity: 1,
      x: '0',
      y: '0',
      transition: {
        duration: 1,
        delay: 0.4,
        // delay: 1,
      },
    },
    exit: {
      transition: {
        duration: 0.3,
        // delay: 0.5,
      },
    },
    imageexit: {
      transition: {
        duration: 0.3,
        // delay: 1,
      },
    },
  };

  return (
    <div className={styles.carousel}>
      <div
        className={`${styles.cardInner} ${
          currentIndex === 1 ? styles.reverse : ''
        }`}
      >
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            src={images[currentIndex]}
            variants={slideVariants}
            initial={
              direction === 'right' ? 'hiddenRight' : 'hiddenLeft'
            }
            animate="visible"
            exit="exit"
            className={styles.description}
          >
            <h3>{copy[currentIndex]}</h3>
            <p>{products[currentIndex].title}</p>
            <Link href="/fuckyou">Buy now</Link>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            src={images[currentIndex]}
            variants={slideVariants}
            initial={
              direction === 'right' ? 'hiddenRight' : 'hiddenLeft'
            }
            animate="imagevisible"
            exit="imageexit"
            className={styles.image}
          >
            <Image
              key={currentIndex}
              src={images[currentIndex]}
              fill
              alt="test"
            />
          </motion.div>
        </AnimatePresence>
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
