import React from "react";
import { Award, ExternalLink } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "2nd Place - North Dakota 2026 Ag Tech Hackathon",
      organization: "North Dakota State University (NDSU)",
      date: "February 2026",
      description:
        "Awarded 2nd place at the North Dakota 2026 Ag Tech Hackathon, sponsored by Bayer Crop Sciences and NSF AgTech Engine in North Dakota. Collaborated with a multidisciplinary team to build an AI-driven solution addressing real agricultural challenges within a 48-hour competition, recognized for technical innovation, practical impact, and a strong data-driven presentation.",
      image: "/Hackathon.heic.png",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
        Achievements
      </h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                <Award className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {achievement.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-900 mt-1">
                      {achievement.organization}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {achievement.date}
                    </p>
                  </div>
                  <a
                    href={achievement.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-3 py-2 text-xs sm:text-sm font-medium text-white hover:bg-blue-800 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View Photo</span>
                  </a>
                </div>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
