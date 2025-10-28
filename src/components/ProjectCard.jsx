import React, { useState } from "react";
import { ExternalLink, Github, Star, Eye, Calendar, Code2, Sparkles, Zap, Users, Target } from "lucide-react";
//import { motion } from "framer-motion";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function ProjectCard({ p }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/50 dark:border-gray-700/50 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        minHeight: '380px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)'
      }}
    >
      {/* VIP Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-400/10 to-transparent rounded-full blur-xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/10 rounded-full blur-lg" />
      
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        
        {/* Header with Icon and Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/25"
            >
              <Code2 size={20} className="text-white" />
            </motion.div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                {p.title}
              </h4>
              {p.date && (
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={14} />
                  <span>{p.date}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* VIP Status Badge */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${
              p.status === 'Completed' 
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green-500/25'
                : p.status === 'In Progress'
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-yellow-500/25'
                : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-blue-500/25'
            }`}
          >
            {p.status}
          </motion.div>
        </div>

        {/* Description */}
        <div className="mb-4 flex-1">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
            {p.desc}
          </p>
        </div>

        {/* Tech Stack with Icons */}
        {p.tech && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-yellow-500" />
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tech.slice(0, 4).map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-semibold border border-gray-200 dark:border-gray-600 shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
              {p.tech.length > 4 && (
                <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-xl text-xs font-semibold">
                  +{p.tech.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Key Features */}
        {p.features && (
          <div className="mb-4 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Target size={14} className="text-red-500" />
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Key Features</span>
            </div>
            <div className="space-y-2">
              {p.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Sparkles size={12} className="text-purple-500 flex-shrink-0" />
                  <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* GitHub Button */}
              {p.github && (
                <motion.a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:from-gray-200 hover:to-gray-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-lg border border-gray-200 dark:border-gray-600 group/github"
                  title="View Source Code"
                >
                  <Github size={16} className="text-gray-600 dark:text-gray-400 group-hover/github:text-gray-800 dark:group-hover/github:text-white transition-colors" />
                </motion.a>
              )}
              
              {/* Live Demo Button */}
              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40"
              >
                <Eye size={16} />
                Live Demo
                <ExternalLink size={14} />
              </motion.a>
            </div>

            {/* Rating */}
            {p.rating && (
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg border border-yellow-200 dark:border-yellow-800"
              >
                <Star size={14} className="text-yellow-500 fill-current" />
                <span className="text-xs font-bold text-yellow-700 dark:text-yellow-300">{p.rating}</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* VIP Hover Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none"
      />
    </motion.div>
  );
}