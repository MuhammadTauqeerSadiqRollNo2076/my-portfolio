// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Code, Cpu, Database, Globe, Award, Rocket, Download, Sparkles } from 'lucide-react';

// export default function About() {
//   const [activeTab, setActiveTab] = useState("skills");

//   const stats = [
//     { number: "50+", label: "Projects Completed", icon: Rocket },
//     { number: "3+", label: "Years Experience", icon: Award },
//     { number: "30+", label: "Happy Clients", icon: Globe },
//     { number: "15+", label: "Technologies", icon: Code }
//   ];

//   const skills = {
//     "Frontend": [
//       { name: "React", level: 90 },
//       { name: "Next.js", level: 85 },
//       { name: "TypeScript", level: 80 },
//       { name: "Tailwind CSS", level: 95 }
//     ],
//     "Backend": [
//       { name: "Node.js", level: 88 },
//       { name: "Express.js", level: 85 },
//       { name: "MongoDB", level: 82 },
//       { name: "PostgreSQL", level: 78 }
//     ],
//     "AI/ML": [
//       { name: "Python", level: 85 },
//       { name: "TensorFlow", level: 75 },
//       { name: "Scikit-learn", level: 80 },
//       { name: "OpenCV", level: 70 }
//     ]
//   };

//   const education = [
//     { degree: "BSc Software Engineering", institution: "University of Engineering", year: "2020-2024" },
//     { degree: "Machine Learning Specialization", institution: "DeepLearning.AI", year: "2023" },
//     { degree: "Full Stack Development", institution: "Meta", year: "2022" }
//   ];

//   return (
//     <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-500">
//       <div className="container mx-auto px-6 md:px-12 lg:px-16">

//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6"
//           >
//             <Sparkles size={20} className="text-indigo-600 dark:text-indigo-400" />
//             <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
//               About Me
//             </span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
//           >
//             Crafting Digital Excellence
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
//           >
//             I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Engr. Tauqeer Sadiq</span>, a passionate{" "}
//             <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Full-Stack Developer
//             </span>{" "}
//             and{" "}
//             <span className="font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//               Machine Learning Engineer
//             </span>.
//             I specialize in creating intelligent, scalable web applications that blend cutting-edge technology
//             with exceptional user experiences.
//           </motion.p>
//         </motion.div>

//         {/* Stats Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7 }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//         >
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.8 + index * 0.1 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 text-center backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="flex justify-center mb-3">
//                   <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
//                     <Icon size={24} className="text-white" />
//                   </div>
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
//                   {stat.number}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 font-medium">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">

//           {/* Left Column - Tabs Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.9 }}
//             className="space-y-6"
//           >
//             {/* Tabs Navigation */}
//             <div className="flex gap-2 bg-white/80 dark:bg-gray-800/80 rounded-2xl p-2 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
//               {[
//                 { id: "skills", label: "Skills", icon: Code },
//                 { id: "education", label: "Education", icon: Award },
//                 { id: "story", label: "My Story", icon: Rocket }
//               ].map((tab) => {
//                 const Icon = tab.icon;
//                 return (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`flex items-center gap-2 flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab.id
//                       ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
//                       : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
//                       }`}
//                   >
//                     <Icon size={20} />
//                     {tab.label}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Tabs Content */}
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
//             >
//               {activeTab === "skills" && (
//                 <div className="space-y-6">
//                   {Object.entries(skills).map(([category, skillList]) => (
//                     <div key={category}>
//                       <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
//                         {category === "AI/ML" ? <Cpu size={20} /> : <Database size={20} />}
//                         {category}
//                       </h4>
//                       <div className="space-y-3">
//                         {skillList.map((skill) => (
//                           <div key={skill.name} className="space-y-2">
//                             <div className="flex justify-between text-sm">
//                               <span className="text-gray-700 dark:text-gray-300 font-medium">
//                                 {skill.name}
//                               </span>
//                               <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
//                                 {skill.level}%
//                               </span>
//                             </div>
//                             <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                               <motion.div
//                                 initial={{ width: 0 }}
//                                 animate={{ width: `${skill.level}%` }}
//                                 transition={{ duration: 1, delay: 0.2 }}
//                                 className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
//                               />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {activeTab === "education" && (
//                 <div className="space-y-4">
//                   {education.map((edu, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
//                     >
//                       <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
//                         <Award size={20} className="text-indigo-600 dark:text-indigo-400" />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-gray-800 dark:text-white">
//                           {edu.degree}
//                         </h4>
//                         <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
//                         <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
//                           {edu.year}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}

