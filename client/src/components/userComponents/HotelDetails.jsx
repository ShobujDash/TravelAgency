import { getHotelById } from "@/services/HotelApiServices";
import { hotelBooking } from "@/services/HotelBookService";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import hotel2 from "../../assets/image/hotel/hotel2.jpg";

import { useHotelContext } from "@/context/HotelContext";
import RedHeartIcon from "../../assets/image/heart-red.svg";
import HeartIcon from "../../assets/image/heart.svg";
import { Tabs } from "../ui/tabs";
import MasterLayout from "./Layout/MasterLayout";
import ReviewSection from "./ReviewSection";

const DummyContent = () => {
  return (
    <div className="max-w-full mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-scroll no-scrollbar">
      {/* Image Section */}
      <div>
        <img src={hotel2} alt="Room" className="w-full rounded-lg" />
        <div className="flex gap-2 mt-4">
          <img src={hotel2} alt="Room Thumbnail" className="w-1/4 rounded-lg" />
          <img src={hotel2} alt="Room Thumbnail" className="w-1/4 rounded-lg" />
          <img src={hotel2} alt="Room Thumbnail" className="w-1/4 rounded-lg" />
          <div className="w-1/4 rounded-lg bg-gray-200  opacity-60 flex items-center justify-center cursor-pointer">
            <p className="text-black">+2</p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        {/* Room Name and Refund Policy */}
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold">Deluxe Suite Room</h4>
          <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
            Refundable
          </span>
        </div>

        {/* Room Details */}
        <ul className="mt-4 text-gray-700 space-y-2">
          <li>
            <span className="font-medium">Capacity:</span> 2 Adults, 1 Child
          </li>
          <li>
            <span className="font-medium">Meals:</span> Breakfast Included
          </li>
          <li>
            <span className="font-medium">Amenities:</span> Complimentary buffet
            breakfast, Airport transfer, Free WiFi, Air Conditioning
          </li>
          <li>
            <span className="font-medium">Cancellation Policy:</span> Free
            cancellation before 00:01 on Sat, 18 Jan 2025
          </li>
        </ul>

        {/* Price Breakdown */}
        <div className="mt-6 flex flex-col space-y-2">
          <span className="text-red-500 text-sm line-through">
            Original Price: BDT 14,463
          </span>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold">BDT 6,399</span>
            <span className="text-sm text-gray-500">
              + BDT 1,695 Taxes & Fees for 1 Night
            </span>
          </div>
          <p className="text-green-600 text-sm font-medium">
            *Extra 5% discount for bKash payment.
          </p>
        </div>

        {/* Book Now Button */}
      </div>
    </div>
  );
};

const tabs = [
  // {
  //   title: "Rooms",
  //   value: "rooms",
  //   content: (
  //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
  //       <p className="md:text-4xl font-bold">See this hotel all rooms</p>
  //       <DummyContent />
  //     </div>
  //   ),
  // },
  {
    title: "Reviews",
    value: "reviews",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p className="md:text-4xl font-bold">Users valualbe comments</p>
        <ReviewSection />
      </div>
    ),
  },
];

const HotelDetails = () => {
  const { checkInDate, checkOutDate, rooms } = useHotelContext();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hotelId = searchParams.get("hotelId");

  const [hotel, setHotel] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);

  const hotelBooked = async () => {
    if (!checkInDate) {
      return toast.error("Please Pic A Date Before Booking");
    }
    if (!checkOutDate) {
      return toast.error("Please Pic A Date Before Booking");
    }
    try {
      const data = await hotelBooking({
        hotelId,
        checkInDate,
        checkOutDate,
        rooms,
      });
      if (data?.success) {
        toast.success(data?.message);
      } else if (data?.message === "Unauthorized") {
        toast.error("Please Login Before Booking");
      } else if (data?.message === "Invalid Token") {
        toast.error("Please Login Before Booking");
      } else {
        toast.error("Please Pic A Date Before Booking");
      }
    } catch (error) {
      console.log(error);
      if (error?.message === "Unauthorized") {
        toast.error("Please Login Before Booking");
      } else if (error?.message === "Invalid Token") {
        toast.error("Please Login Before Booking");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getHotelById(hotelId);
      if (data?.success) {
        setHotel(data?.data);
      }
    })();
  }, [hotelId]);

  return (
    <MasterLayout>
      <div className="bg-transparent max-w-7xl mx-auto py-2 my-3 rounded-md">
        <div className="bg-transparent shadow-md shadow-black border-2 border-[#2b2864]  rounded-lg p-6 grid lg:grid-cols-12 gap-8 text-white">
          {/* Left Section: Image Gallery */}
          <div className="lg:col-span-7 flex  md:flex-row flex-col gap-4">
            <div className="relative">
              <img
                src={hotel?.images[0]?.imageUrl}
                alt="Hotel Main"
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={() => setIsFavourite(!isFavourite)}
                className="absolute bottom-4 left-4 bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-100 transition"
              >
                <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="heart" />
              </button>
            </div>

            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto">
              {hotel?.images?.map((item, index) => (
                <img
                  key={index}
                  src={item?.imageUrl}
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
              <h2 className="text-2xl font-bold ">{hotel?.name}</h2>
              <p className="text-sm text-gray-200 mt-1">
                🌟 {hotel?.star} Star · {hotel?.place}
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
            <div className="mt-2 flex items-center justify-between">
              <span className="inline-block bg-pink-100 text-pink-600 font-medium text-sm px-4 py-2 rounded-full">
                Couple Friendly
              </span>
              <button
                onClick={hotelBooked}
                className=" bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20rem] md:h-[40rem]  relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start ">
        <Tabs tabs={tabs} />
      </div>
    </MasterLayout>
  );
};

export default HotelDetails;
