import { FaRegHeart } from "react-icons/fa";
import MasterLayout from "./Layout/MasterLayout";
import hotel1 from "../../assets/image/hotel/hotel1.jpg"
import hotel2 from "../../assets/image/hotel/hotel2.jpg";
import hotel3 from "../../assets/image/hotel/hotel3.jpg";
import hotel4 from "../../assets/image/hotel/hotel4.jpg";
import hotel5 from "../../assets/image/hotel/hotel5.jpg";
import hotel6 from "../../assets/image/hotel/hotel6.jpg";
const hotelPic = [hotel3,hotel4,hotel5,hotel6]

const HotelDetails = () => {
  return (
    <MasterLayout>
      <div className="bg-transparent max-w-7xl mx-auto py-2 my-3 rounded-md">
        <div className="bg-transparent shadow-md shadow-black border-2 border-[#2b2864]  rounded-lg p-6 grid lg:grid-cols-12 gap-8 text-white">
          {/* Left Section: Image Gallery */}
          <div className="lg:col-span-7 flex  md:flex-row flex-col gap-4">
            <div className="relative">
              <img
                src={hotel1}
                alt="Hotel Main"
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition">
                <FaRegHeart className="text-red-500" />
              </button>
            </div>

            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto">
              {hotelPic?.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Right Section: Hotel Details */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-white">
            {/* Hotel Title and Info */}
            <div>
              <h2 className="text-2xl font-bold ">
                Sea Pearl Beach Resort & Spa Cox's Bazar
              </h2>
              <p className="text-sm text-gray-200 mt-1">
                🌟 5 Star · Jaliapalong, Inani, Cox's Bazar, Bangladesh
              </p>
            </div>

            {/* What's Nearby */}
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">
                What's Nearby
              </h3>
              <ul className="space-y-1 text-gray-200 text-sm">
                <li>📍 16.5 km from Himchori Waterfall</li>
                <li>
                  📍 0.25 km from Navy Jetty, from where Saint Martin bound ship
                  sails
                </li>
                <li>📍 29 km from Cox's Bazar Airport</li>
              </ul>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">
                Facilities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Clothes Dryer",
                  "Couple Friendly",
                  "Elevator",
                  "Accessible Bathroom",
                  "Air Conditioning",
                  "Check-In",
                ].map((facility, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 text-sm rounded-md px-3 py-2 text-center"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </div>

            {/* Badge */}
            <div className="mt-4">
              <span className="inline-block bg-pink-100 text-pink-600 font-medium text-sm px-4 py-2 rounded-full">
                Couple Friendly
              </span>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default HotelDetails;
