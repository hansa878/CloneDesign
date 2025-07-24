import React from 'react';
import { Search, Bell, Settings, MapPin, Phone, Mail, MoreHorizontal, Calendar, Clock } from 'lucide-react';

export default function TeacherDetails() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#F7F8FA', color: '#4A5568' }}>
      {/* Header */}
      <div className="py-4 px-6 flex items-center justify-between shadow-md" style={{ backgroundColor: '#FFFFFF' }}>
        <h1 className="text-xl font-semibold" style={{ color: '#2D3748' }}>Teacher Details</h1>
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
          {/* Left Column - Teacher Details */}
          <div className="rounded-lg p-6 lg:col-span-2 shadow-md" style={{ backgroundColor: '#FFFFFF' }}>
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
                  <span className="text-white text-2xl font-semibold">MH</span>
                </div>
              </div>
              <div className="pl-28 pt-2">
                <h2 className="text-xl font-semibold" style={{ color: '#2D3748' }}>Maria Historia</h2>
                <p className="text-sm mb-2" style={{ color: '#4A5568' }}>History Teacher</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                  <div className="flex items-center text-sm" style={{ color: '#718096' }}>
                    <MapPin className="w-4 h-4 mr-1" style={{ color: '#718096' }} />
                    <span>Jakarta, Indonesia</span>
                  </div>
                  <div className="flex items-center text-sm" style={{ color: '#718096' }}>
                    <Phone className="w-4 h-4 mr-1" style={{ color: '#718096' }} />
                    <span>+12 345 6789 0</span>
                  </div>
                  <div className="flex items-center text-sm" style={{ color: '#718096' }}>
                    <Mail className="w-4 h-4 mr-1" style={{ color: '#718096' }} />
                    <span>Historia@mail.com</span>
                  </div>
                </div>
              </div>
              <button className="absolute top-2 right-4 hover:text-gray-700 focus:outline-none" style={{ color: '#718096' }}>
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            {/* About Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#2D3748' }}>About:</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#4A5568' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            {/* Education Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#2D3748' }}>Education:</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <p className="font-medium text-sm" style={{ color: '#2D3748' }}>History Major, University Akademi Historia</p>
                  <p className="text-xs" style={{ color: '#718096' }}>2013-2017</p>
                </li>
                <li>
                  <p className="font-medium text-sm" style={{ color: '#2D3748' }}>Master of History, University Akademi Historia</p>
                  <p className="text-xs" style={{ color: '#718096' }}>2017-2020</p>
                </li>
              </ul>
            </div>
            {/* Expertise Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#2D3748' }}>Expertise:</h3>
              <p className="text-sm" style={{ color: '#4A5568' }}>World History, Philosophy, Prehistoric, Culture, Ancient</p>
            </div>
          </div>

          {/* Right Column - Schedule Details */}
          <div className="rounded-lg p-6 shadow-md" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#2D3748' }}>Schedule Details</h3>
            <p className="text-sm mb-4" style={{ color: '#4A5568' }}>Thursday, 10th April, 2021</p>

            <div className="space-y-3">
              {/* Schedule Item 1 - Purple */}
              <div className="rounded-lg p-3 border relative" style={{ backgroundColor: '#F5F3FF', borderColor: '#D6BCFA' }}>
                <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-lg" style={{ backgroundColor: '#6754C4' }}></div>
                <div className="pl-3">
                  <h4 className="text-sm font-semibold" style={{ color: '#6754C4' }}>World History</h4>
                  <p className="text-xs" style={{ color: '#6754C4' }}>Class VII-B</p>
                  <div className="mt-2 flex items-center text-xs space-x-2" style={{ color: '#718096' }}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>March 20, 2021</span>
                  </div>
                  <div className="flex items-center text-xs space-x-2" style={{ color: '#718096' }}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>08:00 - 09:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Schedule Item 2 - Orange */}
              <div className="rounded-lg p-3 border relative" style={{ backgroundColor: '#FFFAF0', borderColor: '#FEEBC8' }}>
                 <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-lg" style={{ backgroundColor: '#DD6B20' }}></div>
                 <div className="pl-3">
                  <h4 className="text-sm font-semibold" style={{ color: '#DD6B20' }}>Ancient History</h4>
                  <p className="text-xs" style={{ color: '#DD6B20' }}>Class VI-A</p>
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

              {/* Schedule Item 3 - Teal */}
              <div className="rounded-lg p-3 border relative" style={{ backgroundColor: '#E6FFFA', borderColor: '#B2F5EA' }}>
                 <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-lg" style={{ backgroundColor: '#38A169' }}></div>
                 <div className="pl-3">
                  <h4 className="text-sm font-semibold" style={{ color: '#38A169' }}>Culture</h4>
                  <p className="text-xs" style={{ color: '#38A169' }}>Class VIII-A</p>
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

              {/* Schedule Item 4 - Indigo */}
              <div className="rounded-lg p-3 border relative" style={{ backgroundColor: '#EBF8FF', borderColor: '#C6F6FF' }}>
                 <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-lg" style={{ backgroundColor: '#4C51BF' }}></div>
                 <div className="pl-3">
                  <h4 className="text-sm font-semibold" style={{ color: '#4C51BF' }}>World History</h4>
                  <p className="text-xs" style={{ color: '#4C51BF' }}>Class VI-C</p>
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