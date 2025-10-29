import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code, Cpu, ArrowUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (path) => {
    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  // ✅ Email click handle (Gmail + fallback)
  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "chtouqeerchtouqeermayo@gmail.com";

    // Try Gmail compose in browser
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}`;
    const newWindow = window.open(gmailUrl, "_blank");

    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      // Fallback: open default email client
      window.location.href = `mailto:${email}`;

      // If that also fails, copy to clipboard and notify
      setTimeout(() => {
        navigator.clipboard.writeText(email).then(() => {
          showEmailNotification(email);
        }).catch(() => {
          showEmailNotification(email);
        });
      }, 800);
    }
  };

  // ✅ Custom notification (Email copied)
  const showEmailNotification = (email) => {
    const notification = document.createElement("div");
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4F46E5;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: system-ui;
        font-size: 14px;
        animation: slideIn 0.3s ease-out;
      ">
        📧 Email copied: ${email}
      </div>
    `;

    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notification);

    setTimeout(() => {
      if (document.body.contains(notification)) document.body.removeChild(notification);
      if (document.head.contains(style)) document.head.removeChild(style);
    }, 3000);
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Tailwind", icon: "💨" },
    { name: "Python", icon: "🐍" },
    { name: "TensorFlow", icon: "🧠" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-gray-900 via-black to-gray-950 border-t border-indigo-700/40 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <Code size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Engr. Tauqeer Sadiq</h3>
                <p className="text-sm text-gray-400">
                  ML Engineer & Full Stack Developer
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Crafting intelligent digital solutions with cutting-edge technologies
              and a passion for innovation.
            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded-lg text-xs text-gray-300 border border-gray-700"
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavigation(link.path)}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`block text-sm w-full text-left bg-transparent border-none cursor-pointer transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-indigo-400 font-semibold"
                      : "text-gray-400 hover:text-indigo-400"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
            <p className="text-gray-400 text-sm mb-4">
              Ready to start your next project? Let's build something amazing together.
            </p>

            {/* ✅ Fixed Social Icons */}
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-3 bg-gray-800/50 hover:bg-indigo-600 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-3 bg-gray-800/50 hover:bg-indigo-600 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>

              {/* ✅ Fixed Email Icon */}
              <motion.a
                href="mailto:chtouqeerchtouqeermayo@gmail.com"
                onClick={handleEmailClick}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-3 bg-gray-800/50 hover:bg-indigo-600 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 group"
                aria-label="Email"
                title="Click to email me"
              >
                <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
            >
              <ArrowUp size={16} />
              Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent my-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Engr. Tauqeer Sadiq</span>
            <span className="text-gray-600">•</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.div>
            <span>using</span>
            <span className="text-indigo-400 font-medium flex items-center gap-1">
              <Code size={16} />
              React & Tailwind
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Available for new projects</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-4 right-4 opacity-10"
      >
        <Cpu size={40} className="text-indigo-400" />
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
