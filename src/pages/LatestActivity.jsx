// src/components/LatestActivity.jsx

import React from 'react';

const timelineData = [
  {
    section: 'Today',
    events: [
      {
        date: 'Monday, June 31 2020',
        description: (
          <>
            Karen Hope has created new task at{' '}
            <span className="text-purple-600 font-medium">History Lesson</span>
          </>
        ),
      },
      {
        date: 'Monday, June 31 2020',
        description: (
          <>
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium mr-2 inline-block">
              {' '}
              REMINDER{' '}
            </span>
            Due date of <span className="text-red-600 font-medium">Science Homework</span> task will be coming
          </>
        ),
        highlighted: true, // Example of a highlighted event
      },
      {
        date: 'Monday, June 31 2020',
        description: (
          <>
            Tony Soap commented at{' '}
            <span className="text-red-600 font-medium">Science Homework</span>
          </>
        ),
      },
      {
        date: 'Monday, June 31 2020',
        description: (
          <>
            Samantha William add 4 files on{' '}
            <span className="text-purple-600 font-medium">Art Class</span>
          </>
        ),
        files: true,
      },
      {
        date: 'Monday, June 31 2020',
        description: (
          <>
            You has moved "<span className="text-green-600 font-medium">Biology Homework</span>" task to Done
          </>
        ),
      },
    ],
  },
  {
    section: 'Yesterday',
    events: [
      {
        date: 'Sunday, June 30 2020',
        description: (
          <>
            Johnny Ahmad mentioned you at{' '}
            <span className="text-yellow-600 font-medium">Art Class Homework</span>
          </>
        ),
      },
      {
        date: 'Sunday, June 30 2020',
        description: (
          <>
            Nadila Adja mentioned you at{' '}
            <span className="text-purple-600 font-medium">Programming Homework</span>
          </>
        ),
      },
    ],
  },
];

const LatestActivity = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
        {timelineData.map((section, sectionIndex) => (
          <div key={section.section} className={`${sectionIndex > 0 ? 'mt-10' : ''}`}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{section.section}</h2>
            {section.events.map((event, eventIndex) => (
              <div
                key={eventIndex}
                className={`relative flex items-start mb-6 last:mb-0 ${
                  event.highlighted ? 'bg-blue-50 bg-opacity-50 rounded-md p-2 -ml-2' : ''
                }`}
              >
                {/* Timeline Bullet (no avatar before it) */}
                <div className="w-3 h-3 bg-purple-600 rounded-full flex-shrink-0 mt-1.5 z-10"></div>

                {/* Vertical Line - adjusted 'left' position back to original */}
                {eventIndex < section.events.length - 1 && (
                  <div className="absolute left-[5px] top-[18px] bottom-[-24px] w-0.5 bg-gray-200 z-0"></div>
                )}

                {/* Event Content */}
                <div className="ml-5 flex-grow">
                  <p className="text-gray-500 text-sm mb-1">{event.date}</p>
                  <p className="text-gray-700 leading-relaxed text-[0.93rem]">{event.description}</p>
                  {event.files && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-24 h-16 bg-purple-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 text-sm"
                        >
                          {i === 0 && 'Preview'}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestActivity;