import MasterLayout from '@/components/userComponents/Layout/MasterLayout'
import { AlertDialogDemo } from '@/components/userComponents/PaymentModal';
import { useAuthContext } from '@/context/AuthContext';
import { getBookedHotelByUser } from '@/services/HotelBookService';
import instance from '@/utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyBookingPage = () => {
  const { user } = useAuthContext()
  const navigate = useNavigate();
  const [bookedHotel, setBookedHotel] = useState([]);

  const handleNavigate = (hotelId, searchId) => {
    navigate(`/hotel/details?hotelId=${hotelId}&searchId=${searchId}`);
  };

  
 const handlePayment = async (hotelId, paymentDetails) => {
   try {
     const { data } = await instance.post("/api/payment/create", {
       ...paymentDetails,
       hotelBookID:hotelId, // Include hotelId in the payment data
     });
     if (data?.success) {
       toast.success("Payment successful!");
     } else {
       toast.error(data?.message);
     }
   } catch (error) {
     console.error(error);
     toast.error("An error occurred while processing the payment.");
   }
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
            <div className="max-w-7xl mx-auto px-4 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bookedHotel.map((card) => (
                  <div
                    key={card?._id}
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
                    <div className=" px-3 py-2 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-2">
                          {card?.hotelId?.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {card?.hotelId?.place}
                        </p>
                        <p className="text-xl font-semibold text-green-600 ">
                          {card?.hotelId?.pricePerRoom * card?.rooms.length}$
                        </p>
                      </div>
                      <div className="flex gap-1 justify-between items-center">
                        <div>
                          <p className="text-sm font-semibold text-green-600 my-1">
                            Going Date
                          </p>
                          <p className="text-sm font-medium text-black my-1">
                            {card?.checkIn}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-green-600 my-1">
                            Return Date
                          </p>
                          <p className="text-sm font-medium text-black my-1">
                            {card?.checkOut}
                          </p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h2 className="text-sm font-semibold">
                          Rooms & Guests
                        </h2>
                        <p className="text-sm text-gray-500">
                          {card?.rooms.length} Room
                          {card?.rooms.length > 1 ? "s" : ""},{" "}
                          {card?.rooms.reduce(
                            (total, room) =>
                              total + room.adults + room.children,
                            0
                          )}{" "}
                          Guests
                        </p>
                        <p className="text-sm text-gray-500">
                          {card?.rooms.reduce(
                            (total, room) => total + room.adults,
                            0
                          )}{" "}
                          Adult
                          {card?.rooms.length > 1 ? "s" : ""},{" "}
                          {card?.rooms.reduce(
                            (total, room) => total + room.children,
                            0
                          )}{" "}
                          Child
                          {card?.rooms.length > 1 ? "s" : ""},{" "}
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
                        {/* <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                          Payment
                        </button> */}
                        {/* <AlertDialogDemo
                          callback={() => handlePayment(card?.hotelId?._id)}
                        /> */}
                        <AlertDialogDemo
                          callback={(paymentDetails) =>
                            handlePayment(card?._id, paymentDetails)
                          }
                          payment={card?.payment}
                        />
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




