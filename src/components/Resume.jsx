import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Calendar, Award, Book, Code, Cpu, Database, ExternalLink } from 'lucide-react';

export default function Resume() {
  const skills = {
    "Frontend": ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
    "Backend": ["Flask", "Python", "Node.js", "Express.js"],
    "Programming Languages": ["Python", "JavaScript"],
    "AI/ML Libraries": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    "Database": ["MySQL", "MongoDB"],
    "Tools & DevOps": ["Git", "GitHub", "Docker", "VS Code", "Jupyter Notebook", "Postman"]
  };

  const experience = [
    {
      role: "Joiner Developer (MERN Stack)",
      company: "Ezeelogic",
      period: "Current",
      description: "Working as a MERN Stack Developer, building scalable web applications and contributing to full-stack development projects."
    },
    {
      role: "Internee", 
      company: "Code Lab Tech School & IT Solution",
      period: "June 2023 – Oct 2023",
      description: "Designed responsive websites using HTML, CSS, and JavaScript. Coordinated with teams to manage tasks and timelines, practiced real-world web development skills."
    },
    {
      role: "MERN Stack Developer",
      company: "DHOPPERS",
      period: "3 Months", 
      description: "Gained hands-on experience in MERN stack development, working on real-world projects and enhancing technical skills."
    }
  ];

  const education = [
    {
      degree: "Bachelor's of Science in Software Engineering",
      institution: "The Islamia University of Bahawalpur",
      year: "2021 – 2025",
      grade: "3.28/4.00 CGPA"
    },
    {
      degree: "Python Certification",
      institution: "DataCamp",
      year: "May 2025", 
      grade: "Certified"
    },
    {
      degree: "HTML & CSS Certification",
      institution: "Code Lab",
      year: "Dec 2023",
      grade: "Completed"
    },
    {
      degree: "JavaScript Certification",
      institution: "Code Lab",
      year: "Dec 2023",
      grade: "Completed"
    }
  ];

  const certifications = [
    "HTML & CSS – Code Lab (Dec 2023)",
    "JavaScript – Code Lab (Dec 2023)", 
    "Python – DataCamp (May 2025)",
    "MERN Stack Development – DHOPPERS (3 Months)"
  ];

  const projects = [
    "Final Year Project: E-Commerce Website with AI Recommendation System",
    "Songs Prediction with Recommendation Engine", 
    "Weather & COVID-19 Data Analysis",
    "Cartoonifier Python Project",
    "Product Recommendation System",
    "Salary Management System"
  ];

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 mt-8 sm:px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4 sm:mb-6"
          >
            <Award size={18} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              Professional Resume
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent px-4">
            My Resume
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Software Engineering Graduate | MERN Stack Developer | AI/ML Enthusiast
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Left Column - Personal Info & Skills */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            
            {/* Personal Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Code size={24} className="text-white sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                  Muhammad Tauqeer Sadiq
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
                  Software Engineer & MERN Stack Developer
                </p>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <a href="mailto:chtouqeerchtouqeermayo@gmail.com" className="block">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                    <Mail size={16} className="text-indigo-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm truncate">chtouqeerchtouqeermayo@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+923017511843" className="block">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                    <Phone size={16} className="text-indigo-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">+92 301 7511843</span>
                  </div>
                </a>
                <a href="https://maps.google.com/?q=F69R+4C2 Westwood Colony Lahore Pakistan" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                    <MapPin size={16} className="text-indigo-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Westwood Colony, Lahore</span>
                  </div>
                </a>
              </div>

              {/* Download Button */}
              <motion.a
                href="/Muhammad_Tauqeer_Sadiq(02076(CV)) (1).pdf"
                download="Muhammad_Tauqeer_Sadiq_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 sm:mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 text-sm sm:text-base"
              >
                <Download size={16} />
                Download PDF Version
              </motion.a>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Code size={18} className="text-indigo-500" />
                Technical Skills
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 text-xs sm:text-sm">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium border border-indigo-200 dark:border-indigo-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Award size={18} className="text-green-500" />
                Certifications
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="flex-1">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Cpu size={20} className="text-indigo-500" />
                Professional Summary
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Fresh Software Engineering graduate from The Islamia University of Bahawalpur with <strong>3.28/4.00 CGPA</strong>, 
                passionate about full stack development, AI, and machine learning. Currently working as a MERN Stack 
                Developer at Ezeelogic. Seeking to apply technical skills in React, Node.js, Python, and machine learning 
                to contribute to real-world projects and grow as a developer in a professional environment.
              </p>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Award size={20} className="text-indigo-500" />
                Work Experience
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="border-l-2 sm:border-l-4 border-indigo-400 pl-4 sm:pl-6 ml-2 relative"
                  >
                    <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full"></div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white">
                      {exp.role}
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-xs sm:text-sm">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-2 sm:mb-3 flex items-center gap-1">
                      <Calendar size={10} />
                      {exp.period}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Book size={20} className="text-green-500" />
                Education & Qualifications
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-l-2 sm:border-l-4 border-green-400 pl-4 sm:pl-6 ml-2 relative"
                  >
                    <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full"></div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 font-semibold text-xs sm:text-sm">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-1 flex items-center gap-1">
                      <Calendar size={10} />
                      {edu.year}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
                      {edu.grade}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Projects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Database size={20} className="text-purple-500" />
                Key Projects
              </h3>
              
              <div className="space-y-2 sm:space-y-3">
                {projects.map((project, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex-1">
                      {project}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}