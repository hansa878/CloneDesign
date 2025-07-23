import React, { useState } from "react";

const allStudents = [
  { name: "Samanta William", id: "#123456789", date: "2021-03-29", parent: "Meno William", city: "Jakarta", grade: "VII A" },
  { name: "Tony Soap", id: "#123456789", date: "2021-03-29", parent: "Jonne Soap", city: "Jakarta", grade: "VII B" },
  { name: "Karen Hope", id: "#123456789", date: "2021-03-29", parent: "Justin Hope", city: "Jakarta", grade: "VII C" },
  { name: "Jordan Nico", id: "#123456789", date: "2021-03-29", parent: "Amanda Nico", city: "Jakarta", grade: "VII B" },
  { name: "Nadila Adja", id: "#123456789", date: "2021-03-29", parent: "JOK Adja", city: "Jakarta", grade: "VII A" },
  { name: "Johnny Ahmad", id: "#123456789", date: "2021-03-29", parent: "Danny Ahmad", city: "Jakarta", grade: "VII A" },
  { name: "Lara Smith", id: "#987654321", date: "2021-03-30", parent: "Rick Smith", city: "Jakarta", grade: "VII A" },
  { name: "David Clark", id: "#987654322", date: "2021-03-30", parent: "Emma Clark", city: "Jakarta", grade: "VII B" },
  { name: "Sara Vega", id: "#987654323", date: "2021-03-30", parent: "Kevin Vega", city: "Jakarta", grade: "VII C" },
  { name: "Emily Frost", id: "#987654324", date: "2021-04-01", parent: "Sean Frost", city: "Jakarta", grade: "VII B" },
  { name: "Brian Hall", id: "#987654325", date: "2021-04-01", parent: "Karen Hall", city: "Jakarta", grade: "VII A" },
  { name: "Rachel Moon", id: "#987654326", date: "2021-04-01", parent: "Michael Moon", city: "Jakarta", grade: "VII C" },
  { name: "Alice Gray", id: "#987654327", date: "2021-04-02", parent: "Thomas Gray", city: "Jakarta", grade: "VII A" },
  { name: "Ethan Fox", id: "#987654328", date: "2021-04-02", parent: "Fiona Fox", city: "Jakarta", grade: "VII B" },
  { name: "Ivy Lynn", id: "#987654329", date: "2021-04-02", parent: "George Lynn", city: "Jakarta", grade: "VII C" },
  { name: "Leo West", id: "#987654330", date: "2021-04-02", parent: "Diana West", city: "Jakarta", grade: "VII A" },
  { name: "Zara Lane", id: "#987654331", date: "2021-04-02", parent: "Oscar Lane", city: "Jakarta", grade: "VII B" },
  { name: "Mike Stone", id: "#987654332", date: "2021-04-02", parent: "Nina Stone", city: "Jakarta", grade: "VII C" },
];

export default function Students() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest");

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1); // Reset to first page after sort change
  };

  const filteredStudents = allStudents
    .filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "Newest") return new Date(b.date) - new Date(a.date);
      return new Date(a.date) - new Date(b.date);
    });

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const students = filteredStudents.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Students</h1>
          <div className="flex gap-2">
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="rounded border border-gray-300 px-3 py-2"
            >
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
              + New Student
            </button>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search student name..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-500">
            <tr>
              <th className="p-4"><input type="checkbox" /></th>
              <th className="p-4">Name</th>
              <th className="p-4">ID</th>
              <th className="p-4">Date</th>
              <th className="p-4">Parent Name</th>
              <th className="p-4">City</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Grade</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="9" className="p-4 text-center text-gray-400">
                  No students found.
                </td>
              </tr>
            ) : (
              students.map((s, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-200 rounded-full" />
                    {s.name}
                  </td>
                  <td className="p-4 text-indigo-600 font-medium">{s.id}</td>
                  <td className="p-4">{new Date(s.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</td>
                  <td className="p-4">{s.parent}</td>
                  <td className="p-4">{s.city}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200 transition cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/128/5585/5585846.png" alt="phone" className="w-4 h-4" />
                      </span>
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200 transition cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png" alt="mail" className="w-4 h-4" />
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="bg-orange-400 text-white text-xs px-3 py-1 rounded-full">
                      {s.grade}
                    </span>
                  </td>
                  <td className="p-4">. . .</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>
          Showing {students.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredStudents.length)} of {filteredStudents.length}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-full border ${
              currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-gray-100"
            }`}
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded-full border ${
                currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-full bg-white border hover:bg-gray-100 disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

