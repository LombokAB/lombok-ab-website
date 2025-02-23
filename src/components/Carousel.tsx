'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps {
  children: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % children.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + children.length) % children.length);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        className="flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children.map((child, index) => (
          <div key={index} className="min-w-full flex items-center justify-center">
            {child}
          </div>
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-4xl text-design-green sm:left-4 z-10"
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-4xl text-design-green sm:right-4 z-10"
      >
        &gt;
      </button>

      {/* Navigation Dots*/}
      <div className="absolute bottom-4 left-0 right-0 md:flex justify-center space-x-4 hidden">
        {children.map((_, index) => (
          <button
            key={index}
            className={`rounded-full size-3 bg-design-green bg-opacity-50 transition-colors duration-300 ${currentSlide === index ? 'bg-design-green bg-opacity-90 transform scale-125' : 'hover:bg-design-green/30'}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
