import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Utility function for conditional class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DateCheckIn = ({ datePick }) => {
  const [date, setDate] = useState(null);

  
  const handleDateChange = (selectedDate) => {
    if (selectedDate) {
      // Ensure we only deal with the date part
      const utcDate = new Date(
        Date.UTC(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate()
        )
      );
      const formattedDate = utcDate.toISOString().split("T")[0];
      setDate(utcDate);
      datePick(formattedDate);
    }
  };

  return (
    <div className="h-full">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full h-full flex flex-col justify-normal items-start bg-cyan-50"
          >
            <h1 className="text-blue-300">Check In</h1>
            <p>{date ? format(date, "PPP") : <span>Pick a date</span>}</p>
            <p className="font-light text-sm">SaterDay</p>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateCheckIn;
