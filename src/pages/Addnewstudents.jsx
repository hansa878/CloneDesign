import React, { useState } from "react";

export default function StudentParentForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form submitted and saved to local storage!");
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-gray-100 p-8 font-sans space-y-12">
      {/* Student Details */}
      <div className="bg-white rounded-lg shadow-md">
        <h2 className="bg-indigo-600 text-white p-3 rounded-t-md font-semibold">
          Student Details
        </h2>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-2 border-dashed hover:bg-gray-100 border-gray-300 items-center justify-center cursor-pointer">
                <div className="flex flex-col items-center justify-center pt-7">
                  <p className="text-sm text-gray-500">Drag and drop or click here to select file</p>
                </div>
                <input type="file" className="hidden" name="photo" onChange={handleChange} />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input type="text" name="firstName" onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
            <input type="text" name="lastName" onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
            <input type="text" name="dob" onChange={handleChange} placeholder="24 February 1997" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Place of Birth *</label>
            <input type="text" name="birthPlace" onChange={handleChange} placeholder="Jakarta" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Parent Name *</label>
            <input type="text" name="parentName" onChange={handleChange} placeholder="Marco William" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
            <input type="text" name="phone" onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="+1234567890" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input type="email" name="email" onChange={handleChange} placeholder="william@email.com" className="w-full border rounded px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
            <textarea name="address" onChange={handleChange} className="w-full border rounded px-3 py-2" rows="4" placeholder="Lorem ipsum..."></textarea>
          </div>
        </div>
      </div>

      {/* Parent Details */}
      <div className="bg-white rounded-lg shadow-md">
        <h2 className="bg-indigo-600 text-white p-3 rounded-t-md font-semibold">
          Parent Details
        </h2>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Father Name *</label>
            <input type="text" name="parentFirstName" onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mother Name *</label>
            <input type="text" name="parentLastName" onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input type="email" name="parentEmail" onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
            <input type="text" name="parentPhone" onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
            <textarea name="parentAddress" onChange={handleChange} className="w-full border rounded px-3 py-2" rows="4"></textarea>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Payments *</label>
            <div className="flex items-center space-x-6 mt-2">
              <label className="inline-flex items-center">
                <input type="radio" name="payment" value="cash" onChange={handleChange} className="form-radio" />
                <span className="ml-2">Cash</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="payment" value="debit" onChange={handleChange} className="form-radio" />
                <span className="ml-2">Debit</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button type="button" className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50">
          Save as Draft
        </button>
        <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Submit
        </button>
      </div>
    </form>
  );
}
