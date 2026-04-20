'use client';

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, MapPin, Phone, Send } from "lucide-react";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import ProfileCard from "./ProfileCard";
import Publications from "./Publications";
import Certifications from "./Certifications";
import Leadership from "./Leadership";
import Navigation from "./Navigation";
import Achievements from "./Achievements";

export default function Portfolio() {
  const handleContactSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "Portfolio Inquiry";
    const message = formData.get("message")?.toString().trim() || "";

    const body = [
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:basanimeghana916@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

             {/* Profile Section */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Section 1: Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="education"
            className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
              Education
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <img 
                    src="/North_Dakota_State_Bison_logo.svg" 
                    alt="NDSU Logo" 
                    className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mx-auto sm:mx-0"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">North Dakota State University | Fargo, USA</h3>
                    <p className="text-gray-700 text-xs sm:text-sm">Master's in Computer Science | Aug '24 - May '26</p>
                    <p className="text-blue-900 text-xs sm:text-sm font-medium">GPA: 3.75/4.00</p>
                    <div className="mt-2">
                      <p className="text-gray-600 text-xs font-medium mb-1">Relevant Courses:</p>
                      <p className="text-gray-600 text-xs text-justify">Artificial Intelligence, Computational Intelligence, Software Testing, Machine Learning, Software Engineering, Database Systems, Web Development, Data Structures & Algorithms</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <img 
                    src="/JNTU_Hyderabad_logo.png" 
                    alt="JNTU Hyderabad Logo" 
                    className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mx-auto sm:mx-0"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Jawaharlal Nehru Technological University | Hyderabad, INDIA</h3>
                    <p className="text-gray-700 text-xs sm:text-sm">Bachelor's of Technology in Computer Science | Aug '19 - May '23</p>
                    <p className="text-blue-900 text-xs sm:text-sm font-medium">GPA: 8.0/10.00</p>
                    <div className="mt-2">
                      <p className="text-gray-600 text-xs font-medium mb-1">Relevant Courses:</p>
                      <p className="text-gray-600 text-xs text-justify">Data Structures, Object-Oriented Programming, Computer Networks, Operating Systems, Software Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <img 
                    src="/narayana_junior_college_logo.jpeg" 
                    alt="Narayana Junior College Logo" 
                    className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mx-auto sm:mx-0"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Narayana Junior College | Hyderabad, INDIA</h3>
                    <p className="text-gray-700 text-xs sm:text-sm">Intermediate (12th Grade) | Jun '17 - Apr '19</p>
                    <p className="text-blue-900 text-xs sm:text-sm font-medium">Grade: 932/1000</p>
                    <div className="mt-2">
                      <p className="text-gray-600 text-xs font-medium mb-1">Stream:</p>
                      <p className="text-gray-600 text-xs text-justify">Science (Mathematics, Physics, Chemistry)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <img 
                    src="/priyankahighschoollogo.png" 
                    alt="Priyanka High School Logo" 
                    className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mx-auto sm:mx-0"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Priyanka High School | Hyderabad, INDIA</h3>
                    <p className="text-gray-700 text-xs sm:text-sm">SSC (10th Grade) | 2017</p>
                    <p className="text-blue-900 text-xs sm:text-sm font-medium">Grade: 9.5/10</p>
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

                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 mt-6 lg:mt-8">
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
         <div className="mt-6 lg:mt-8">
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
        <div className="mt-6 lg:mt-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            id="publications"
          >
            <Publications />
          </motion.section>
        </div>

        <div className="mt-6 lg:mt-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            id="achievements"
          >
            <Achievements />
          </motion.section>
        </div>

        <div className="mt-6 lg:mt-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            id="get-in-touch"
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-8 sm:mb-10">
              Get In Touch
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Let&apos;s Connect</h3>
                <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-xl">
                  I&apos;m always interested in new opportunities, collaborative projects, and conversations around software engineering, AI, and product development. Feel free to reach out.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Email</p>
                      <a href="mailto:basanimeghana916@gmail.com" className="text-gray-700 hover:text-blue-900 transition-colors no-underline">
                        basanimeghana916@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-700">+1 (701) 639-3559</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Open to Relocation</p>
                      <p className="text-gray-700">Available for relocation opportunities across the United States</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/basani-meghana/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-900 transition-colors no-underline break-all"
                      >
                        linkedin.com/in/basani-meghana
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors border border-gray-300"
                      onClick={() => window.open('/MeghanaBasani-Resume.pdf', '_blank')}
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.section>
        </div>

      </div>
    </div>
  );
}
