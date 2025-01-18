import { useEffect, useState } from "react";
// import Banner01 from "../../assets/image/Banner01.jpg";
// import Banner02 from "../../assets/image/Banner02.jpg";
// import Banner03 from "../../assets/image/Banner03.jpeg";
// import Banner04 from "../../assets/image/Banner04.jpeg";
// import Banner05 from "../../assets/image/Banner05.jpeg";
// import Banner06 from "../../assets/image/Banner06.jpeg";
// import Banner from "../../assets/image/slider.webp";
import { getAllSlider } from "@/services/SliderApiServices";

const Carousel = () => {
  // const slides = [
  //   Banner,
  //   Banner01,
  //   Banner02,
  //   Banner03,
  //   Banner04,
  // ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [carosolSlider, setCarosolSlider] = useState([]);




    useEffect(() => {
      (async () => {
        const data = await getAllSlider();
        if (data?.success) {
          setCarosolSlider(data?.data);
        }
      })();
    }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Go to a specific slide
  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="relative px-4 md:px-0 sm:p-0 max-w-7xl  mx-auto  w-full mb-4">
      {/* Slider Wrapper */}
      <div className="relative overflow-hidden h-56  rounded-lg px-4 lg:h-96 md:px-0">
        {carosolSlider[0]?.images.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item?.imageUrl}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill sm:object-fill rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-3 sm:bottom-5 left-1/2 space-x-2 sm:space-x-3">
        {carosolSlider[0]?.images.map((_, index) => (
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
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
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
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
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

export default Carousel;
