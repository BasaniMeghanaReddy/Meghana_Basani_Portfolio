import React from "react";

export default function Leadership() {
  const leadershipRoles = [
    {
      title: "Teaching Assistant",
      description: "Led Physics and Astronomy lab sessions, delivering instruction and supporting students in experiments."
    },
    {
      title: "Research Assistant",
      description: "Applied ML techniques in a research project in the ECE department."
    },
    {
      title: "Member - Techmaniacs",
      description: "Organized various events and technical activities of the technical club of JNTU - Techmaniacs."
    },

  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Leadership
      </h2>
      <div className="space-y-4">
        {leadershipRoles.map((role, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-gray-900 mb-2">{role.title}</h3>
            <p className="text-xs text-gray-700 text-justify">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 