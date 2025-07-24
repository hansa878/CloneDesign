import React from "react";
import { FaPlus } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Events() {
  const days = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <div className="flex gap-6">
      {/* Left Calendar Area */}
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Events</h1>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          {/* Header with buttons */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Calendar</h2>

            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full cursor-pointer">
                <span className="text-sm font-medium">January</span>
                <MdKeyboardArrowDown />
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full cursor-pointer">
                <span className="text-sm font-medium">2021</span>
                <MdKeyboardArrowDown />
              </div>
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition">
                <FaPlus className="text-xs" />
                New Student
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-3 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
              <div key={i} className="text-sm text-gray-400 font-medium">{day}</div>
            ))}

            {days.map((day) => {
              const isHighlighted = [10, 15, 20, 23].includes(day);
              const dotColors = {
                6: ["bg-indigo-500", "bg-orange-400"],
                15: ["bg-purple-400", "bg-blue-400"],
                20: ["bg-red-400", "bg-orange-300", "bg-yellow-300"],
              };

              return (
                <div
                  key={day}
                  className={`h-24 border rounded-2xl p-2 flex flex-col justify-between text-sm text-gray-700 ${
                    isHighlighted ? "border-indigo-500" : "border-gray-200"
                  }`}
                >
                  <div className="text-sm font-medium">{day}</div>
                  <div className="flex justify-end gap-1">
                    {dotColors[day]?.map((color, i) => (
                      <span
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full ${color}`}
                      ></span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

 {/* Right Sidebar */}
<div className="w-80 shrink-0">
  <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
    <h3 className="text-xl font-semibold text-gray-800">Schedule Details</h3>

    {[
      {
        title: "Basic Algorithm",
        category: "Algorithm",
        color: "border-indigo-500",
      },
      {
        title: "Basic Art",
        category: "Art",
        color: "border-orange-500",
      },
      {
        title: "HTML & CSS Class",
        category: "Programming",
        color: "border-yellow-400",
      },
      {
        title: "Simple Past Tense",
        category: "English",
        color: "border-purple-400",
      },
    ].map((item, i) => (
      <div
        key={i}
        className={`border-l-4 ${item.color} bg-gray-50 p-3 rounded-xl hover:shadow-sm transition`}
      >
        <div className="flex justify-between items-center mb-1">
          <h4 className="font-semibold text-gray-700">{item.title}</h4>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
        <p className="text-xs text-gray-500">{item.category}</p>
        <p className="text-xs text-gray-400">09:00 - 10:00 AM</p>
      </div>
    ))}

    <button className="w-full bg-indigo-100 text-indigo-700 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition">
      View More
    </button>
  </div>
</div>

    </div>
  );
}

