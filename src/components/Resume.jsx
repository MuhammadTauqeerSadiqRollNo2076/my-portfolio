import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Calendar, Award, Book, Code, Cpu, Database, ExternalLink } from 'lucide-react';

export default function Resume() {
  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5/CSS3", "Redux"],
    "Backend": ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Firebase"],
    "AI/ML": ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
    "Tools": ["Git", "Docker", "AWS", "VS Code", "Figma", "Postman", "Jira"]
  };

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Developed and maintained 15+ web applications using MERN stack, improved performance by 40%, and led a team of 3 developers."
    },
    {
      role: "Machine Learning Intern", 
      company: "AI Innovations Lab",
      period: "2021 - 2022",
      description: "Built and deployed machine learning models for predictive analytics, achieving 92% accuracy in customer behavior prediction."
    },
    {
      role: "Frontend Developer",
      company: "Digital Creations",
      period: "2020 - 2021", 
      description: "Created responsive web interfaces and collaborated with UX designers to implement user-friendly designs."
    }
  ];

  const education = [
    {
      degree: "BSc Software Engineering",
      institution: "University of Engineering & Technology",
      year: "2020-2024",
      grade: "3.8/4.0 CGPA"
    },
    {
      degree: "Machine Learning Specialization",
      institution: "DeepLearning.AI",
      year: "2023", 
      grade: "Certified with Honors"
    },
    {
      degree: "Full Stack Web Development",
      institution: "Meta Professional Certificate",
      year: "2022",
      grade: "Completed with Excellence"
    }
  ];

  const certifications = [
    "AWS Certified Developer Associate",
    "Google Cloud Professional Developer", 
    "TensorFlow Developer Certificate",
    "MongoDB University Certification"
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6"
          >
            <Award size={20} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              Professional Resume
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Resume
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Detailed overview of my professional journey, skills, and accomplishments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Personal Info & Skills */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Personal Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={32} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Engr. Tauqeer Sadiq
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  ML Engineer & Full Stack Developer
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <Mail size={18} className="text-indigo-500 flex-shrink-0" />
                  <span className="text-sm">tauqeersadiq@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <Phone size={18} className="text-indigo-500 flex-shrink-0" />
                  <span className="text-sm">+92 XXX XXXXXXX</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <MapPin size={18} className="text-indigo-500 flex-shrink-0" />
                  <span className="text-sm">Pakistan</span>
                </div>
              </div>

              {/* Download Button */}
              <motion.a
                href="/resume.pdf"
                download="Engr_Tauqeer_Sadiq_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <Download size={18} />
                Download PDF Version
              </motion.a>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Code size={20} className="text-indigo-500" />
                Technical Skills
              </h3>
              
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-sm">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium border border-indigo-200 dark:border-indigo-700"
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
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Award size={20} className="text-green-500" />
                Certifications
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {cert}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Cpu size={24} className="text-indigo-500" />
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate Full Stack Developer and Machine Learning Engineer with 3+ years of experience 
                in creating innovative web solutions. Specialized in React, Node.js, and Python with 
                expertise in building scalable applications and implementing machine learning models. 
                Strong problem-solving skills and a commitment to writing clean, efficient code.
              </p>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Award size={24} className="text-indigo-500" />
                Work Experience
              </h3>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="border-l-4 border-indigo-400 pl-6 ml-2 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-400 rounded-full"></div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                      {exp.role}
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Book size={24} className="text-green-500" />
                Education & Qualifications
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-l-4 border-green-400 pl-6 ml-2 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full"></div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 font-semibold text-sm">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-1 flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.year}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                      {edu.grade}
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