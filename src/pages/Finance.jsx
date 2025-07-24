import React from "react";

export default function Finance() {
  return (
    <div className="p-6 space-y-6 text-[#2E2E2E] dark:text-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Finance</h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Total Students */}
        <div className="p-3 bg-white dark:bg-gray-900 rounded-xl shadow h-28">
          <div className="flex items-center justify-between h-full">
            <div>
              <h2 className="text-gray-500 text-xs">Total Students</h2>
              <p className="text-base font-semibold">932</p>
              <p className="text-green-500 text-xs">+10% than last month</p>
            </div>
            <div className="w-8 h-8 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full text-lg">
              👨‍🎓
            </div>
          </div>
        </div>

        {/* Total Teachers */}
        <div className="p-3 bg-white dark:bg-gray-900 rounded-xl shadow h-28">
          <div className="flex items-center justify-between h-full">
            <div>
              <h2 className="text-gray-500 text-xs">Total Teachers</h2>
              <p className="text-base font-semibold">754</p>
              <p className="text-red-500 text-xs">-0.5% than last month</p>
            </div>
            <div className="w-8 h-8 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full text-lg">
              👩‍🏫
            </div>
          </div>
        </div>

        {/* School Balance */}
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-500 text-sm">School Balance</h2>
              <p className="text-xl font-bold">$123,456</p>
              <p className="text-green-500 text-sm">+23% than last month</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-full text-xl">
              💰
            </div>
          </div>

          {/* Wavy graph */}
          <div className="mt-3">
            <svg viewBox="0 0 120 30" className="w-full h-10">
              <path
                d="M0 20 Q 10 10, 20 20 T 40 20 T 60 20 T 80 20 T 100 20 T 120 20"
                fill="none"
                stroke="rgb(34 197 94)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Balance Chart with Wavy Chart */}
      <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Balance Analytics</h2>
          <button className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded flex items-center gap-1">
            Month ▼
          </button>
        </div>
        <div className="h-48 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
          <svg viewBox="0 0 500 100" className="w-full h-full">
            <path
              d="M0 70 Q 50 20, 100 70 T 200 70 T 300 70 T 400 70 T 500 70"
              fill="none"
              stroke="rgb(234 179 8)" // yellow-500
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Unpaid Student Intuition */}
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Unpaid Student Intuition</h2>
          {["Samantha W.", "Tony Soop", "Jordan Nico", "Karen Hope", "Nadila Adja"].map((name, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-purple-400 rounded-full" />
                <span className="font-medium">{name}</span>
              </div>
              <span className="text-indigo-600 text-sm">ID 123456789</span>
              <div className="flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">Class VII A</span>
              </div>
              <span className="font-semibold">$50,036</span>
              <span className="text-gray-500 text-lg">•••</span>
            </div>
          ))}
          <div className="flex justify-center mt-4 gap-2">
            <button className="w-6 h-6 rounded-full bg-gray-200">◀</button>
            <button className="w-6 h-6 rounded-full bg-indigo-600 text-white">1</button>
            <button className="w-6 h-6 rounded-full bg-gray-200">2</button>
            <button className="w-6 h-6 rounded-full bg-gray-200">3</button>
            <button className="w-6 h-6 rounded-full bg-gray-200">▶</button>
          </div>
        </div>

        {/* School Expense */}
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
          <h2 className="font-semibold mb-4">School Expense</h2>
          {["Complete", "Pending", "Canceled", "Complete", "Complete"].map((status, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full" />
                <div>
                  <div className="font-medium">#123456789</div>
                  <div className="text-xs text-gray-500">2 March 2021, 13:45 PM</div>
                </div>
              </div>
              <span className="font-semibold">$50,036</span>
              <span
                className={`text-sm ${
                  status === "Complete"
                    ? "text-green-500"
                    : status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {status}
              </span>
            </div>
          ))}
          <div className="flex justify-center mt-4 gap-2">
            <button className="w-6 h-6 rounded-full bg-gray-200">◀</button>
            <button className="w-6 h-6 rounded-full bg-indigo-600 text-white">1</button>
            <button className="w-6 h-6 rounded-full bg-gray-200">2</button>
            <button className="w-6 h-6 rounded-full bg-gray-200">3</button>
            <button className="w-6 h-6 rounded-full bg-gray-200">▶</button>
          </div>
        </div>
      </div>
    </div>
  );
}