//               {activeTab === "story" && (
//                 <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
//                   <p>
//                     My journey in technology began with a curiosity about how things work behind the scenes.
//                     This passion led me to pursue Software Engineering and dive deep into both web development
//                     and artificial intelligence.
//                   </p>
//                   <p>
//                     I believe in creating solutions that not only look beautiful but also solve real-world
//                     problems efficiently. My expertise spans across the entire development stack, from
//                     crafting pixel-perfect UIs to building robust backend systems and implementing
//                     intelligent machine learning models.
//                   </p>
//                   <p>
//                     When I'm not coding, you'll find me exploring new technologies, contributing to
//                     open-source projects, or sharing knowledge with the developer community.
//                   </p>
//                 </div>
//               )}
//             </motion.div>
//           </motion.div>

//           {/* Right Column - CTA & Additional Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 1.1 }}
//             className="space-y-6"
//           >
//             {/* Call to Action */}
//             <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
//               <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
//               <p className="mb-6 opacity-90">
//                 Let's collaborate to bring your ideas to life with cutting-edge technology 
//                 and innovative solutions.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <motion.a
//                   href="/projects"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex-1 bg-white text-indigo-600 text-center py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
//                 >
//                   View My Work
//                 </motion.a>
//                 <motion.a
//                   href="/contact"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex-1 bg-transparent border-2 border-white text-white text-center py-3 px-6 rounded-xl font-semibold hover:bg-white/10 transition-colors"
//                 >
//                   Get In Touch
//                 </motion.a>
//               </div>
//             </div>


//             {/* Download Resume */}
//             <motion.a
//               href="/resume.pdf"
//               download
//               whileHover={{ scale: 1.02 }}
//               className="flex items-center justify-center gap-3 bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
//             >
//               <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
//                 <Download size={24} className="text-green-600 dark:text-green-400" />
//               </div>
//               <div className="flex-1 text-left">
//                 <h4 className="font-bold text-gray-800 dark:text-white">Download Resume</h4>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">PDF - Updated recently</p>
//               </div>
//             </motion.a>


//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Code, Cpu, Database, Globe, Award, Rocket, Download, Sparkles } from "lucide-react";

// export default function About() {
//   const [activeTab, setActiveTab] = useState("skills");

//   const stats = [
//     { number: "50+", label: "Projects Completed", icon: Rocket },
//     { number: "3+", label: "Years Experience", icon: Award },
//     { number: "30+", label: "Happy Clients", icon: Globe },
//     { number: "15+", label: "Technologies", icon: Code },
//   ];

//   const skills = {
//     Frontend: [
//       { name: "React", level: 90 },
//       { name: "Next.js", level: 85 },
//       { name: "TypeScript", level: 80 },
//       { name: "Tailwind CSS", level: 95 },
//     ],
//     Backend: [
//       { name: "Node.js", level: 88 },
//       { name: "Express.js", level: 85 },
//       { name: "MongoDB", level: 82 },
//       { name: "PostgreSQL", level: 78 },
//     ],
//     "AI/ML": [
//       { name: "Python", level: 85 },
//       { name: "TensorFlow", level: 75 },
//       { name: "Scikit-learn", level: 80 },
//       { name: "OpenCV", level: 70 },
//     ],
//   };

//   const education = [
//     { degree: "BS Software Engineering", institution: "University of Engineering", year: "2020-2024" },
//     { degree: "Machine Learning Specialization", institution: "DeepLearning.AI", year: "2023" },
//     { degree: "Full Stack Development", institution: "Meta", year: "2022" },
//   ];

//   return (
//     <section className="min-h-screen py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-500">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             className="inline-flex items-center gap-2 px-3 mt-5 sm:px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-5"
//           >
//             <Sparkles size={18} className="text-indigo-600 dark:text-indigo-400 " />
//             <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 ">About Me</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
//           >
//             Crafting Digital Excellence
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
//           >
//             I'm{" "}
//             <span className="font-semibold text-indigo-600 dark:text-indigo-400">Engr. Tauqeer Sadiq</span>, a passionate{" "}
//             <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Full-Stack Developer
//             </span>{" "}
//             and{" "}
//             <span className="font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//               Machine Learning Engineer
//             </span>
//             . I specialize in building intelligent, scalable web applications that blend modern technology
//             with world-class user experiences.
//           </motion.p>
//         </motion.div>

