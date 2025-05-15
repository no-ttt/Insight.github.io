import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "DNA Research"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Laboratory Testing"
  }
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[450px]">
      <div 
        className="w-full h-full bg-center bg-cover duration-500 transition-all"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Genetic Testing for Your Future</h1>
            <p className="text-xl md:text-2xl mb-6">Discover your genetic profile and take control of your health</p>
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition duration-300 font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Left/Right Arrows */}
      <div onClick={goToPrevious} className="hidden md:block absolute top-1/2 left-4 -translate-y-1/2 text-white cursor-pointer bg-black bg-opacity-20 p-2 rounded-full hover:bg-opacity-30">
        <ChevronLeft size={24} />
      </div>
      <div onClick={goToNext} className="hidden md:block absolute top-1/2 right-4 -translate-y-1/2 text-white cursor-pointer bg-black bg-opacity-20 p-2 rounded-full hover:bg-opacity-30">
        <ChevronRight size={24} />
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              slideIndex === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;