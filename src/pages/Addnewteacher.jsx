import React, { useState, useEffect } from "react";

export default function NewTeacher() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    pob: "",
    university: "",
    degree: "",
    startDate: "",
    endDate: "",
    city: "",
  });

  const [fileName, setFileName] = useState("");

  // Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("userFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userFormData", JSON.stringify(formData));
    alert("Form data saved to localStorage!");
  };

  const handleClear = () => {
    localStorage.removeItem("userFormData");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      dob: "",
      pob: "",
      university: "",
      degree: "",
      startDate: "",
      endDate: "",
      city: "",
    });
    setFileName("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white min-h-screen p-6 font-sans">
      {/* Personal Details */}
      <div className="bg-white shadow-md rounded-md border mb-10">
        <div className="bg-indigo-700 text-white px-6 py-3 font-semibold rounded-t-md">
          Personal Details
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Maria"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Historia"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="historia@gmail.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="+1234567890"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-md px-3 py-2 resize-none"
              placeholder="Enter your address..."
              maxLength="600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Photo *</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-dashed border-gray-400 text-gray-500 rounded-md px-3 py-8 cursor-pointer bg-gray-50"
            />
            {fileName && (
              <p className="text-xs text-gray-600 mt-1">Uploaded: {fileName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth *</label>
            <input
              type="text"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="24 February 1997"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Place of Birth *</label>
            <input
              type="text"
              name="pob"
              value={formData.pob}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Jakarta, Indonesia"
              required
            />
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-white shadow-md rounded-md border">
        <div className="bg-indigo-700 text-white px-6 py-3 font-semibold rounded-t-md">
          Education
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">University *</label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="University Andorra Historia"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Degree *</label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="History Major"
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Start Date *</label>
              <input
                type="text"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                placeholder="September 2013"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">End Date *</label>
              <input
                type="text"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                placeholder="September 2017"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Yogyakarta, Indonesia"
              required
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-6 gap-4">
        <button
          type="button"
          className="border border-indigo-700 text-indigo-700 rounded-full px-6 py-2 text-sm hover:bg-indigo-50"
        >
          Save as Draft
        </button>
        <button
          type="submit"
          className="bg-indigo-700 text-white rounded-full px-6 py-2 text-sm hover:bg-indigo-800"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="border border-red-500 text-red-500 rounded-full px-6 py-2 text-sm hover:bg-red-50"
        >
          Clear Form
        </button>
      </div>
    </form>
  );
}
