'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps {
  children: React.ReactNode[];
  autoSlide?: boolean;
  interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({ children, autoSlide, interval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = children.length;

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(goToNextSlide, interval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, interval, currentSlide]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: `-${currentSlide * 100}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(event, info) => {
          if (info.offset.x < -50) goToNextSlide(); // Swipe left
          if (info.offset.x > 50) goToPrevSlide(); // Swipe right
        }}
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
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-4xl md:text-design-green text-zinc-300/25 sm:left-4 z-10"
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-4xl md:text-design-green text-zinc-300/25 sm:right-4 z-10"
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
