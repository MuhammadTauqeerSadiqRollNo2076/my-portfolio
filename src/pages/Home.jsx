// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code, Cpu, Database, Sparkles } from 'lucide-react';
// import profileImage from "../assets/Engr-Tauqeer.png"; // ✅ .png extension add karein

// export default function Home() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white px-6 md:px-16 py-20 relative overflow-hidden">
      
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10">
        
//         {/* Left Section (Text) */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-6"
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="flex items-center gap-3 mb-4"
//           >
//             <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
//             <span className="text-green-400 font-semibold">Available for work</span>
//           </motion.div>

//           <motion.h1 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-5xl md:text-7xl font-extrabold leading-tight"
//           >
//             Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Engr. Tauqeer Sadiq</span>
//           </motion.h1>
          
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="text-xl text-gray-300 max-w-lg leading-relaxed"
//           >
//             A passionate <span className="text-indigo-400 font-semibold">Machine Learning Engineer</span> & 
//             <span className="text-purple-400 font-semibold"> MERN Stack Developer</span>.  
//             I craft intelligent, scalable web applications using modern technologies.
//           </motion.p>

//           {/* Tech Stack Icons */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//             className="flex gap-6 py-4"
//           >
//             <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
//               <Code size={20} className="text-indigo-400" />
//               <span className="text-sm">Full Stack</span>
//             </div>
//             <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
//               <Cpu size={20} className="text-purple-400" />
//               <span className="text-sm">AI/ML</span>
//             </div>
//             <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
//               <Database size={20} className="text-green-400" />
//               <span className="text-sm">Database</span>
//             </div>
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9 }}
//             className="flex flex-col sm:flex-row gap-4 pt-6"
//           >
//             <motion.a 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/projects" 
//               className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all rounded-xl font-semibold shadow-2xl hover:shadow-indigo-500/30 flex items-center gap-3 justify-center"
//             >
//               <Sparkles size={20} />
//               🚀 See Projects
//             </motion.a>
//             <motion.a 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="/contact" 
//               className="px-8 py-4 border-2 border-gray-600 hover:border-indigo-400 rounded-xl font-semibold hover:text-indigo-400 transition-all flex items-center gap-3 justify-center"
//             >
//               📩 Contact Me
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* Right Section (Image) */}
//         <motion.div 
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="flex justify-center"
//         >
//           <div className="relative group">
//             {/* Floating Animation */}
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="relative"
//             >
//               {/* Gradient Border */}
//               <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-spin-slow"></div>
              
//               {/* Profile Image */}
//               <img
//                 src={profileImage}  // ✅ Variable name consistent rakhein
//                 alt="Engr. Tauqeer Sadiq"
//                 className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-500"
//               />
              
//               {/* Floating Elements */}
//               <motion.div
//                 animate={{ 
//                   rotate: 360,
//                   scale: [1, 1.1, 1]
//                 }}
//                 transition={{ 
//                   rotate: { duration: 10, repeat: Infinity, ease: "linear" },
//                   scale: { duration: 2, repeat: Infinity }
//                 }}
//                 className="absolute -top-4 -right-4 w-16 h-16 bg-indigo-500 rounded-full blur-xl opacity-50"
//               ></motion.div>
//               <motion.div
//                 animate={{ 
//                   rotate: -360,
//                   scale: [1.1, 1, 1.1]
//                 }}
//                 transition={{ 
//                   rotate: { duration: 8, repeat: Infinity, ease: "linear" },
//                   scale: { duration: 3, repeat: Infinity }
//                 }}
//                 className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500 rounded-full blur-xl opacity-50"
//               ></motion.div>
//             </motion.div>
//           </div>
//         </motion.div>

//       </div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-1 h-3 bg-indigo-400 rounded-full mt-2"
//           ></motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }










import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Sparkles } from "lucide-react";
import profileImage from "../assets/Engr-Tauqeer.png";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white px-4 sm:px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            <span className="text-green-400 font-semibold">Available for work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Engr. Tauqeer Sadiq
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
            A passionate{" "}
            <span className="text-indigo-400 font-semibold">Machine Learning Engineer</span> &{" "}
            <span className="text-purple-400 font-semibold">MERN Stack Developer</span>.  
            I craft intelligent, scalable web applications using modern technologies.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 py-4">
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg text-sm">
              <Code size={18} className="text-indigo-400" /> Full Stack
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg text-sm">
              <Cpu size={18} className="text-purple-400" /> AI/ML
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg text-sm">
              <Database size={18} className="text-green-400" /> Database
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold shadow-2xl flex items-center justify-center gap-2 transition-all"
            >
              <Sparkles size={18} /> 🚀 See Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-600 hover:border-indigo-400 rounded-xl font-semibold hover:text-indigo-400 flex items-center justify-center gap-2 transition-all"
            >
              📩 Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <img
                src={profileImage}
                alt="Engr. Tauqeer Sadiq"
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-indigo-400 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
