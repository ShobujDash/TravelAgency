import React, { useRef } from "react";
import footerslide from "../../assets/image/footerslide.jpg";
import footerslide02 from "../../assets/image/footerSliderAppInstall.png";
import footerslide03 from "../../assets/image/footerslide03.jpg";
import footerslide04 from "../../assets/image/footerslide04.png";

const FooterSlider = () => {
  const sliderRef = useRef(null);

  const cards = [
    { id: 1, image: footerslide },
    { id: 2, image: footerslide02 },
    { id: 3, image: footerslide03 },
    { id: 4, image: footerslide04 },
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -800, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 800, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-7xl px-4 md:mx-auto mb-3 ">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scroll-smooth no-scrollbar space-x-4 lg:space-x-6 h-[150px]"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[80%] lg:min-w-[45%] h-full flex-shrink-0 bg-white shadow-md rounded-md"
          >
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Buttons for larger screens */}
      <div className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 w-full justify-between px-4">
        <button
          onClick={scrollLeft}
          className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
        >
          &#8592;
        </button>
        <button
          onClick={scrollRight}
          className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default FooterSlider;
