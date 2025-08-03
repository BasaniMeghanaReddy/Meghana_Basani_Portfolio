import React from "react";

export default function Experience() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-8">
        Work Experience
      </h2>
      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4">
            <img 
              src="/NDSU AGDA.png" 
              alt="NDSU AGDA Logo" 
              className="w-12 h-12 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Software Development Intern</h3>
                <span className="text-sm text-gray-600 lg:ml-4">April 2025 – Present</span>
              </div>
              <p className="text-blue-900 font-medium mb-3">AgDA, NDSU | Fargo, USA</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 text-justify">
                Collaborated with the USDA and AgDA research teams on real-world agricultural analytics platforms such as AgSkysight and PredictPro. These tools support data-driven farming through aerial imagery analysis and predictive modeling. I develop unified RESTful APIs, integrate PostgreSQL backend logic, and perform thorough testing using Postman, all within an MVC framework and Azure DevOps workflow.
              </p>
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

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4">
            <img 
              src="/North_Dakota_State_Bison_logo.svg" 
              alt="NDSU Logo" 
              className="w-12 h-12 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Software Intern – HPC Systems</h3>
                <span className="text-sm text-gray-600 lg:ml-4">Jan 2025 – June 2025</span>
              </div>
              <p className="text-blue-900 font-medium mb-3">CCAST, NDSU | Fargo, USA</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 text-justify">
                Collaborated on a USDA SCINet initiative to deploy drone imagery tools on HPC clusters. I containerized research applications using Docker and Podman, automated deployment workflows, and tested performance across CCAST and USDA systems, enabling scalable, reproducible scientific analysis.
              </p>
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

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4">
            <img 
              src="/gep logo.jpeg" 
              alt="GEP Logo" 
              className="w-12 h-12 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Associate Software Engineer</h3>
                <span className="text-sm text-gray-600 lg:ml-4">Aug 2023 – Jun 2024</span>
              </div>
              <p className="text-blue-900 font-medium mb-3">GEP Worldwide | Hyderabad, India</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 text-justify">
                Led the full-stack development of the Delta Migration Tool using the MEAN stack, reducing processing time by 50%. Resolved critical API and UI bugs, implemented unit tests, and built Cypress-based automation to ensure feature stability and complete test coverage. Collaborated on code reviews and user acceptance testing for production-ready deployment.
              </p>
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

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4">
            <img 
              src="/dxc-technology-logo.png" 
              alt="DXC Technology Logo" 
              className="w-12 h-12 flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Software Intern – Cloud & Networking</h3>
                <span className="text-sm text-gray-600 lg:ml-4">May 2023 – Aug 2023</span>
              </div>
              <p className="text-blue-900 font-medium mb-3">DXC Technology | Hyderabad, India</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 text-justify">
                Managed and deployed over 10 Azure Virtual Machines across multiple regions, ensuring uptime and availability. Set up secure data transfer pipelines between on-premise systems and cloud environments, and worked with network security tools including firewalls, load balancers, and Apache Web Servers.
              </p>
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
