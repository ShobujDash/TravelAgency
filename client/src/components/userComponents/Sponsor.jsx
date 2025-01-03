import React, { useState, useEffect } from "react";
import Banner from "../../assets/image/banner.jpg";
import SecondBanner from "../../assets/image/secondbanner.png";

const destinations = [
  {
    id: 1,
    image: Banner,
  },
  {
    id: 2,
    image: SecondBanner,
  },
];

const Sponsor = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Go to a specific slide
  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="relative px-4 md:px-0 sm:p-0 max-w-6xl  mx-auto mb-4">
      {/* Slider Wrapper */}
      <div className="relative overflow-hidden h-32 rounded-lg px-4 md:px-0">
        {destinations.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item?.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-32 sm:object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-3 sm:bottom-5 left-1/2 space-x-2 sm:space-x-3">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentIndex
                ? "bg-blue-600"
                : "bg-gray-300 hover:bg-blue-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Previous Control */}
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
          )
        }
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </span>
      </button>

      {/* Next Control */}
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length)
        }
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Sponsor;
