import MasterLayout from '@/components/userComponents/Layout/MasterLayout'
import { useAuthContext } from '@/context/AuthContext';
import { getBookedHotelByUser } from '@/services/HotelBookService';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MyBookingPage = () => {
  const { user } = useAuthContext()
  const navigate = useNavigate();
  const [bookedHotel, setBookedHotel] = useState([]);
  console.log(bookedHotel)

  const handleNavigate = (hotelId, searchId) => {
    navigate(`/hotel/details?hotelId=${hotelId}&searchId=${searchId}`);
  };


   useEffect(() => {
     (async () => {
       const data = await getBookedHotelByUser(user?._id);
       if (data?.success) {
         setBookedHotel(data?.data);
       } else {
         setBookedHotel([])
       }
     })();
   }, []);
  
  
  return (
    <MasterLayout>
      <div className="min-h-[80vh] p-4 ">
        <div className="w-full h-full mx-auto ">
          {bookedHotel?.length === 0 ? (
            <h1 className="font-bold text-gray-200">
              You haven't booked a hotel yet.
            </h1>
          ) : (
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bookedHotel.map((card) => (
                  <div
                    key={card.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                  >
                    {/* Image Section */}
                    <div className="h-1/2">
                      <img
                        src={card?.hotelId?.images[0]?.imageUrl}
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Details Section */}
                    <div className="h-1/2 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-2">
                          {card?.hotelId?.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {card?.hotelId?.place}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {card?.hotelId?.description}
                        </p>
                        <p className="text-xl font-semibold text-green-600 my-3">
                          {card?.hotelId?.pricePerRoom}$
                        </p>
                      </div>
                      <div className="flex gap-3 mb-5">
                        <button
                          onClick={() =>
                            handleNavigate(card?.hotelId?._id, "87509029")
                          }
                          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                        >
                          View
                        </button>
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                          Payment
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MasterLayout>
  );
}

export default MyBookingPage
