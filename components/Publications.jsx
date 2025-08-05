import React from "react";
import { Download } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      title: "Monitoring Water Quality Using Machine Learning Algorithms",
      journal: "The International Journal of Analytical and Experimental Modal Analysis (IJAEMA)",
      date: "June 1, 2023",
      description: "Conducted a systematic review on machine learning (ML) applications for estimating water quality parameters using satellite data.",
      pdfFile: "Major publication doc.pdf",
      highlights: [
        "Analyzed 1,796 research papers, refining the selection to 113 studies to assess the effectiveness of ML in water quality monitoring",
        "Evaluated various ML models, including ANN, SVM, RF, DT, and GP, for retrieving water quality parameters like chlorophyll-a, salinity, and turbidity",
        "Utilized satellite data sources, such as Landsat, Sentinel, MODIS, and VIIRS, for remote sensing applications in water quality assessment",
        "Applied PRISMA methodology for systematic literature review and data extraction, ensuring high-quality research synthesis",
        "Demonstrated the potential of ML in environmental monitoring, aiding policymakers and water resource managers in sustainable water quality management"
      ]
    },
    {
      title: "E – Laundry Services",
      journal: "The International Journal of Analytical and Experimental Modal Analysis (IJAEMA)",
      date: "April 1, 2023",
      description: "Developed an Android-based e-laundry application to enhance accessibility and efficiency in laundry services.",
      pdfFile: "206-IJAEMA-APRIL-2023.pdf",
      highlights: [
        "Implemented user and admin functionalities, enabling service providers to manage operations and users to track their laundry progress",
        "Integrated key features like laundry shop management, order tracking, request status updates, and notifications",
        "Designed the system architecture, incorporating technical and software architecture principles to optimize performance",
        "Published findings in the International Journal of Analytical and Experimental Modal Analysis (April 2023, Vol. XV, Issue IV)",
        "Addressed challenges in existing manual laundry management systems by automating requests, reducing paperwork, and improving customer experience"
      ]
    }
  ];

  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 sm:mb-8">
        Publications & Research
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {publications.map((publication, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-2 sm:space-y-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {publication.title}
                </h3>
                {publication.pdfFile && (
                  <a
                    href={`/${encodeURIComponent(publication.pdfFile)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-900 text-white text-xs rounded hover:bg-blue-800 transition-colors flex items-center justify-center space-x-1 flex-shrink-0 w-fit"
                  >
                    <Download className="w-3 h-3" />
                    <span>View PDF</span>
                  </a>
                )}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 space-y-1 sm:space-y-0">
                <p className="text-blue-900 font-medium text-xs sm:text-sm">
                  {publication.journal}
                </p>
                <span className="text-xs sm:text-sm text-gray-600 sm:ml-4">
                  {publication.date}
                </span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 text-justify">
                {publication.description}
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-3">Key Contributions:</h4>
              <div className="space-y-2">
                {publication.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="text-gray-700 text-xs sm:text-sm leading-relaxed text-justify">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 