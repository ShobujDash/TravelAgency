import React from "react";
import MasterLayout from "./Layout/MasterLayout";

const HotelList = () => {
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
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
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
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
  ];

  return (
    <MasterLayout>
      <div className="p-4 lg:p-8 max-w-screen-lg mx-auto">
        {/* Search Header */}
        <div className="bg-white shadow rounded-lg p-4 mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters */}
          <div className="col-span-1">
            <div className="bg-gray-100 shadow rounded-lg p-4">
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
          <div className="col-span-1 lg:col-span-3">
            <p className="font-medium mb-4">
              35 properties found
              <span className="text-gray-400 ml-2">
                (Showing popular listings)
              </span>
            </p>
            <div className="grid gap-4">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white text-sm px-2 py-1 rounded">
                      Top Selling
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{hotel.name}</h3>
                    <p className="text-sm text-gray-500">{hotel.location}</p>
                    <div className="flex items-center gap-2 text-yellow-500 my-2">
                      {hotel.features.map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-yellow-100 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
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
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        Select
                      </button>
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
