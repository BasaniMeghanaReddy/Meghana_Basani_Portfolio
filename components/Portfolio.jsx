'use client';

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 bg-white shadow z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Meghana Basani</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-10 py-10">
        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h2 className="text-4xl font-extrabold">Hi, I'm Meghana 👋</h2>
          <p className="text-xl mt-4">MS in Computer Science | Software Developer Intern @NDSU AGDA</p>
          <p className="mt-2">📧 meghana.basani@ndsu.edu | 📞 701-639-3559</p>

          {/* Social Links */}
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://github.com/BasaniMeghanaReddy" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-blue-600" />
            </a>
            <a href="https://www.linkedin.com/in/basani-meghana/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-600" />
            </a>
          </div>
        </motion.div>

        {/* About Me */}
        <section id="about">
          <div className="rounded-xl shadow p-6 bg-white">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              I’m a Computer Science graduate student at NDSU with experience in full-stack development,
              cloud infrastructure, and ML. Passionate about building scalable systems and solving
              real-world problems through software.
            </p>
          </div>
        </section>

        {/* Experience, Projects, Skills as separate components */}
        <Experience />
        <Projects />
        <Skills />

        {/* Contact */}
        <section id="contact">
          <div className="rounded-xl shadow p-6 bg-white">
            <h2 className="text-2xl font-semibold mb-2">Leadership & Contact</h2>
            <p>TA in Physics & Astronomy | ML Research Assistant | JNTU Tech Club Member</p>
            <p className="mt-2">For collaborations or opportunities, reach out at <strong>meghana.basani@ndsu.edu</strong>.</p>
            <button
               className="mt-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
               onClick={() => window.open('/Meghana_Basani_Resume.pdf', '_blank')}
            >
             Download Resume
            </button>

          </div>
        </section>
      </main>
    </div>
  );
}
