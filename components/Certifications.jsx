import React from "react";
import { Download } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      name: "Docker Foundations Professional Certificate",
      issuer: "Docker",
      color: "blue",
      pdfFile: "CertificateOfCompletion_Docker Foundations Professional Certificate.pdf"
    },
    {
      name: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft",
      color: "gray",
      pdfFile: "CertificateOfCompletion_Microsoft Azure AI Essentials Professional Certificate by Microsoft and LinkedIn.pdf"
    },
    {
      name: "Ubuntu Linux Professional Certificate",
      issuer: "Canonical",
      color: "blue",
      pdfFile: "CertificateOfCompletion_Ubuntu Linux Professional Certificate by Canonical.pdf"
    },
    {
      name: "GitHub Professional Certificate",
      issuer: "GitHub",
      color: "gray",
      pdfFile: "CertificateOfCompletion_Career Essentials in GitHub Professional Certificate.pdf"
    },
    {
      name: "Python for Data Science & Analytics",
      issuer: "Coding Ninjas",
      color: "blue",
      pdfFile: "Coding Ninjas Python Certificate.pdf"
    },
    {
      name: "Java - Digi Saksham Program",
      issuer: "Ministry of Labour & Employment and Microsoft",
      color: "gray",
      pdfFile: "Microsoft Java Certificate.pdf"
    },
    {
      name: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      color: "blue",
      pdfFile: "Postman - Postman API Fundamentals Student Expert - 2025-04-08.png"
    }
  ];

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
        Certifications
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg mb-2 sm:mb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-medium text-gray-900">{cert.name}</p>
                <p className="text-xs text-gray-600">{cert.issuer}</p>
              </div>
              {cert.pdfFile && (
                <a
                  href={`/${encodeURIComponent(cert.pdfFile)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-900 text-white text-xs rounded hover:bg-blue-800 transition-colors flex items-center justify-center space-x-1 w-fit"
                >
                  <Download className="w-3 h-3" />
                  <span>View</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 