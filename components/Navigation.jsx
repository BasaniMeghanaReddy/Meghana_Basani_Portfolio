import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/portfoliologo.png"
              alt="Portfolio Logo"
              className="w-8 h-8"
            />
            <span className="text-lg sm:text-xl font-bold text-gray-900">Meghana Basani</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-900 transition-colors">About</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-900 transition-colors">Experience</a>
            <a href="#publications" className="text-gray-600 hover:text-blue-900 transition-colors">Publications</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-900 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-900 transition-colors">Skills</a>
            <a href="#education" className="text-gray-600 hover:text-blue-900 transition-colors">Education</a>
          </div>

          {/* Desktop Social Links and Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://www.linkedin.com/in/basani-meghana/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900 transition-colors">LinkedIn</a>
            <a href="https://github.com/BasaniMeghanaReddy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900 transition-colors">GitHub</a>
            <a href="#get-in-touch" className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#about" className="text-gray-600 hover:text-blue-900 transition-colors px-2 py-1">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-900 transition-colors px-2 py-1">Experience</a>
              <a href="#publications" className="text-gray-600 hover:text-blue-900 transition-colors px-2 py-1">Publications</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-900 transition-colors px-2 py-1">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-900 transition-colors px-2 py-1">Skills</a>
              <a href="#education" className="text-gray-600 hover:text-blue-900 transition-colors px-2 py-1">Education</a>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                <a href="https://www.linkedin.com/in/basani-meghana/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900 transition-colors px-2 py-1">LinkedIn</a>
                <a href="https://github.com/BasaniMeghanaReddy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-900 transition-colors px-2 py-1">GitHub</a>
                <a href="#get-in-touch" className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors text-center">Contact</a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
} 