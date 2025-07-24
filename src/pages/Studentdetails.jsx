import React from 'react';
import {
  Search, Bell, Settings, MapPin, Phone, Mail, MoreHorizontal,
  Calendar, Clock, User, Hash, DollarSign, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function StudentDetails() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#F7F8FA', color: '#4A5568' }}>
      {/* Header */}
      <div className="py-4 px-6 flex items-center justify-between shadow-md" style={{ backgroundColor: '#FFFFFF' }}>
        <h1 className="text-xl font-semibold" style={{ color: '#2D3748' }}>Student Details</h1>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#718096' }} />
            <input
              type="text"
              placeholder="Search here..."
              className="rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 text-sm border"
              style={{ backgroundColor: '#EDF2F7', borderColor: '#E0E6ED', '--tw-ring-color': '#805AD5' }}
            />
          </div>
          <button className="rounded-full p-2 focus:outline-none focus:ring-2" style={{ backgroundColor: '#EDF2F7', color: '#718096', '--tw-ring-color': '#805AD5' }}>
            <Bell className="w-5 h-5" />
          </button>
          <button className="rounded-full p-2 focus:outline-none focus:ring-2" style={{ backgroundColor: '#EDF2F7', color: '#718096', '--tw-ring-color': '#805AD5' }}>
            <Settings className="w-5 h-5" />
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full mr-2 overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#7B61FF' }}>
              <span className="text-white text-xs font-semibold">NA</span>
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: '#2D3748' }}>Nabila A.</p>
              <p className="text-xs" style={{ color: '#718096' }}>Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Student Details & Payment History */}
          <div className="lg:col-span-2 space-y-6">
            {/* Student Profile Card */}
            <div className="rounded-lg p-6 shadow-md" style={{ backgroundColor: '#FFFFFF' }}>
              {/* Banner */}
              <div className="relative rounded-t-lg overflow-hidden h-32" style={{ backgroundColor: '#553C9A' }}>
                <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'linear-gradient(to bottom right, #805AD5, #553C9A)' }}></div>
                {/* Decorative circles */}
                <div className="absolute -bottom-8 left-1/4 -translate-x-1/2 flex space-x-4 z-10">
                  <div className="w-16 h-16 rounded-full border-4 border-white opacity-70" style={{ backgroundColor: '#F6E05E' }}></div>
                  <div className="w-16 h-16 rounded-full border-4 border-white opacity-70" style={{ backgroundColor: '#ED8936' }}></div>
                </div>
              </div>
              {/* Profile Info */}
              <div className="relative mt-4 pb-4 border-b" style={{ borderColor: '#E0E6ED' }}>
                <div className="absolute left-6 -top-12 transform -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full border-4 overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#7B61FF', borderColor: '#FFFFFF' }}>
                    <span className="text-white text-2xl font-semibold">KH</span> {/* Initials for Karen Hope */}
                  </div>
                </div>
                <div className="pl-28 pt-2">
                  <h2 className="text-xl font-semibold" style={{ color: '#2D3748' }}>Karen Hope</h2>
                  <p className="text-sm mb-2" style={{ color: '#4A5568' }}>Student</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                    <div className="flex items-center text-sm" style={{ color: '#4A5568' }}>
                      <User className="w-4 h-4 mr-1" style={{ color: '#ED8936' }} /> {/* Orange icon for Parent */}
                      <span>Justin Hope</span>
                    </div>
                    <div className="flex items-center text-sm" style={{ color: '#4A5568' }}>
                      <MapPin className="w-4 h-4 mr-1" style={{ color: '#ED8936' }} /> {/* Orange icon for Address */}
                      <span>Jakarta, Indonesia</span>
                    </div>
                    <div className="flex items-center text-sm" style={{ color: '#4A5568' }}>
                      <Phone className="w-4 h-4 mr-1" style={{ color: '#ED8936' }} /> {/* Orange icon for Phone */}
                      <span>+12 345 6789 0</span>
                    </div>
                    <div className="flex items-center text-sm" style={{ color: '#4A5568' }}>
                      <Mail className="w-4 h-4 mr-1" style={{ color: '#ED8936' }} /> {/* Orange icon for Email */}
                      <span>Hope@mail.com</span>
                    </div>
                  </div>
                </div>
                <button className="absolute top-2 right-4 hover:text-gray-700 focus:outline-none" style={{ color: '#718096' }}>
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Payment History Section */}
            <div className="rounded-lg p-6 shadow-md" style={{ backgroundColor: '#FFFFFF' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#2D3748' }}>Payment History</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#718096' }}></th> {/* Empty header for icon */}
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#718096' }}>Transaction ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#718096' }}>Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#718096' }}>Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#718096' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Payment Item 1 - Complete */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap"><DollarSign className="w-4 h-4" style={{ color: '#E53E3E' }} /></td> {/* Red icon */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#2D3748' }}>#123456789</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#4A5568' }}>2 March 2021, 13:45 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#2D3748' }}>$ 50,036</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold" style={{ color: '#38A169' }}>Complete</td> {/* Green text */}
                    </tr>
                    {/* Payment Item 2 - Pending */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap"><DollarSign className="w-4 h-4" style={{ color: '#E53E3E' }} /></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#2D3748' }}>#123456789</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#4A5568' }}>2 March 2021, 13:45 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#2D3748' }}>$ 50,036</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold" style={{ color: '#ED8936' }}>Pending</td> {/* Orange text */}
                    </tr>
                    {/* Payment Item 3 - Canceled */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap"><DollarSign className="w-4 h-4" style={{ color: '#E53E3E' }} /></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#2D3748' }}>#123456789</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#4A5568' }}>2 March 2021, 13:45 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#2D3748' }}>$ 50,036</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold" style={{ color: '#E53E3E' }}>Canceled</td> {/* Red text */}
                    </tr>
                     {/* Payment Item 4 - Complete */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap"><DollarSign className="w-4 h-4" style={{ color: '#E53E3E' }} /></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#2D3748' }}>#123456789</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#4A5568' }}>2 March 2021, 13:45 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#2D3748' }}>$ 50,036</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold" style={{ color: '#38A169' }}>Complete</td> {/* Green text */}
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="mt-4 flex items-center justify-between text-sm" style={{ color: '#4A5568' }}>
                <span>Showing 1-5 from <span style={{ color: '#2D3748' }}>100</span> data</span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E6ED', color: '#718096' }}>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg font-medium" style={{ backgroundColor: '#6754C4', color: '#FFFFFF' }}>1</button> {/* Active page */}
                  <button className="p-2 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E6ED', color: '#4A5568' }}>2</button>
                  <button className="p-2 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E6ED', color: '#4A5568' }}>3</button>
                  <button className="p-2 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E6ED', color: '#718096' }}>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Schedule Details */}
          <div className="rounded-lg p-6 shadow-md" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#2D3748' }}>Schedule Details</h3>
            <p className="text-sm mb-4" style={{ color: '#4A5568' }}>Thursday, 10th April, 2021</p>

            <div className="space-y-3">
              {/* Schedule Item 1 - Blue */}
              <div className="rounded-lg p-3 border relative" style={{ backgroundColor: '#EBF8FF', borderColor: '#C6F6FF' }}>
                <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-lg" style={{ backgroundColor: '#4C51BF' }}></div>
                <div className="pl-3">
                  <h4 className="text-sm font-semibold" style={{ color: '#4C51BF' }}>Basic Algorithm</h4>
                  <p className="text-xs" style={{ color: '#4C51BF' }}>Algorithm</p>
                  <div className="mt-2 flex items-center text-xs space-x-2" style={{ color: '#718096' }}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>March 20, 2021</span>
                  </div>
                  <div className="flex items-center text-xs space-x-2" style={{ color: '#718096' }}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>09:00 - 10:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Schedule Item 2 - Orange */}
              <div className="rounded-lg p-3 border relative" style={{ backgroundColor: '#FFFAF0', borderColor: '#FEEBC8' }}>
                 <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-lg" style={{ backgroundColor: '#ED8936' }}></div>
                 <div className="pl-3">
                  <h4 className="text-sm font-semibold" style={{ color: '#ED8936' }}>Basic Art</h4>
                  <p className="text-xs" style={{ color: '#ED8936' }}>Art</p>
                  <div className="mt-2 flex items-center text-xs space-x-2" style={{ color: '#718096' }}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>March 20, 2021</span>
                  </div>
                  <div className="flex items-center text-xs space-x-2" style={{ color: '#718096' }}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>09:00 - 10:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Schedule Item 3 - Yellow */}
              <div className="rounded-lg p-3 border relative" style={{ backgroundColor: '#FFFAE0', borderColor: '#FEF08A' }}>
                 <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-lg" style={{ backgroundColor: '#F6E05E' }}></div>
                 <div className="pl-3">
                  <h4 className="text-sm font-semibold" style={{ color: '#F6E05E' }}>HTML & CSS Class</h4>
                  <p className="text-xs" style={{ color: '#F6E05E' }}>Programming</p>
                  <div className="mt-2 flex items-center text-xs space-x-2" style={{ color: '#718096' }}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>March 20, 2021</span>
                  </div>
                  <div className="flex items-center text-xs space-x-2" style={{ color: '#718096' }}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>09:00 - 10:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Schedule Item 4 - Indigo (purple) */}
              <div className="rounded-lg p-3 border relative" style={{ backgroundColor: '#F5F3FF', borderColor: '#D6BCFA' }}>
                 <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-lg" style={{ backgroundColor: '#6754C4' }}></div>
                 <div className="pl-3">
                  <h4 className="text-sm font-semibold" style={{ color: '#6754C4' }}>Simple Past Tense</h4>
                  <p className="text-xs" style={{ color: '#6754C4' }}>English</p>
                  <div className="mt-2 flex items-center text-xs space-x-2" style={{ color: '#718096' }}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>March 20, 2021</span>
                  </div>
                  <div className="flex items-center text-xs space-x-2" style={{ color: '#718096' }}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>09:00 - 10:00 AM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="font-medium rounded-lg px-4 py-2 border text-sm transition-colors duration-200"
                      style={{ backgroundColor: '#FFFFFF', color: '#805AD5', borderColor: '#805AD5', '--tw-ring-color': '#805AD5' }}>
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}