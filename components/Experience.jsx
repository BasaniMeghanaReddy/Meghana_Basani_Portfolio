import React from "react";

export default function Experience() {
  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 sm:mb-8">
        Work Experience
      </h2>
      <div className="space-y-4 sm:space-y-6">
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <img 
              src="/NDSU AGDA.png" 
              alt="NDSU AGDA Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 mx-auto sm:mx-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Software Development Intern</h3>
                <span className="text-xs sm:text-sm text-gray-600 lg:ml-4 mt-1 lg:mt-0">April 2025 – Present</span>
              </div>
              <p className="text-blue-900 font-medium mb-3 text-sm sm:text-base">AgDA, NDSU | Fargo, USA</p>
              <ul className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Collaborated with USDA and AgDA research teams on agricultural analytics platforms (AgSkysight and PredictPro)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Developed unified RESTful APIs and integrated PostgreSQL backend logic within MVC framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Performed comprehensive API testing using Postman and maintained Azure DevOps workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Supported data-driven farming through aerial imagery analysis and predictive modeling</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs rounded-full">REST APIs</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">PostgreSQL</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">SQL</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">MVC</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">Postman</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">DBMS</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">Azure DevOps</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">API Testing</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <img 
              src="/North_Dakota_State_Bison_logo.svg" 
              alt="NDSU Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 mx-auto sm:mx-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Software Intern – HPC Systems</h3>
                <span className="text-xs sm:text-sm text-gray-600 lg:ml-4 mt-1 lg:mt-0">Jan 2025 – June 2025</span>
              </div>
              <p className="text-blue-900 font-medium mb-3 text-sm sm:text-base">CCAST, NDSU | Fargo, USA</p>
              <ul className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Collaborated on USDA SCINet initiative to deploy drone imagery tools on HPC clusters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Containerized research applications using Docker and Podman for scalable deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Automated deployment workflows and tested performance across CCAST and USDA systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Enabled scalable, reproducible scientific analysis for agricultural research</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs rounded-full">Linux</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">High Performance Computing (HPC)</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">Docker</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Podman</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">Aptainer</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Bash</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <img 
              src="/gep logo.jpeg" 
              alt="GEP Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 mx-auto sm:mx-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Associate Software Engineer</h3>
                <span className="text-xs sm:text-sm text-gray-600 lg:ml-4 mt-1 lg:mt-0">Aug 2023 – Jun 2024</span>
              </div>
              <p className="text-blue-900 font-medium mb-3 text-sm sm:text-base">GEP Worldwide | Hyderabad, India</p>
              <ul className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Led full-stack development of Delta Migration Tool using MEAN stack, reducing processing time by 50%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Resolved critical API and UI bugs, implemented unit tests for improved code quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Built Cypress-based automation to ensure feature stability and complete test coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Collaborated on code reviews and user acceptance testing for production-ready deployment</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs rounded-full">C#</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">.NET</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">Angular</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">SQL</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">REST APIs</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">Cypress</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Unit Testing</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">CSS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <img 
              src="/dxc-technology-logo.png" 
              alt="DXC Technology Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 mx-auto sm:mx-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Software Intern – Cloud & Networking</h3>
                <span className="text-xs sm:text-sm text-gray-600 lg:ml-4 mt-1 lg:mt-0">May 2023 – Aug 2023</span>
              </div>
              <p className="text-blue-900 font-medium mb-3 text-sm sm:text-base">DXC Technology | Hyderabad, India</p>
              <ul className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Managed and deployed over 10 Azure Virtual Machines across multiple regions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Ensured high uptime and availability for cloud infrastructure and services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Set up secure data transfer pipelines between on-premise systems and cloud environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2 mt-1">•</span>
                  <span>Worked with network security tools including firewalls, load balancers, and Apache Web Servers</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-900 text-xs rounded-full">Microsoft Azure</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Azure VMs</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">Apache Web Servers</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Networking</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-900 text-xs rounded-full">Putty</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Cloud Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
