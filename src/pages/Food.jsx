// src/pages/Food.jsx
import React from "react";

const foodItems = [
  { name: "Beef Steak with Fried Potato", type: "Lunch", rating: 4.9 },
  { name: "Pancake with Honey", type: "Breakfast", rating: 4.7 },
  { name: "Japanese Beef Ramen", type: "Lunch", rating: 4.8 },
  { name: "Mixed Salad", type: "Lunch", rating: 4.2 },
  { name: "Beef Meatball with Vegetable", type: "Snack", rating: 4.5 },
];

export default function Food() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Food</h1>
        <input
          type="text"
          placeholder="Search here..."
          className="px-4 py-2 rounded-full border border-gray-300 shadow-sm w-64"
        />
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 border-b last:border-b-0"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100" />
              <div>
                <span className="text-xs bg-indigo-100 px-2 py-1 rounded-full text-indigo-600 font-medium">
                  {item.type}
                </span>
                <p className="font-medium">{item.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>⭐ {item.rating}</span>
              <span>📊 1,456</span>
              <span>📈 26%</span>
              <span>🎯 50%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-6 gap-2 text-sm">
        <button className="px-3 py-1 border rounded-full text-gray-600">‹</button>
        <button className="px-3 py-1 border rounded-full bg-indigo-600 text-white">1</button>
        <button className="px-3 py-1 border rounded-full text-gray-600">2</button>
        <button className="px-3 py-1 border rounded-full text-gray-600">3</button>
        <button className="px-3 py-1 border rounded-full text-gray-600">›</button>
      </div>
    </div>
  );
}