//         {/* Stats Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7 }}
//           className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
//         >
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.8 + index * 0.1 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="flex justify-center mb-2 sm:mb-3">
//                   <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
//                     <Icon size={22} className="text-white" />
//                   </div>
//                 </div>
//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">
//                   {stat.number}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">

//           {/* Left Column */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.9 }}
//             className="space-y-6"
//           >
//             {/* Tabs */}
//             <div className="flex flex-wrap gap-2 bg-white/80 dark:bg-gray-800/80 rounded-2xl p-2 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
//               {[
//                 { id: "skills", label: "Skills", icon: Code },
//                 { id: "education", label: "Education", icon: Award },
//                 { id: "story", label: "My Story", icon: Rocket },
//               ].map((tab) => {
//                 const Icon = tab.icon;
//                 return (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`flex items-center justify-center gap-2 flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
//                       activeTab === tab.id
//                         ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
//                         : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
//                     }`}
//                   >
//                     <Icon size={18} />
//                     {tab.label}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Tabs Content */}
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
//             >
//               {activeTab === "skills" && (
//                 <div className="space-y-6">
//                   {Object.entries(skills).map(([category, skillList]) => (
//                     <div key={category}>
//                       <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
//                         {category === "AI/ML" ? <Cpu size={20} /> : <Database size={20} />}
//                         {category}
//                       </h4>
//                       <div className="space-y-3">
//                         {skillList.map((skill) => (
//                           <div key={skill.name} className="space-y-1.5">
//                             <div className="flex justify-between text-xs sm:text-sm">
//                               <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
//                               <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{skill.level}%</span>
//                             </div>
//                             <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
//                               <motion.div
//                                 initial={{ width: 0 }}
//                                 animate={{ width: `${skill.level}%` }}
//                                 transition={{ duration: 1, delay: 0.2 }}
//                                 className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1.5 sm:h-2 rounded-full"
//                               />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {activeTab === "education" && (
//                 <div className="space-y-4">
//                   {education.map((edu, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
//                     >
//                       <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg self-start">
//                         <Award size={20} className="text-indigo-600 dark:text-indigo-400" />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
//                         <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
//                         <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{edu.year}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}

//               {activeTab === "story" && (
//                 <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
//                   <p>
//                     My journey in technology began with a curiosity about how things work behind the scenes.
//                     This passion led me to pursue Software Engineering and dive deep into both web development
//                     and artificial intelligence.
//                   </p>
//                   <p>
//                     I believe in creating solutions that not only look beautiful but also solve real-world
//                     problems efficiently.
//                   </p>
//                   <p>
//                     When I'm not coding, you'll find me exploring new technologies, contributing to
//                     open-source projects, or sharing knowledge with the developer community.
//                   </p>
//                 </div>
//               )}
//             </motion.div>
//           </motion.div>

//           {/* Right Column */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 1.1 }}
//             className="space-y-6"
//           >
//             {/* CTA Card */}
//             <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
//               <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Start Your Project?</h3>
//               <p className="mb-5 sm:mb-6 opacity-90 text-sm sm:text-base">
//                 Let's collaborate to bring your ideas to life with cutting-edge technology 
//                 and innovative solutions.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                 <motion.a
//                   href="/projects"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex-1 bg-white text-indigo-600 text-center py-2.5 sm:py-3 px-5 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
//                 >
//                   View My Work
//                 </motion.a>
//                 <motion.a
//                   href="/contact"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex-1 bg-transparent border-2 border-white text-white text-center py-2.5 sm:py-3 px-5 rounded-xl font-semibold hover:bg-white/10 transition-colors"
//                 >
//                   Get In Touch
//                 </motion.a>
//               </div>
//             </div>

//             {/* Resume Download */}
//             <motion.a
//               href="/resume.pdf"
//               download
//               whileHover={{ scale: 1.02 }}
//               className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/80 dark:bg-gray-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
//             >
//               <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
//                 <Download size={24} className="text-green-600 dark:text-green-400" />
//               </div>
//               <div className="text-center sm:text-left">
//                 <h4 className="font-bold text-gray-800 dark:text-white">Download Resume</h4>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">PDF - Updated recently</p>
//               </div>
//             </motion.a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }











