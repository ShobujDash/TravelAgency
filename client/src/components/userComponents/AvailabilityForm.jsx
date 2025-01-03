import { useState } from "react";
import DatePicker from "./DatePicker";
import { ComboboxDemo } from "./SelectItem";
import { useNavigate } from "react-router-dom";

const AvailabilityForm = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  return (
    <div className="max-w-7xl bg-transparent  mx-auto py-4 px-20">
      <div className="grid grid-cols-12 gap-3 ">
        <div className="col-span-12 md:col-span-3 shadow-lg rounded-lg border-2">
          <ComboboxDemo />
        </div>
        <div className="col-span-12 md:col-span-6 flex gap-1 overflow-hidden">
          <div className="flex-1 h-auto">
            <DatePicker />
          </div>
          <div className="flex-1 h-auto">
            <DatePicker />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 shadow-lg border-2">
          <ComboboxDemo />
        </div>
      </div>
      <div className="flex">
        <button
          onClick={() => navigate("/hotel-list")}
          className="px-3 py-2 bg-yellow-300 font-bold text-xl mx-auto cursor-pointer rounded-lg mt-3"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default AvailabilityForm;
