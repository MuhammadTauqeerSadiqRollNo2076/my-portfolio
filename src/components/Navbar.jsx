import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
/* eslint-disable no-unused-vars */
//import { motion } from "framer-motion";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Folder, Mail, Code, Cpu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Folder },
    { path: '/contact', label: 'Contact', icon: Mail },
    { path: '/resume', label: 'Resume', icon: Cpu } // Resume navigation menu mein hi rahega
  ];

  const active = (path) =>
    loc.pathname === path
      ? 'text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25'
      : 'text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300';

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl bg-black/80 border-b border-gray-800/50 shadow-2xl' 
          : 'backdrop-blur-md bg-black/30 border-b border-gray-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
        
        {/* Logo with Icon */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <Code size={20} className="text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 border-2 border-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></motion.div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                Engr. Tauqeer
              </span>
              <span className="text-xs text-gray-400 -mt-1">ML Engineer</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${active(item.path)}`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden backdrop-blur-2xl bg-black/95 border-t border-gray-800/50 overflow-hidden"
          >
            <div className="flex flex-col py-4 space-y-2 px-6">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      onClick={() => setOpen(false)}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${active(item.path)}`}
                    >
                      <Icon size={20} />
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.nav>
  );
}