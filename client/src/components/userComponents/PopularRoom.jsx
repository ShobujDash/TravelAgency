import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin } from "lucide-react";
const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80",
    price: "1,299",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
    price: "999",
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    image:
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80",
    price: "1,499",
  },
  {
    id: 4,
    name: "Machu Picchu, Peru",
    image:
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80",
    price: "1,499",
  },
  {
    id: 5,
    name: "Machu Picchu, Peru",
    image:
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80",
    price: "1,499",
  },
];
// import { IconAppWindow } from "@tabler/icons-react";

const PopularRoom = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className=" sm:max-w-6xl mx-auto flex  items-center gap-1 justify-between mb-8">
          <div className="text-sm sm:text-2xl font-bold text-blue-600 flex gap-2 items-center">
            <span className="hidden sm:block">Popular</span> Destinations
          </div>
          <div className="flex gap-2 justify-between items-center bg-white rounded-lg">
            <p className="px-2 py-1 md:px-4 md:py-2 rounded-l-lg  hover:bg-blue-200 cursor-pointer font-medium text-blue-600 hover:font-semibold">
              All
            </p>
            <p className="px-2 py-1 md:px-4 md:py-2 hover:bg-blue-200 cursor-pointer font-medium text-blue-600 hover:font-semibold">
              Room
            </p>
            <p className="px-2 py-1 md:px-4 md:py-2 rounded-r-lg  hover:bg-blue-200 cursor-pointer font-medium text-blue-600 hover:font-semibold">
              Destination
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className=" sm:max-w-6xl mx-auto"
        >
          <CarouselContent>
            {destinations.map((destination, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div
                  key={destination.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover hover:scale-110 transition-all duration-200"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <MapPin size={20} className="text-blue-600" />
                        {destination.name}
                      </h3>
                      <span className="text-blue-600 font-bold">
                        ${destination.price}
                      </span>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
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
      </div>
    </section>
  );
};

export default PopularRoom;
