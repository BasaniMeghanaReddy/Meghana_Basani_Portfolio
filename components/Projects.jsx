import React from "react";

export default function Projects() {
  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 sm:mb-8">
        Projects
      </h2>
      <div className="space-y-4 sm:space-y-6">
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-6">
            <img 
              src="/E-Laundry_logo.png" 
              alt="E-Laundry Services Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 mx-auto sm:mx-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">E-Laundry Services</h3>
              <div className="mb-3">
                <p className="text-blue-900 font-medium text-xs sm:text-sm">Bhoj Reddy Engineering College for Women (BRECW), Hyderabad</p>
                <p className="text-gray-600 text-xs">Oct 2022 - Apr 2023</p>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 text-justify">
                Mobile application designed for laundry purposes, providing help to people living away from home and unemployed washer-men. 
                Delivers best-in-class laundry room operations with superior quality and service.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs rounded-full">Android</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Mobile App</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">Service Management</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-6">
            <img 
              src="/smartambulancesystem_logo.png" 
              alt="Smart Ambulance System Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 mx-auto sm:mx-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Smart Ambulance System</h3>
              <div className="mb-3">
                <p className="text-blue-900 font-medium text-xs sm:text-sm">Bhoj Reddy Engineering College for Women (BRECW), Hyderabad</p>
                <p className="text-gray-600 text-xs">Jan 2023 - Jun 2023</p>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 text-justify">
                Android app that uses mobile accelerometer to detect collisions while driving and automatically sends GPS location 
                with nearby ambulance/hospital numbers to emergency contacts.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Emergency</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs rounded-full">Accelerometer</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">GPS Tracking</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-6">
            <img 
              src="/portfoliologo.png" 
              alt="Portfolio Management System Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 mx-auto sm:mx-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Portfolio Management System</h3>
              <div className="mb-3">
                <p className="text-blue-900 font-medium text-xs sm:text-sm">Personal Project</p>
                <p className="text-gray-600 text-xs">Dec 2024 - Present</p>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 text-justify">
                A comprehensive portfolio management system built with Next.js and React, featuring responsive design, 
                dynamic content management, and modern UI/UX principles. Includes project showcase, skills visualization, 
                and contact management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs rounded-full">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">Tailwind CSS</span>
                <span className="px-1 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Framer Motion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
