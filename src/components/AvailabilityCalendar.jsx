// AvailabilityCalendar.jsx
import React from "react";

export default function AvailabilityCalendar({ unavailableDates }) {
  // Mock calendar UI (for real bookings, use a library like react-calendar)
  return (
    <div className="mt-4 border rounded-lg p-4 bg-gray-50">
      <h3 className="font-bold text-lg mb-2">Availability</h3>
      <p className="text-gray-600 mb-2">
        Booked: <span className="text-red-500">Red</span> | Available:{" "}
        <span className="text-green-600">Green</span>
      </p>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 14 }).map((_, i) => {
          const date = new Date();
          date.setDate(date.getDate() + i);
          const dateStr = date.toLocaleDateString();
          const isBooked = unavailableDates.includes(dateStr);
          return (
            <div
              key={i}
              className={`p-2 border rounded text-center ${
                isBooked ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
              }`}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
