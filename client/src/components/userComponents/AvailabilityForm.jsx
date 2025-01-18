import { useHotelContext } from "@/context/HotelContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovingBorderButton } from "../MoveingBorderButton";
import DateCheckIn from "./DateCheckin";
import DateCheackOut from "./DateCheckOut";
import { ComboboxDemo } from "./SelectItem";

const AvailabilityForm = () => {
 

  const { setCheckInDate, setCheckOutDate } = useHotelContext();

  const navigate = useNavigate();

  const datePick = (formattedDate) => {
    setCheckInDate(formattedDate);
  };
  const checkoOutDatePick = (formattedDate) => {
    setCheckOutDate(formattedDate);
  };

  return (
    <div className="max-w-7xl bg-transparent  mx-auto py-4 px-20">
      <div className="grid grid-cols-12 gap-3 ">
        {/* <div className="col-span-12 md:col-span-3 shadow-lg rounded-lg border-2">
          <ComboboxDemo />
        </div> */}
        <div className="col-span-12 md:col-span-6 flex gap-1 overflow-hidden">
          <div className="flex-1 h-auto">
            <DateCheckIn datePick={datePick} />
          </div>
          <div className="flex-1 h-auto">
            <DateCheackOut checkoOutDatePick={checkoOutDatePick} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 shadow-lg">
          <ComboboxDemo />
        </div>
      </div>
      <div className="flex">
        <button
          onClick={() => navigate("/hotel-list")}
          className="font-bold text-xl mx-auto cursor-pointer rounded-lg mt-3 "
        >
          <MovingBorderButton>Search</MovingBorderButton>
        </button>
      </div>
    </div>
  );
};

export default AvailabilityForm;
