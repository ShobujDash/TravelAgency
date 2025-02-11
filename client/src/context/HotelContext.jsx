import { userProfile } from "@/services/AuthApiService";
import { getAllHotel } from "@/services/HotelApiServices";
import { createContext, useContext, useEffect, useState } from "react";

const HotelContext = createContext(null);

const HotelContextProvider = ({ children }) => {
  const [hotels,setHotels] = useState(null);
  const [checkInDate,setCheckInDate] = useState("");
  const [checkOutDate,setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);


  const getHotels = async () => {
    const data = await getAllHotel();
    if (data?.success) {
      setHotels(data?.data);
    } else {
      setHotels([]);
    }
  };

  return (
    <HotelContext.Provider
      value={{
        getHotels,
        hotels,
        setHotels,
        checkInDate,
        checkOutDate,
        rooms,
        setCheckInDate,
        setCheckOutDate,
        setRooms,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

const useHotelContext = () => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error(
      "useAdminContext must be used within an AdminContextProvider"
    );
  }
  return context;
};

// Export the provider and hook
export { HotelContextProvider, useHotelContext };
