import { FaStar } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { TbAirConditioning, TbFriends } from "react-icons/tb";
import coxbarzarpic from "../../assets/image/coxbazar.jpeg";
import { MovingBorderButton } from "../MoveingBorderButton";
import MasterLayout from "./Layout/MasterLayout";
import { useNavigate } from "react-router-dom";

const HotelList = () => {

  const navigate = useNavigate();

const hotels = [
  {
    id: 1,
    name: "Sea Pearl Beach Resort & Spa Cox's Bazar",
    rating: "5 Star",
    location: "Inani, Cox's Bazar",
    features: ["Couple Friendly", "Accessible Bathroom", "Air Conditioning"],
    discount: "68%",
    extraDiscount: "Extra 5% discount for bKash payment.",
    oldPrice: "BDT 14,230",
    newPrice: "BDT 4,493",
    image: coxbarzarpic, // Replace with actual image URL
  },
  {
    id: 2,
    name: "Ramada by Wyndham Cox's Bazar",
    rating: "5 Star",
    location: "Kolatoli, Cox's Bazar",
    features: ["Couple Friendly", "Accessible Bathroom", "Air Conditioning"],
    discount: "48%",
    extraDiscount: "Extra 5% discount for bKash payment.",
    oldPrice: "BDT 12,500",
    newPrice: "BDT 6,500",
    image: coxbarzarpic, // Replace with actual image URL
  },
  {
    id: 3,
    name: "Hotel The Cox Today",
    rating: "4 Star",
    location: "Kolatoli, Cox's Bazar",
    features: ["Swimming Pool", "Free WiFi", "Spa Services"],
    discount: "50%",
    extraDiscount: "Extra 3% discount for card payment.",
    oldPrice: "BDT 10,000",
    newPrice: "BDT 5,000",
    image: coxbarzarpic, // Replace with actual image URL
  },
  {
    id: 4,
    name: "Long Beach Hotel Cox's Bazar",
    rating: "4 Star",
    location: "Kolatoli Road, Cox's Bazar",
    features: ["Rooftop Pool", "Fitness Center", "Couple Friendly"],
    discount: "40%",
    extraDiscount: "Extra 5% discount for bKash payment.",
    oldPrice: "BDT 11,000",
    newPrice: "BDT 6,600",
    image: coxbarzarpic, // Replace with actual image URL
  },
  {
    id: 5,
    name: "Sayeman Beach Resort",
    rating: "5 Star",
    location: "Marine Drive, Cox's Bazar",
    features: ["Ocean View", "Spa Services", "Air Conditioning"],
    discount: "35%",
    extraDiscount: "Extra 5% discount for bKash payment.",
    oldPrice: "BDT 15,000",
    newPrice: "BDT 9,750",
    image: coxbarzarpic, // Replace with actual image URL
  },
  {
    id: 6,
    name: "Ocean Paradise Hotel & Resort",
    rating: "5 Star",
    location: "Kolatoli Road, Cox's Bazar",
    features: ["Free Breakfast", "Spa Services", "Couple Friendly"],
    discount: "60%",
    extraDiscount: "Extra 7% discount for bKash payment.",
    oldPrice: "BDT 13,000",
    newPrice: "BDT 5,200",
    image: coxbarzarpic, // Replace with actual image URL
  },
  {
    id: 7,
    name: "Mermaid Beach Resort",
    rating: "4 Star",
    location: "Pechar Dwip, Cox's Bazar",
    features: ["Private Beach", "Eco-Friendly Rooms", "Couple Friendly"],
    discount: "30%",
    extraDiscount: "Extra 2% discount for bKash payment.",
    oldPrice: "BDT 8,500",
    newPrice: "BDT 5,950",
    image: coxbarzarpic, // Replace with actual image URL
  },
  {
    id: 8,
    name: "White Orchid Cox's Bazar",
    rating: "3 Star",
    location: "Kolatoli, Cox's Bazar",
    features: ["Free Parking", "Swimming Pool", "Accessible Bathroom"],
    discount: "25%",
    extraDiscount: "Extra 5% discount for bKash payment.",
    oldPrice: "BDT 7,000",
    newPrice: "BDT 5,250",
    image: coxbarzarpic, // Replace with actual image URL
  },
  {
    id: 9,
    name: "Hotel Mishuk",
    rating: "3 Star",
    location: "Kolatoli Beach, Cox's Bazar",
    features: ["Free WiFi", "Couple Friendly", "Air Conditioning"],
    discount: "45%",
    extraDiscount: "Extra 5% discount for bKash payment.",
    oldPrice: "BDT 9,000",
    newPrice: "BDT 4,950",
    image: coxbarzarpic, // Replace with actual image URL
  },
  {
    id: 10,
    name: "Blue Ocean Resort",
    rating: "4 Star",
    location: "Marine Drive Road, Cox's Bazar",
    features: ["Ocean View", "Spa Services", "Couple Friendly"],
    discount: "55%",
    extraDiscount: "Extra 10% discount for bKash payment.",
    oldPrice: "BDT 14,000",
    newPrice: "BDT 6,300",
    image: coxbarzarpic, // Replace with actual image URL
  },
];



  const handleNavigate = (hotelId, searchId) => {
    navigate(`/hotel/details?hotelId=${hotelId}&searchId=${searchId}`);
  };

  return (
    <MasterLayout>
      <div className="p-4 lg:p-8 max-w-7xl mx-auto">
        {/* Search Header */}
        <div className="bg-transparent shadow-lg shadow-gray-800 border-2 border-[#2b2864] text-white rounded-lg p-4 mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-sm font-medium">
            <div>CITY/HOTEL/RESORT/AREA</div>
            <div className="font-bold text-blue-600">Cox's Bazar</div>
          </div>
          <div className="text-sm font-medium">
            <div>CHECK IN</div>
            <div className="font-bold">14 Jan '25</div>
          </div>
          <div className="text-sm font-medium">
            <div>CHECK OUT</div>
            <div className="font-bold">15 Jan '25</div>
          </div>
          <div className="text-sm font-medium">
            <div>ROOMS & GUESTS</div>
            <div className="font-bold">1 Room, 2 Guests</div>
          </div>
          <button className="col-span-1 md:col-span-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded">
            Modify Search
          </button>
        </div>

        {/* Hotel Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-white">
          {/* Filters */}
          <div className="col-span-1 hidden sm:block">
            <div className="bg-transparent shadow-lg shadow-black border-2 border-[#2b2864] min-h-screen rounded-lg p-4">
              <h3 className="font-bold mb-4">Filters</h3>
              <div className="mb-4">
                <h4 className="font-medium">Popular Filters</h4>
                {["3 Star", "5 Star", "Hotel", "4 Star", "Breakfast"].map(
                  (filter, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input type="checkbox" id={filter} className="w-4 h-4" />
                      <label htmlFor={filter} className="text-sm">
                        {filter}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Hotel Cards */}
          <div className="col-span-1 lg:col-span-3 text-white">
            <p className="font-medium mb-4">
              10 properties found
              <span className="text-gray-400 ml-2">
                (Showing popular listings)
              </span>
            </p>
            <div className="flex flex-col gap-4">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-transparent shadow-lg shadow-black border-2 border-[#2b2864]  rounded-lg flex flex-col md:flex-row"
                >
                  <div className="relative rounded-lg text-white">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 -left-2 border border-blue-900 bg-white text-white text-sm px-2 py-1 rounded-r-lg flex items-center gap-1">
                      <SlBadge className="text-blue-900" />
                      <span className="text-blue-950">Top Selling</span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 text-white">
                    <h3 className="font-bold text-lg">{hotel.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <p className="text-sm text-white flex gap-2 items-center border border-blue-300 px-2 rounded-lg">
                          <FaStar className="text-yellow-400" />{" "}
                          <span>3 star</span>
                        </p>
                        <p className="text-sm text-gray-200 flex items-center gap-1 font-light">
                          <MdLocationPin />
                          {hotel.location}
                        </p>
                      </div>
                      <p className="text-sm text-white bg-[#FD7E14] px-2 py-1 rounded-full">
                        60% off
                      </p>
                    </div>

                    <div className="flex items-center gap- my-2">
                      <span className="text-xs  px-2 py-1 rounded flex items-center gap-2">
                        <TbFriends className=" font-bold text-lg" />
                        <span>Couple Friendly</span>
                      </span>
                      <span className="text-xs  px-2 py-1 rounded flex items-center gap-2">
                        <FaBath className=" font-bold text-lg" />
                        <span>Accessible Bathroom</span>
                      </span>
                      <span className="text-xs  px-2 py-1 rounded flex items-center gap-2">
                        <TbAirConditioning className=" font-bold text-lg" />
                        <span>Air Conditioning</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <p className="line-through text-gray-400 text-sm">
                          {hotel.oldPrice}
                        </p>
                        <p className="font-bold text-lg text-blue-600">
                          {hotel.newPrice}
                        </p>
                        <p className="text-sm text-green-500">
                          {hotel.extraDiscount}
                        </p>
                      </div>

                      <MovingBorderButton
                        handleClick={() => handleNavigate(hotel.id, "87509029")}
                      >
                        Select
                      </MovingBorderButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default HotelList;
