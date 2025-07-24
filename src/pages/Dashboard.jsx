
import React, { useState } from "react";
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'This Week',
        data: [20, 50, 80, 10, 5, 40, 60, 30, 25, 70, 100, 65],
        borderColor: '#FDBA74',
        backgroundColor: 'rgba(253, 186, 116, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Last Week',
        data: [10, 30, 70, 20, 15, 30, 50, 20, 35, 60, 90, 45],
        borderColor: '#F97316',
        backgroundColor: 'rgba(249, 115, 22, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'This Week',
        data: [75, 50, 65, 40, 55, 60, 80],
        backgroundColor: '#FDBA74',
      },
      {
        label: 'Last Week',
        data: [60, 40, 45, 35, 50, 70, 65],
        backgroundColor: '#F97316',
      },
    ],
  };

  return (
    <div className="flex">
      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-full bg-gray-200 focus:outline-none text-sm w-64"
            />
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <p className="font-semibold text-sm">Nabila A.</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <div className="w-8 h-8 bg-purple-300 rounded-full" />
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Students", value: 932, emoji: "🎓" },
            { label: "Teachers", value: 754, emoji: "🧑‍🏫" },
            { label: "Events", value: 40, emoji: "📅" },
            { label: "Foods", value: "32k", emoji: "🍔" },
          ].map((card, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
              <div className="text-2xl">{card.emoji}</div>
              <p className="text-gray-500 text-sm">{card.label}</p>
              <p className="text-lg font-bold">{card.value}</p>
            </div>
          ))}
        </div>

        {/* School Performance */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">School Performance</h2>
            <div className="flex space-x-4 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-300" /> This Week</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-500" /> Last Week</div>
            </div>
          </div>
          <Line data={lineData} options={{ responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true }}}} />
        </div>

        {/* Calendar & Finance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-4">School Calendar</h2>
            <Calendar value={date} onChange={setDate} />
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">School Finance</h2>
              <div className="flex space-x-4 text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-300" /> This Week</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-500" /> Last Week</div>
              </div>
            </div>
            <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true }}}} />
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {/* Unpaid Tuition */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-4">Unpaid Student Tuition</h2>
            <div className="space-y-2 text-sm">
              {["Samantha William", "Tony Soop", "Jordan Nico", "Karen Hope", "Nadila Adja"].map((student, i) => (
                <div key={i} className="flex justify-between items-center border-b py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full" />
                    <span>{student}</span>
                  </div>
                  <span className="text-indigo-600 text-xs">ID 123456789</span>
                  <span className="bg-orange-100 text-orange-600 px-2 rounded-full text-xs">Class VII A</span>
                  <span className="font-semibold text-sm">$50,036</span>
                </div>
              ))}
            </div>
          </div>

          {/* School Expense */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-4">School Expense</h2>
            <div className="space-y-2 text-sm">
              {["Complete", "Pending", "Canceled"].map((status, idx) => (
                <div key={idx} className="flex justify-between items-center border-b py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div>
                      <p className="font-medium">#123456789</p>
                      <p className="text-xs text-gray-500">2 March 2021</p>
                    </div>
                  </div>
                  <p className="font-semibold">$50,036</p>
                  <span className={`text-sm ${
                    status === "Complete" ? "text-green-500" :
                    status === "Pending" ? "text-yellow-500" : "text-red-500"
                  }`}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 p-4 space-y-6 bg-gray-50 border-l hidden lg:block">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Recent Students</h3>
          <div className="space-y-3">
            {["Samantha", "Tony", "Jordan", "Karen", "Nadila"].map((name, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-200" />
                <div>
                  <p className="font-medium">{name} William</p>
                  <p className="text-xs text-gray-400">ID 12345678</p>
                </div>
              </div>
            ))}
            <button className="mt-2 w-full bg-indigo-100 text-indigo-600 py-1 rounded text-xs hover:bg-indigo-200 transition">
              View More
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Messages</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <p>Samantha: "Sure, I’ll join."</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <p>Tony: "Need help on exam."</p>
            </div>
            <button className="mt-2 w-full bg-indigo-100 text-indigo-600 py-1 rounded text-xs hover:bg-indigo-200 transition">
              View More
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Current Foods Menu</h3>
          <div className="space-y-2">
            {["Beef Steak", "Pancake with Honey", "Japanese Ramen"].map((item, i) => (
              <div key={i} className="bg-purple-100 px-3 py-2 rounded-lg text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
