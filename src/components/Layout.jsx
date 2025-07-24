// src/Layout.jsx or src/components/Layout.jsx

import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 text-sm">
      {/* Left Sidebar */}
      <aside className="w-64 bg-[#4F46E5] text-white p-6 flex flex-col overflow-y-auto max-h-screen">
        <div className="text-2xl font-bold mb-10 flex items-center gap-2">
          <div className="bg-orange-500 w-8 h-8 flex items-center justify-center rounded-full text-white text-xl">A</div>
          Akademi
        </div>

        <nav className="space-y-4">
          {[
            { name: "Dashboard", emoji: "🏠", path: "/" },
            { name: "Students", emoji: "🎓", path: "/students" },
            { name: "Teachers", emoji: "🧑‍🏫", path: "/teachers" },
            { name: "Events", emoji: "📅", path: "/events" },
            { name: "Finance", emoji: "💰", path: "/finance" },
            { name: "Food", emoji: "🍔", path: "/food" },
            { name: "User", emoji: "💬", path: "/user" },
            { name: "Latest Activity", emoji: "🕓", path: "/latest-activity" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="flex items-center gap-2 px-3 py-2 hover:bg-indigo-700 rounded transition"
            >
              <span>{item.emoji}</span>
              {item.name}
            </Link>
          ))}

          {/* More Menu */}
          <div>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-indigo-700 rounded transition w-full text-left"
            >
              <span>➕</span>
              More
            </button>
            {moreOpen && (
              <div className="ml-6 mt-2 space-y-2 text-sm">
                <Link to="/add-new-student" className="block hover:text-indigo-300">Add New Student</Link>
                <Link to="/add-new-teacher" className="block hover:text-indigo-300">Add New Teacher</Link>
                <Link to="/student-details" className="block hover:text-indigo-300">Student Detail</Link>
                <Link to="/teacher-details" className="block hover:text-indigo-300">Teacher Detail</Link>
              </div>
            )}
          </div>
        </nav>

        <div className="mt-auto text-xs text-indigo-200 pt-10">
          Akademi - School Dashboard <br />
          Made with ❤️ by Ikram
        </div>
      </aside>

      {/* Right Content (Page Content) */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
