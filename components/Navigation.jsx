import React from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/portfoliologo.png"
              alt="Portfolio Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-900">Meghana Basani</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-900 transition-colors">About</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-900 transition-colors">Experience</a>
            <a href="#publications" className="text-gray-600 hover:text-blue-900 transition-colors">Publications</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-900 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-900 transition-colors">Skills</a>
            <a href="#education" className="text-gray-600 hover:text-blue-900 transition-colors">Education</a>
          </div>

          {/* Social Links and Contact */}
          <div className="flex items-center space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900 transition-colors">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900 transition-colors">GitHub</a>
            <a href="#get-in-touch" className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 