import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Globe, Award, Rocket, Download, Sparkles, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const stats = [
    { number: "6+", label: "Projects Completed", icon: Rocket },
    { number: "1+", label: "Years Experience", icon: Award },
    { number: "2+", label: "Companies Worked", icon: Briefcase },
    { number: "3.28", label: "CGPA Score", icon: GraduationCap },
  ];

  const skills = {
    "Frontend": [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Bootstrap", level: 85 },
    ],
    "Backend": [
      { name: "Python", level: 88 },
      { name: "Flask", level: 82 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
    ],
    "Database & Tools": [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 65 },
    ],
    "AI/ML Libraries": [
      { name: "NumPy", level: 80 },
      { name: "Pandas", level: 85 },
      { name: "Scikit-learn", level: 75 },
      { name: "Matplotlib", level: 80 },
    ]
  };

  const education = [
    {
      degree: "BSc Software Engineering",
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
      degree: "Web Development Certifications",
      institution: "Code Lab",
      year: "Dec 2023",
      grade: "HTML, CSS, JavaScript"
    },
  ];

  const experience = [
    {
      company: "Ezeelogic",
      role: "Joiner Developer",
      period: "Current",
      type: "MERN Stack"
    },
    {
      company: "Code Lab",
      role: "Internee",
      period: "4 Months",
      type: "Web Development"
    },
    {
      company: "DHOPPERS",
      role: "MERN Stack Developer",
      period: "3 Months",
      type: "Full Stack"
    }
  ];

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4 sm:mb-6"
          >
            <Sparkles size={18} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            My Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Muhammad Tauqeer Sadiq</span>, a passionate{" "}
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Software Engineer
            </span>{" "}
            and{" "}
            <span className="font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
            . Currently working at Ezeelogic and pursuing my BSc in Software Engineering with 3.28 CGPA.
          </motion.p>
        </motion.div>

        {/* Stats Grid with Circular Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-4 sm:p-6 text-center backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Circular Progress */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                      className="dark:stroke-gray-600"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 251" }}
                      animate={{ strokeDasharray: "251 251" }}
                      transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2">
                  {stat.number}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="space-y-6"
          >
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row gap-2 bg-white/80 dark:bg-gray-800/80 rounded-2xl p-2 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
              {[
                { id: "skills", label: "Skills", icon: Code },
                { id: "education", label: "Education", icon: Award },
                { id: "experience", label: "Experience", icon: Briefcase },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${activeTab === tab.id
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                      }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tabs Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              {activeTab === "skills" && (
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                        {category === "AI/ML Libraries" ? <Cpu size={18} /> : <Database size={18} />}
                        {category}
                      </h4>
                      <div className="space-y-3">
                        {skillList.map((skill) => (
                          <div key={skill.name} className="space-y-1.5">
                            <div className="flex justify-between text-xs sm:text-sm">
                              <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1.5 sm:h-2 rounded-full"
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
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0">
                        <GraduationCap size={18} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">{edu.degree}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{edu.institution}</p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{edu.year}</p>
                          <p className="text-xs text-green-600 dark:text-green-400 font-medium">{edu.grade}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                        <Briefcase size={18} className="text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">{exp.role}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{exp.company}</p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{exp.period}</p>
                          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="space-y-6"
          >
            {/* Professional Summary */}
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-indigo-500" />
                Professional Summary
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Fresh Software Engineering graduate from The Islamia University of Bahawalpur with <strong>3.28/4.00 CGPA</strong>,
                  passionate about full stack development, AI, and machine learning.
                </p>
                <p>
                  Currently working as a MERN Stack Developer at <strong>Ezeelogic</strong>, with previous experience at
                  <strong> Code Lab</strong> and <strong>DHOPPERS</strong>.
                </p>
                <p>
                  Strong foundation in <strong>React, Node.js, Python, and machine learning</strong> with hands-on experience
                  in building real-world projects including AI recommendation systems and data analysis applications.
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-2xl p-5 sm:p-6 text-white shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Ready to Start Your Project?</h3>
              <p className="mb-4 sm:mb-5 opacity-90 text-sm sm:text-base">
                Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Link
                    to="/projects"
                    className="flex-1 bg-white text-indigo-600 text-center py-2 sm:py-2.5 px-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base block"
                  >
                    View Projects
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Link
                    to="/contact"
                    className="flex-1 bg-transparent border border-white text-white text-center py-2 sm:py-2.5 px-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base block"
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Resume Download */}
            <motion.a
              href="/Muhammad_Tauqeer_Sadiq(02076(CV)) (1).pdf"
              download="Muhammad_Tauqeer_Sadiq_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 rounded-2xl p-4 sm:p-5 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                <Download size={20} className="text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">Download Resume</h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">PDF - Updated with current information</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}








