import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useHotelContext } from "@/context/HotelContext";

export function ComboboxDemo() {
   const {rooms, setRooms } = useHotelContext();
  const [open, setOpen] = useState(false);

  // const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);

  const addRoom = () => {
    setRooms([...rooms, { adults: 2, children: 0 }]);
  };

  const removeRoom = (index) => {
    const updatedRooms = rooms.filter((_, i) => i !== index);
    setRooms(updatedRooms);
  };

  const updateGuestCount = (index, type, increment) => {
    const updatedRooms = [...rooms];
    if (increment) {
      updatedRooms[index][type] += 1;
    } else if (updatedRooms[index][type] > 0) {
      updatedRooms[index][type] -= 1;
    }
    setRooms(updatedRooms);
  };
  const handleDone = () => {
    setOpen(false); // Close the Popover
  };

  return (
    <div className="min:w-full rounded-lg ">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full h-full flex flex-col justify-normal items-start"
          >
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Rooms & Guests</h2>
              <p className="text-sm text-gray-500">
                {rooms.length} Room{rooms.length > 1 ? "s" : ""},{" "}
                {rooms.reduce(
                  (total, room) => total + room.adults + room.children,
                  0
                )}{" "}
                Guests
              </p>
              <p className="text-sm text-gray-500">
                {rooms.reduce((total, room) => total + room.adults, 0)} Adult
                {rooms.length > 1 ? "s" : ""},{" "}
                {rooms.reduce((total, room) => total + room.children, 0)} Child
                {rooms.length > 1 ? "s" : ""},{" "}
              </p>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="min:w-screen ">
          <Command className="">
            <CommandInput placeholder="Search framework..." />
            <div className="">
              <CommandList>
                <CommandGroup>
                  {rooms.map((room, index) => (
                    <div key={index} className="p-4 mb-2 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Room {index + 1}</h3>
                        {index > 0 && (
                          <button
                            className="text-red-500 text-sm"
                            onClick={() => removeRoom(index)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between items-center">
                          <span>Adults </span>
                          <div className="flex items-center">
                            <button
                              className="px-2 py-1 bg-gray-200 rounded"
                              onClick={() =>
                                updateGuestCount(index, "adults", false)
                              }
                            >
                              -
                            </button>
                            <span className="px-4">{room.adults}</span>
                            <button
                              className="px-2 py-1 bg-gray-200 rounded"
                              onClick={() =>
                                updateGuestCount(index, "adults", true)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Child </span>
                          <div className="flex items-center">
                            <button
                              className="px-2 py-1 bg-gray-200 rounded"
                              onClick={() =>
                                updateGuestCount(index, "children", false)
                              }
                            >
                              -
                            </button>
                            <span className="px-4">{room.children}</span>
                            <button
                              className="px-2 py-1 bg-gray-200 rounded"
                              onClick={() =>
                                updateGuestCount(index, "children", true)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex gap-2 justify-between items-center">
                    <button
                      className="w-full px-4 py-2 mt-4 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
                      onClick={addRoom}
                    >
                      Add Room
                    </button>
                    <button
                      onClick={handleDone}
                      className="w-full px-4 py-2 mt-4 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
                    >
                      Done
                    </button>
                  </div>
                </CommandGroup>
              </CommandList>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
