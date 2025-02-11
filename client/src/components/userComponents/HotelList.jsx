// import { useHotelContext } from "@/context/HotelContext";
// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { FaBath } from "react-icons/fa6";
// import { MdLocationPin } from "react-icons/md";
// import { SlBadge } from "react-icons/sl";
// import { TbAirConditioning, TbFriends } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";
// import { MovingBorderButton } from "../MoveingBorderButton";
// import MasterLayout from "./Layout/MasterLayout";

// const HotelList = () => {
//   const { checkInDate, checkOutDate, rooms } = useHotelContext();
//   const navigate = useNavigate();
//   const { getHotels, hotels, setHotels } = useHotelContext();
//   const [allHotels,setAllHotels] = useState(hotels ? hotels : [])
//   console.log(allHotels)

//   useEffect(() => {
//     (async () => {
//       await getHotels();
//     })();
//   }, []);

//   const handleNavigate = (hotelId, searchId) => {
//     navigate(`/hotel/details?hotelId=${hotelId}&searchId=${searchId}`);
//   };

//   return (
//     <MasterLayout>
//       <div className="p-4 lg:p-8 max-w-7xl mx-auto">
//         {/* Search Header */}
//         <div className="bg-transparent shadow-lg shadow-gray-800 border-2 border-[#2b2864] text-white rounded-lg p-4 mb-6 grid grid-cols-1 md:grid-cols-3  gap-4">
//           <div className="text-sm font-medium">
//             <div>CHECK IN</div>
//             <div className="font-bold">
//               {checkInDate ? checkInDate : "Please pic a date"}
//             </div>
//           </div>
//           <div className="text-sm font-medium text-center">
//             <div>CHECK OUT</div>
//             <div className="font-bold">
//               {checkOutDate ? checkOutDate : "Please pic a date"}
//             </div>
//           </div>
//           <div className="text-sm font-medium text-right">
//             <div>ROOMS & GUESTS</div>
//             <div className="font-bold">
//               {" "}
//               <p className="text-sm text-gray-500">
//                 {rooms.length} Room{rooms.length > 1 ? "s" : ""},{" "}
//                 {rooms.reduce(
//                   (total, room) => total + room.adults + room.children,
//                   0
//                 )}{" "}
//                 Guests
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={() => navigate("/")}
//             className="col-span-1 md:col-span-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded"
//           >
//             Modify Search
//           </button>
//         </div>

//         {/* Hotel Listings */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-white">
//           {/* Filters */}
//           <div className="col-span-1 hidden sm:block">
//             <div className="bg-transparent shadow-lg shadow-black border-2 border-[#2b2864] min-h-screen rounded-lg p-4">
//               <h3 className="font-bold mb-4">Filters</h3>
//               <div className="mb-4">
//                 <h4 className="font-medium">Popular Filters</h4>
//                 {["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"].map(
//                   (filter, index) => (
//                     <div key={index} className="flex items-center gap-2">
//                       <input type="checkbox" id={filter} className="w-4 h-4" />
//                       <label htmlFor={filter} className="text-sm">
//                         {filter}
//                       </label>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Hotel Cards */}
//           <div className="col-span-1 lg:col-span-3 text-white">
//             <p className="font-medium mb-4">
//               {hotels?.length} properties found
//               <span className="text-gray-400 ml-2">
//                 (Showing popular listings)
//               </span>
//             </p>
//             <div className="flex flex-col gap-4">
//               {allHotels?.map((hotel) => (
//                 <div
//                   key={hotel.id}
//                   className="bg-transparent shadow-lg shadow-black border-2 border-[#2b2864]  rounded-lg flex flex-col md:flex-row"
//                 >
//                   <div className="relative rounded-lg text-white">
//                     <img
//                       src={hotel?.images[0]?.imageUrl}
//                       alt={hotel.name}
//                       className="w-full h-48 object-cover rounded-lg"
//                     />
//                     <div className="absolute top-2 -left-2 border border-blue-900 bg-white text-white text-sm px-2 py-1 rounded-r-lg flex items-center gap-1">
//                       <SlBadge className="text-blue-900" />
//                       <span className="text-blue-950">Top Selling</span>
//                     </div>
//                   </div>
//                   <div className="p-4 flex-1 text-white">
//                     <h3 className="font-bold text-lg">{hotel?.name}</h3>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-3">
//                         <p className="text-sm text-white flex gap-2 items-center border border-blue-300 px-2 rounded-lg">
//                           <FaStar className="text-yellow-400" />{" "}
//                           <span>{hotel?.star} star</span>
//                         </p>
//                         <p className="text-sm text-gray-200 flex items-center gap-1 font-light">
//                           <MdLocationPin />
//                           {hotel?.place}
//                         </p>
//                       </div>
//                       <p className="text-sm text-white bg-[#FD7E14] px-2 py-1 rounded-full">
//                         {hotel?.discount}% off
//                       </p>
//                     </div>

//                     <div className="flex items-center gap- my-2">
//                       <span className="text-xs  px-2 py-1 rounded flex items-center gap-2">
//                         <TbFriends className=" font-bold text-lg" />
//                         <span>Couple Friendly</span>
//                       </span>
//                       <span className="text-xs  px-2 py-1 rounded flex items-center gap-2">
//                         <FaBath className=" font-bold text-lg" />
//                         <span>Accessible Bathroom</span>
//                       </span>
//                       <span className="text-xs  px-2 py-1 rounded flex items-center gap-2">
//                         <TbAirConditioning className=" font-bold text-lg" />
//                         <span>Air Conditioning</span>
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between mt-4">
//                       <div>
//                         <p className="line-through text-gray-400 text-sm">
//                           BDT {hotel?.discountPrice}
//                         </p>
//                         <p className="font-bold text-lg text-blue-600">
//                           BDT {hotel?.pricePerRoom} Per Room
//                         </p>
//                         <p className="text-sm text-green-500">
//                           Extra 5% discount for bKash payment.
//                         </p>
//                       </div>

