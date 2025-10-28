import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
//import { motion } from "framer-motion";
import { Code, Cpu, Database, Sparkles, GraduationCap, Briefcase, Award, MapPin } from "lucide-react";
import profileImage from "../assets/Engr-Tauqeer.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white px-4 sm:px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden">

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500 rounded-full blur-2xl opacity-15 animate-bounce"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto relative z-10 w-full">

        {/* Left Section - Enhanced Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center md:text-left"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center md:justify-start gap-3 mb-6"
          >
            <div className="flex items-center gap-2 bg-green-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium text-sm">Currently Working at Ezeelogic</span>
              <MapPin size={14} className="text-green-400" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
                Muhammad Tauqeer Sadiq
              </span>
            </h1>
          </motion.div>

          {/* Professional Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light"
          >
            Full Stack Developer &{" "}
            <span className="text-indigo-400 font-semibold">Software Engineer</span> specializing in{" "}
            <span className="text-purple-400 font-semibold">MERN Stack</span> with hands-on experience in{" "}
            <span className="text-pink-400 font-semibold">Machine Learning</span> and AI-powered applications.
          </motion.p>

          {/* Enhanced Qualifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 py-6"
          >
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <GraduationCap size={18} className="text-indigo-400" />
              <span className="font-medium">BS Software Engineering</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <Award size={18} className="text-purple-400" />
              <span className="font-medium">Certified MERN Developer</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
              <Briefcase size={18} className="text-green-400" />
              <span className="font-medium">Professional Experience</span>
            </div>
          </motion.div>

          {/* Tech Stack with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4 py-4"
          >
            <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Tech Stack</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                { icon: Code, name: "React.js", color: "text-indigo-400" },
                { icon: Code, name: "Node.js", color: "text-green-400" },
                { icon: Database, name: "MongoDB", color: "text-emerald-400" },
                { icon: Cpu, name: "Python", color: "text-yellow-400" },
                { icon: Cpu, name: "Express.js", color: "text-gray-400" },
                { icon: Database, name: "MySQL", color: "text-blue-400" }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 bg-gray-800/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-indigo-400 transition-all duration-300 group"
                >
                  <tech.icon size={16} className={`${tech.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/projects"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold shadow-2xl flex items-center justify-center gap-3 transition-all duration-300 group"
              >
                <Sparkles size={20} className="group-hover:scale-110 transition-transform" />
                <span>View My Work</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-gray-600 hover:border-indigo-400 rounded-xl font-semibold hover:text-indigo-400 flex items-center justify-center gap-3 transition-all duration-300 group backdrop-blur-sm"
              >
                <span>Get In Touch</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section - Enhanced Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* Animated gradient border */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.02, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -inset-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-70 group-hover:opacity-100 transition duration-500 blur-lg"
            />

            {/* Main image container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={profileImage}
                alt="Muhammad Tauqeer Sadiq - Software Engineer"
                className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-fit rounded-full border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-500 backdrop-blur-sm"
              />

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-indigo-600 p-3 rounded-full shadow-2xl"
              >
                <Code size={20} />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-purple-600 p-3 rounded-full shadow-2xl"
              >
                <Cpu size={20} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-sm font-light">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-indigo-400/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-indigo-400 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}