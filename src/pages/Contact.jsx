import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("form");

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "chtouqeerchtouqeermay@email.com",
      link: "mailto:chtouqeerchtouqeermayo@email.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 301 7511843",
      link: "tel:+923017511843",
      description: "Mon - Fri, 9am - 6pm"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Westwood Colony Lahore, Pakistan",
      link: "F69R+4C2, Westwood Colony Lahore, Pakistan",
      description: "Available for remote work"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      link: "#",
      description: "Usually respond same day"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "💼", color: "from-blue-500 to-blue-700" },
    { name: "GitHub", url: "#", icon: "🐙", color: "from-gray-700 to-gray-900" },
    { name: "Twitter", url: "#", icon: "🐦", color: "from-sky-400 to-sky-600" },
    { name: "Portfolio", url: "#", icon: "🌐", color: "from-green-500 to-green-700" }
  ];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Contact Information Cards */}
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <MessageCircle className="text-indigo-500" size={24} />
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.title}
                      href={item.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors">
                        <Icon size={20} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">{item.value}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Follow My Journey
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-r ${social.color} text-white p-3 rounded-xl text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <span className="text-lg">{social.icon}</span>
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-2"
          >
            {/* Form Tabs */}
            <div className="flex gap-2 mb-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl p-2 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
              {[
                { id: "form", label: "Contact Form", icon: Mail },
                { id: "quick", label: "Quick Chat", icon: MessageCircle }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Contact Form Container */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-2xl p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                <Mail className="w-8 h-8 mr-3" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Send Message
                </h3>
              </div>

              {activeTab === "form" ? (
                <ContactForm />
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💬</div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    Quick Chat
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                    Prefer instant communication? Reach out directly through any of my social platforms for a faster response.
                  </p>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                  >
                    Start Quick Chat
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              )}

              {/* Footer Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <Send className="w-4 h-4 text-indigo-400" />
                  <span>I'm committed to responding within 24 hours</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}