//                       <MovingBorderButton
//                         handleClick={() =>
//                           handleNavigate(hotel?._id, "87509029")
//                         }
//                       >
//                         Select
//                       </MovingBorderButton>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </MasterLayout>
//   );
// };

// export default HotelList;


import { useHotelContext } from "@/context/HotelContext";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { TbAirConditioning, TbFriends } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { MovingBorderButton } from "../MoveingBorderButton";
import MasterLayout from "./Layout/MasterLayout";

const HotelList = () => {
  const { checkInDate, checkOutDate, rooms } = useHotelContext();
  const navigate = useNavigate();
  const { getHotels, hotels, setHotels } = useHotelContext();
  const [allHotels, setAllHotels] = useState(hotels ? hotels : []);
  const [selectedStar, setSelectedStar] = useState(null); // State to track selected star rating

  useEffect(() => {
    (async () => {
      await getHotels();
    })();
  }, []);

  const handleNavigate = (hotelId, searchId) => {
    navigate(`/hotel/details?hotelId=${hotelId}&searchId=${searchId}`);
  };

  // Filter hotels based on selected star rating
  const filteredHotels = selectedStar
    ? allHotels.filter((hotel) => hotel.star === parseInt(selectedStar))
    : allHotels;

  const handleStarFilter = (star) => {
    setSelectedStar(star === selectedStar ? null : star); // Toggle filter
  };

  return (
    <MasterLayout>
      <div className="p-4 lg:p-8 max-w-7xl mx-auto">
        {/* Search Header */}
        <div className="bg-transparent shadow-lg shadow-gray-800 border-2 border-[#2b2864] text-white rounded-lg p-4 mb-6 grid grid-cols-1 md:grid-cols-3  gap-4">
          <div className="text-sm font-medium">
            <div>CHECK IN</div>
            <div className="font-bold">
              {checkInDate ? checkInDate : "Please pick a date"}
            </div>
          </div>
          <div className="text-sm font-medium text-center">
            <div>CHECK OUT</div>
            <div className="font-bold">
              {checkOutDate ? checkOutDate : "Please pick a date"}
            </div>
          </div>
          <div className="text-sm font-medium text-right">
            <div>ROOMS & GUESTS</div>
            <div className="font-bold">
              {" "}
              <p className="text-sm text-gray-500">
                {rooms.length} Room{rooms.length > 1 ? "s" : ""},{" "}
                {rooms.reduce(
                  (total, room) => total + room.adults + room.children,
                  0
                )}{" "}
                Guests
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="col-span-1 md:col-span-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded"
          >
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
                {["1", "2", "3", "4", "5"].map((star, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`star-${star}`}
                      className="w-4 h-4"
                      checked={selectedStar === star}
                      onChange={() => handleStarFilter(star)}
                    />
                    <label htmlFor={`star-${star}`} className="text-sm">
                      {star} Star
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hotel Cards */}
          <div className="col-span-1 lg:col-span-3 text-white">
            <p className="font-medium mb-4">
              {filteredHotels.length} properties found
              <span className="text-gray-400 ml-2">
                (Showing filtered listings)
              </span>
            </p>
            <div className="flex flex-col gap-4">
              {filteredHotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-transparent shadow-lg shadow-black border-2 border-[#2b2864] rounded-lg flex flex-col md:flex-row"
                >
                  <div className="relative rounded-lg text-white">
                    <img
                      src={hotel?.images[0]?.imageUrl}
                      alt={hotel.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 -left-2 border border-blue-900 bg-white text-white text-sm px-2 py-1 rounded-r-lg flex items-center gap-1">
                      <SlBadge className="text-blue-900" />
                      <span className="text-blue-950">Top Selling</span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 text-white">
                    <h3 className="font-bold text-lg">{hotel?.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <p className="text-sm text-white flex gap-2 items-center border border-blue-300 px-2 rounded-lg">
                          <FaStar className="text-yellow-400" />{" "}
                          <span>{hotel?.star} star</span>
                        </p>
                        <p className="text-sm text-gray-200 flex items-center gap-1 font-light">
                          <MdLocationPin />
                          {hotel?.place}
                        </p>
                      </div>
                      <p className="text-sm text-white bg-[#FD7E14] px-2 py-1 rounded-full">
                        {hotel?.discount}% off
                      </p>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                      <span className="text-xs px-2 py-1 rounded flex items-center gap-2">
                        <TbFriends className=" font-bold text-lg" />
                        <span>Couple Friendly</span>
                      </span>
                      <span className="text-xs px-2 py-1 rounded flex items-center gap-2">
                        <FaBath className=" font-bold text-lg" />
                        <span>Accessible Bathroom</span>
                      </span>
                      <span className="text-xs px-2 py-1 rounded flex items-center gap-2">
                        <TbAirConditioning className=" font-bold text-lg" />
                        <span>Air Conditioning</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <p className="line-through text-gray-400 text-sm">
                          BDT {hotel?.discountPrice}
                        </p>
                        <p className="font-bold text-lg text-blue-600">
                          BDT {hotel?.pricePerRoom} Per Room
                        </p>
                        <p className="text-sm text-green-500">
                          Extra 5% discount for bKash payment.
                        </p>
                      </div>

                      <MovingBorderButton
                        handleClick={() =>
                          handleNavigate(hotel?._id, "87509029")
                        }
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

