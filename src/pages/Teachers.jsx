import React, { useState } from "react";

const allTeachers = [
  // Page 1
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Tom Housenburg", subject: "Science" },
  { name: "Dana Benevista", subject: "Art" },
  { name: "Salvadore Morbeau", subject: "Biology" },
  { name: "Maria Historia", subject: "History" },
  { name: "Jack Sally", subject: "Physics" },
  { name: "Lula Beatrice", subject: "Algorithm" },
  { name: "Nella Vita", subject: "English" },
  { name: "Nadia Laravela", subject: "Programming" },
  { name: "Dakota Farral", subject: "Science" },
  { name: "Miranda Adila", subject: "Art" },
  { name: "Indiana Barker", subject: "Biology" },
  // Page 2
  { name: "John Cooper", subject: "Geometry" },
  { name: "Sara Mills", subject: "Chemistry" },
  { name: "Andrew King", subject: "Music" },
  { name: "Michelle Ford", subject: "Geography" },
  { name: "Harold Finch", subject: "Literature" },
  { name: "Jessie Ray", subject: "Calculus" },
  { name: "Nina Ross", subject: "History" },
  { name: "Victor Hugo", subject: "Philosophy" },
  { name: "Wendy Lau", subject: "Economics" },
  { name: "Paul Nunez", subject: "Statistics" },
  { name: "Liam Gray", subject: "Biology" },
  { name: "Aria North", subject: "Sociology" },
  // Page 3
  { name: "Eva Dawn", subject: "Drama" },
  { name: "Mark Wave", subject: "Computer Science" },
  { name: "Chris Pine", subject: "Physics" },
  { name: "Emma Lee", subject: "Math" },
  { name: "Scott Sky", subject: "Literature" },
  { name: "Olivia Wood", subject: "Science" },
  { name: "Ben Hart", subject: "Technology" },
  { name: "Lucy Vale", subject: "Psychology" },
  { name: "Max Payne", subject: "Game Design" },
  { name: "Ashley Cole", subject: "Architecture" },
  { name: "Tyler Moon", subject: "Engineering" },
  { name: "Sophie Ray", subject: "Poetry" },
];

const itemsPerPage = 12;

export default function Teacher() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Newest");

  const totalPages = Math.ceil(allTeachers.length / itemsPerPage);

  const filteredTeachers = allTeachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeachers = filteredTeachers.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="p-8">
      {/* Title + Controls */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Teachers</h1>
        <div className="flex gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded border border-gray-300 px-3 py-2"
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            + New Teacher
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search teacher"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to page 1 on search
          }}
          className="border border-gray-300 px-4 py-2 rounded w-64"
        />
      </div>

      {/* Teacher Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentTeachers.map((teacher, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
            <div className="mx-auto w-16 h-16 bg-purple-200 rounded-full mb-3" />
            <h2 className="text-lg font-semibold">{teacher.name}</h2>
            <p className="text-gray-500 text-sm">{teacher.subject}</p>
            <div className="flex justify-center gap-3 mt-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200 cursor-pointer transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5585/5585846.png"
                  alt="phone"
                  className="w-5 h-5"
                />
              </span>
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 hover:bg-indigo-200 cursor-pointer transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png"
                  alt="mail"
                  className="w-5 h-5"
                />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <span>
          Showing {indexOfFirstItem + 1}–
          {Math.min(indexOfLastItem, filteredTeachers.length)} from{" "}
          {filteredTeachers.length} teachers
        </span>
        <div className="flex items-center gap-1">
          {/* Backward */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-full border ${
              currentPage === 1
                ? "bg-gray-200 cursor-not-allowed text-gray-400"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            ‹
          </button>

          {/* Page numbers */}
          {Array.from({ length: Math.ceil(filteredTeachers.length / itemsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-full border ${
                currentPage === i + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Forward */}
          <button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(filteredTeachers.length / itemsPerPage)}
            className={`px-3 py-1 rounded-full border ${
              currentPage === Math.ceil(filteredTeachers.length / itemsPerPage)
                ? "bg-gray-200 cursor-not-allowed text-gray-400"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
