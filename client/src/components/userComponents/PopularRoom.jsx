import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useHotelContext } from "@/context/HotelContext";
import { MapPin } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PopularRoom = () => {
  const navigate = useNavigate();
  const { getHotels, hotels, setHotels } = useHotelContext();

  useEffect(() => {
    (async () => {
      await getHotels();
    })();
  }, []);

  const handleNavigate = (hotelId, searchId) => {
    navigate(`/hotel/details?hotelId=${hotelId}&searchId=${searchId}`);
  };

  return (
    <section className="py-16 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      {/* <div */}
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="text-sm md:text-lg lg:text-2xl font-bold text-blue-600 flex gap-2 items-center">
          <span className="hidden sm:block">Popular</span> Destinations
        </div>
        <div className="flex gap-2 items-center bg-white rounded-lg overflow-hidden">
          <p className="px-3 py-1 md:px-4 md:py-2 cursor-pointer font-medium text-blue-600 hover:bg-blue-200 hover:font-semibold">
            All
          </p>
          <p className="px-3 py-1 md:px-4 md:py-2 cursor-pointer font-medium text-blue-600 hover:bg-blue-200 hover:font-semibold">
            Room
          </p>
          <p
            onClick={() => navigate("/hotel-list")}
            className="px-3 py-1 md:px-4 md:py-2 cursor-pointer font-medium text-blue-600 hover:bg-blue-200 hover:font-semibold"
          >
            Destination
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="sm:max-w-6xl mx-auto"
      >
        <CarouselContent>
          {hotels?.map((hotel, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3 "
            >
              <div className="bg-transparent border-2 border-[#2b2864] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Image Section */}
                <div className="relative h-48 sm:h-64 lg:h-72">
                  <img
                    src={hotel?.images[0]?.imageUrl}
                    alt={hotel?.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                  />
                </div>
                {/* Content Section */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 text-white">
                    <h3 className="text-sm md:text-lg lg:text-xl font-semibold flex items-center gap-2">
                      <MapPin size={20} className="text-white" />
                      {hotel?.name}
                    </h3>
                    <span className="text-white font-bold">
                      ${hotel?.pricePerRoom}
                    </span>
                  </div>
                  <button
                    onClick={() => handleNavigate(hotel?._id, "87509029")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm lg:text-base"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* </div> */}
    </section>
  );
};

export default PopularRoom;
