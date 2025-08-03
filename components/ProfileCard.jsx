import React from 'react';
import { motion } from 'framer-motion';

export default function ProfileCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              src="/Profilephoto.jpg"
              alt="Meghana Basani"
              className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full border-4 border-blue-100 shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-900 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meghana Basani
          </h1>
          <div className="text-gray-700 leading-relaxed max-w-3xl text-justify">
            <p>
              I'm a Computer Science graduate student at North Dakota State University with a strong academic and professional background in software development, applied machine learning, and high-performance computing. I've contributed to impactful projects at AgDA, CCAST, GEP Worldwide, and DXC Technology—building scalable APIs, automating pipelines, containerizing tools for HPC environments, and developing full-stack web solutions using technologies like PostgreSQL, .NET, Angular, Docker, and Azure. Driven by curiosity and a passion for problem-solving, I continuously strive to apply innovative, user-centered solutions in both research and industry settings.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 