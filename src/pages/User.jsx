import React, { useState } from "react";

export default function UserPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const contacts = ["Nabila", "Sana", "Ali", "Ahmed", "Fatima"];

  return (
    <div className="flex flex-col lg:flex-row-reverse bg-base-200 min-h-screen font-sans relative">
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex w-72 bg-white shadow-lg p-6 flex-col z-50 h-screen sticky top-0">
        {/* Sidebar Content */}
        <div className="space-y-6">
          <div className="card bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
            <h3 className="text-lg font-bold mb-2">Your Plan</h3>
            <p className="text-2xl font-bold">Free</p>
            <ul className="mt-2 mb-4 text-sm list-disc list-inside">
              <li>50 GB Storage</li>
              <li>Limited Features</li>
            </ul>
            <button className="btn btn-sm bg-white text-black">Upgrade Plan</button>
          </div>

          <div className="card bg-white shadow-md p-4">
            <h3 className="text-lg font-bold mb-4">Latest Activity</h3>
            <ul className="space-y-3 text-sm">
              <li>🔵 Karen moved “User Research”</li>
              <li>🟣 Samantha uploaded to “Product Assets”</li>
              <li>🟠 Tony finished “Wireframing”</li>
              <li>🔴 Samantha created new task</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">User Dashboard</h1>

          <button
            className="lg:hidden text-3xl"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>

          <input
            type="text"
            placeholder="Search here...."
            className="input input-bordered w-1/3 hidden lg:block"
          />
        </div>

        {/* User Card Section */}
        <div className="bg-white rounded-2xl shadow-lg mb-6">
          <div className="bg-[#6c63FF] h-32 w-full rounded-t-2xl"></div>

          <div className="flex flex-col md:flex-row items-start px-6 pt-6 pb-8 gap-6">
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
              <div className="-mt-16">
                <div className="w-24 h-24 rounded-full ring-4 ring-white bg-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                  NA
                </div>
              </div>
              <div className="mt-4 text-center md:text-left">
                <h2 className="text-xl font-bold">Nabila Azalea</h2>
                <p className="text-sm text-gray-500 font-semibold">Admin</p>
                <p className="text-sm text-gray-400">📍 Jakarta, Indonesia</p>
              </div>
            </div>

            <div className="flex flex-row gap-6 items-center justify-start w-full md:w-1/2 md:justify-end mt-4 md:mt-12">
              <div className="flex items-center gap-2">
                <div className="bg-red-500 p-3 rounded-full">📞</div>
                <span className="text-black font-semibold text-sm">+12 345 6789 0</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-red-500 p-3 rounded-full">📧</div>
                <span className="text-black font-semibold text-sm">jordan@mail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contacts & Messages Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contacts */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Contacts</h2>
              <button className="bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700">
                +
              </button>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full p-2 border rounded-md"
              />
            </div>
            <ul className="space-y-4">
              {contacts.map((name, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-white font-bold">
                      {name[0]}
                    </div>
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-sm text-gray-500">Class VI-A</p>
                    </div>
                  </div>
                  <button className="text-purple-600 hover:text-purple-800">
                    ✉️
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Messages */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Messages</h2>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full p-2 border rounded-md"
              />
            </div>
            <ul className="space-y-4">
              {contacts.map((name, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-white font-bold">
                      {name[0]}
                    </div>
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">12:45 PM</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-center">
              <button className="text-purple-600 font-medium hover:underline">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button
          className="text-right text-xl mb-4 w-full"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>

        <div className="space-y-6">
          <div className="card bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
            <h3 className="text-lg font-bold mb-2">Your Plan</h3>
            <p className="text-2xl font-bold">Free</p>
            <ul className="mt-2 mb-4 text-sm list-disc list-inside">
              <li>50 GB Storage</li>
              <li>Limited Features</li>
            </ul>
            <button className="btn btn-sm bg-white text-black">Upgrade Plan</button>
          </div>

          <div className="card bg-white shadow-md p-4">
            <h3 className="text-lg font-bold mb-4">Latest Activity</h3>
            <ul className="space-y-3 text-sm">
              <li>🔵 Karen moved “User Research”</li>
              <li>🟣 Samantha uploaded to “Product Assets”</li>
              <li>🟠 Tony finished “Wireframing”</li>
              <li>🔴 Samantha created new task</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
