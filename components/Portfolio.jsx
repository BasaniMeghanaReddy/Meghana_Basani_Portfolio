'use client';

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import ProfileCard from "./ProfileCard";
import Publications from "./Publications";
import Certifications from "./Certifications";
import Leadership from "./Leadership";
import Navigation from "./Navigation";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <ProfileCard />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Section 1: Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="education"
            className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Education
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <img 
                    src="/North_Dakota_State_Bison_logo.svg" 
                    alt="NDSU Logo" 
                    className="w-16 h-16 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">North Dakota State University | Fargo, USA</h3>
                    <p className="text-gray-700 text-sm">Master's in Computer Science | Aug '24 - May '26</p>
                    <p className="text-blue-900 text-sm font-medium">GPA: 3.75/4.00</p>
                    <div className="mt-2">
                      <p className="text-gray-600 text-xs font-medium mb-1">Relevant Courses:</p>
                      <p className="text-gray-600 text-xs text-justify">Machine Learning, Software Engineering, Database Systems, Web Development, Data Structures & Algorithms</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <img 
                    src="/JNTU_Hyderabad_logo.png" 
                    alt="JNTU Hyderabad Logo" 
                    className="w-16 h-16 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Jawaharlal Nehru Technological University | Hyderabad, INDIA</h3>
                    <p className="text-gray-700 text-sm">Bachelor's of Technology in Computer Science | Aug '19 - May '23</p>
                    <p className="text-blue-900 text-sm font-medium">GPA: 8.0/10.00</p>
                    <div className="mt-2">
                      <p className="text-gray-600 text-xs font-medium mb-1">Relevant Courses:</p>
                      <p className="text-gray-600 text-xs text-justify">Data Structures, Object-Oriented Programming, Computer Networks, Operating Systems, Software Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <img 
                    src="/narayana_junior_college_logo.jpeg" 
                    alt="Narayana Junior College Logo" 
                    className="w-16 h-16 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Narayana Junior College | Hyderabad, INDIA</h3>
                    <p className="text-gray-700 text-sm">Intermediate (12th Grade) | Jun '17 - Apr '19</p>
                    <p className="text-blue-900 text-sm font-medium">Grade: 932/1000</p>
                    <div className="mt-2">
                      <p className="text-gray-600 text-xs font-medium mb-1">Stream:</p>
                      <p className="text-gray-600 text-xs text-justify">Science (Mathematics, Physics, Chemistry)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <img 
                    src="/priyankahighschoollogo.png" 
                    alt="Priyanka High School Logo" 
                    className="w-16 h-16 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Priyanka High School | Hyderabad, INDIA</h3>
                    <p className="text-gray-700 text-sm">SSC (10th Grade) | 2017</p>
                    <p className="text-blue-900 text-sm font-medium">Grade: 9.5/10</p>
                    <div className="mt-2">
                      <p className="text-gray-600 text-xs font-medium mb-1">Education Level:</p>
                      <p className="text-gray-600 text-xs text-justify">Secondary School Certificate (SSC)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 1: Skills */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="skills"
          >
            <Skills />
          </motion.section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
          {/* Section 2: Work Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            id="experience"
            className="lg:col-span-3"
          >
            <Experience />
          </motion.section>

          {/* Section 2: Certifications & Leadership */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Certifications />
            <Leadership />
          </motion.section>
        </div>

        {/* Section 3: Projects */}
        <div className="mt-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            id="projects"
          >
            <Projects />
          </motion.section>
        </div>

        {/* Section 4: Publications */}
        <div className="mt-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            id="publications"
          >
            <Publications />
          </motion.section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
          {/* Section 5: Updates */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Recent Updates
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <p className="text-gray-900 text-sm font-medium">Software Developer Intern @NDSU AGDA</p>
                <p className="text-gray-600 text-xs">January 2024</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <p className="text-gray-900 text-sm font-medium">Started MS in Computer Science at NDSU</p>
                <p className="text-gray-600 text-xs">August 2024</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <p className="text-gray-900 text-sm font-medium">Graduated with B.Tech in Computer Science</p>
                <p className="text-gray-600 text-xs">May 2023</p>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            id="get-in-touch"
            className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Get In Touch
            </h2>
            <div className="space-y-4">
              <a 
                href="mailto:meghana.basani@ndsu.edu"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">meghana.basani@ndsu.edu</span>
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-900 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-900 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <div className="mt-6 space-y-3">
                <button
                  className="w-full flex items-center justify-center space-x-2 bg-blue-900 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
                  onClick={() => window.open('/Meghana%20Basani%20Resume.pdf', '_blank')}
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
                <a
                  href="/Meghana%20Basani%20Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors border border-gray-300"
                >
                  <Download className="w-4 h-4" />
                  <span>View Resume Online</span>
                </a>

              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
