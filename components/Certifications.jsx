import React from "react";

export default function Certifications() {
  const certifications = [
    {
      name: "Docker Foundations Professional Certificate",
      issuer: "Docker",
      color: "blue"
    },
    {
      name: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft",
      color: "gray"
    },
    {
      name: "Ubuntu Linux Professional Certificate",
      issuer: "Canonical",
      color: "blue"
    },
    {
      name: "GitHub Professional Certificate",
      issuer: "GitHub",
      color: "gray"
    },
    {
      name: "Python for Data Science & Analytics",
      issuer: "Coding Ninjas",
      color: "blue"
    },
    {
      name: "Java - Digi Saksham Program",
      issuer: "Ministry of Labour & Employment and Microsoft",
      color: "gray"
    },
    {
      name: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      color: "blue"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Certifications
      </h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg mb-3">
            <p className="text-sm font-medium text-gray-900">{cert.name}</p>
            <p className="text-xs text-gray-600">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 