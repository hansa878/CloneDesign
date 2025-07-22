import React, { useState } from "react";

export default function UserPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-base-200 min-h-screen p-6 font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Dashboard</h1>

        <input
          type="text"
          placeholder="Search here...."
          className="input input-bordered w-1/3 hidden lg:block"
        />

        <button
          className="lg:hidden text-3xl"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content (2/3 width on large screens) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-[#6c63FF] h-24 w-full"></div>

            <div className="flex flex-col md:flex-row items-start px-6 pt-6 pb-8 gap-6">
              {/* Avatar + Info */}
              <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
                <div className="-mt-12">
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

              {/* Contact Info */}
              <div className="flex flex-row gap-6 items-center justify-start w-full md:w-1/2 md:justify-end mt-4 md:mt-12">
                <div className="flex items-center gap-2">
                  <div className="bg-red-500 p-3 rounded-full text-white text-lg">📞</div>
                  <span className="text-black font-semibold text-sm">+12 345 6789 0</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-red-500 p-3 rounded-full text-white text-lg">📧</div>
                  <span className="text-black font-semibold text-sm">jordan@mail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar (only visible on large screens) */}
        <div className="hidden lg:flex flex-col space-y-6">
          {/* Plan Card */}
          <div className="card bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
            <h3 className="text-lg font-bold mb-2">Your Plan</h3>
            <p className="text-2xl font-bold">Free</p>
            <ul className="mt-2 mb-4 text-sm list-disc list-inside">
              <li>50 GB Storage</li>
              <li>Limited Features</li>
            </ul>
            <button className="btn btn-sm bg-white text-black">Upgrade Plan</button>
          </div>

          {/* Activity Log */}
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

      {/* Mobile Sidebar Drawer */}
      {isSidebarOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <div className="card bg-purple-500 text-white p-4">
            <h3 className="text-lg font-bold mb-2">Your Plan</h3>
            <p className="text-sm">Free Plan – 50 GB</p>
          </div>

          <div className="card bg-white shadow-md p-4">
            <h3 className="text-lg font-bold">Latest Activity</h3>
            <p className="text-sm mt-2">Recent changes by your team</p>
          </div>
        </div>
      )}
    </div>
  );
}
