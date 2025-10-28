import React, { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
//import { motion } from "framer-motion";
import { Code, Cpu, Database, Download, Sparkles, GraduationCap, Briefcase, Zap, Brain, Server, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const stats = [
    { 
      number: "10+", 
      label: "Projects", 
      icon: Code,
      description: "Web & ML Solutions",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      number: "1+", 
      label: "Year Experience", 
      icon: Briefcase,
      description: "Professional Development",
      color: "from-purple-500 to-pink-500"
    },
    { 
      number: "3+", 
      label: "Companies", 
      icon: Server,
      description: "Tech Industry Experience",
      color: "from-orange-500 to-red-500"
    },
    { 
      number: "3.28", 
      label: "CGPA", 
      icon: GraduationCap,
      description: "Software Engineering",
      color: "from-green-500 to-emerald-500"
    },
  ];

  const skills = {
    "Frontend": [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 85 },
    ],
    "Backend": [
      { name: "Node.js", level: 82 },
      { name: "Python", level: 88 },
      { name: "Express.js", level: 80 },
      { name: "Flask", level: 75 },
    ],
    "Database & Tools": [
      { name: "MongoDB", level: 78 },
      { name: "MySQL", level: 85 },
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
    ],
    "AI/ML": [
      { name: "Machine Learning", level: 85 },
      { name: "Data Analysis", level: 82 },
      { name: "Python Libraries", level: 80 },
      { name: "AI Algorithms", level: 78 },
    ]
  };

  const education = [
    {
      degree: "BSc Software Engineering",
      institution: "The Islamia University of Bahawalpur",
      year: "2021 – 2025",
      grade: "3.28/4.00 CGPA",
      icon: GraduationCap,
      highlights: ["Dean's List", "Research Projects"]
    },
    {
      degree: "Data Science Certification",
      institution: "DataCamp & Online Platforms",
      year: "2023 – 2024",
      grade: "Certified",
      icon: Brain,
      highlights: ["ML Specialization", "Data Analysis"]
    },
    {
      degree: "Web Development",
      institution: "Code Lab & Udemy",
      year: "2022 – 2023",
      grade: "Completed",
      icon: Code,
      highlights: ["MERN Stack", "API Development"]
    },
  ];

  const experience = [
    {
      company: "Ezeelogic",
      role: "MERN Stack Developer",
      period: "2024 - Present",
      type: "Full Time",
      icon: Briefcase,
      achievements: ["Scalable web applications", "Team collaboration", "Client projects"]
    },
    {
      company: "Code Lab",
      role: "Web Development Internee",
      period: "4 Months",
      type: "Internship",
      icon: BookOpen,
      achievements: ["Frontend development", "Project deployment", "Code reviews"]
    },
    {
      company: "DHOPPERS",
      role: "Full Stack Developer",
      period: "3 Months",
      type: "Contract",
      icon: Server,
      achievements: ["Database design", "API integration", "Performance optimization"]
    }
  ];

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br  from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border mt-7 border-gray-100 dark:border-gray-700 mb-8"
          >
            <div className="w-2 h-2 bg-gradient-to-r  from-blue-500 to-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-semiboldn  text-gray-700 dark:text-gray-300">
              Professional Profile
            </span>
            <Sparkles size={16} className="text-purple-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Me</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineer</span> &{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">MERN Stack Developer</span> with expertise in{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-400">AI/ML</span> technologies.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </h3>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Left Column - Tabs */}
          <div className="xl:col-span-2 space-y-8">
            
            {/* Tabs Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "skills", label: "Skills", icon: Zap },
                  { id: "education", label: "Education", icon: GraduationCap },
                  { id: "experience", label: "Experience", icon: Briefcase },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <tab.icon size={20} />
                    <span className="hidden sm:block">{tab.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Tabs Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              
              {activeTab === "skills" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="space-y-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        {category === "AI/ML" ? <Brain size={20} className="text-purple-500" /> : 
                         category === "Frontend" ? <Code size={20} className="text-blue-500" /> :
                         category === "Backend" ? <Server size={20} className="text-green-500" /> :
                         <Database size={20} className="text-orange-500" />}
                        {category}
                      </h3>
                      <div className="space-y-3">
                        {skillList.map((skill, index) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                              <span className="font-semibold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "education" && (
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <item.icon size={20} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <h4 className="font-bold text-gray-900 dark:text-white">{item.degree}</h4>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                            {item.grade}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">{item.institution}</p>
                        <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">{item.year}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-6">
                  {experience.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <item.icon size={20} className="text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <h4 className="font-bold text-gray-900 dark:text-white">{item.role}</h4>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">{item.company}</p>
                        <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">{item.period}</p>
                        <div className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Profile Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-purple-500" />
                Professional Summary
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Fresh Software Engineering graduate with <strong className="text-gray-900 dark:text-white">3.28/4.00 CGPA</strong>, 
                  passionate about full stack development and AI technologies.
                </p>
                <p>
                  Currently working as a <strong className="text-gray-900 dark:text-white">MERN Stack Developer</strong> at Ezeelogic, 
                  with experience across multiple tech companies.
                </p>
                <p>
                  Strong expertise in <strong className="text-gray-900 dark:text-white">React, Node.js, Python, and Machine Learning</strong> 
                  with hands-on project experience.
                </p>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl"
            >
              <h3 className="text-xl font-bold mb-3">Ready to Collaborate?</h3>
              <p className="mb-6 opacity-90">
                Let's work together to bring your ideas to life with modern technology solutions.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  to="/projects"
                  className="w-full bg-white text-blue-600 text-center py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className="w-full bg-transparent border border-white text-white text-center py-3 px-6 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.a
              href="/Muhammad_Tauqeer_Sadiq(02076(CV)) (1).pdf"
              download="Muhammad_Tauqeer_Sadiq_Resume.pdf"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Download size={20} className="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Download Resume</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">PDF - Updated portfolio</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}



