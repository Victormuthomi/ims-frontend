import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Importing styles for the calendar

function CalendarComponent() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="h-full w-full text-sm font-lato bg-slate-200 shadow-md rounded-lg">
      <Calendar
        onChange={onChange}
        value={value}
        className="w-full h-full"
        tileClassName={({ date }) => {
          // Highlight today's date
          if (date.toDateString() === new Date().toDateString()) {
            return "bg-blue-500 text-white"; // Tailwind styles for today's date
          }
          return "";
        }}
      />
    </div>
  );
}

export default CalendarComponent;
