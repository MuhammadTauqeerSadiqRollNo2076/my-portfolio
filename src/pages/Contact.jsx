import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  MessageCircle,
  Linkedin,
  Github,
  Twitter,
  BarChart3,
} from "lucide-react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("form");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit (API Integration)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://my-backend-green-six.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ Failed: ${data.message || "Something went wrong."}`);
      }
    } catch (err) {
      setStatus("⚠️ Error sending message. Check your server connection.");
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "chtouqeerchtouqeermayo@gmail.com",
      link: "mailto:chtouqeerchtouqeermayo@gmail.com",
      description: "Click to send me an email",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 301 7511843",
      link: "tel:+923017511843",
      description: "Click to call me directly",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Westwood Colony Lahore",
      link: "https://maps.google.com/?q=F69R+4C2 Westwood Colony Lahore Pakistan",
      description: "F69R+4C2, Westwood Colony Lahore, Pakistan",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      link: "#",
      description: "Usually respond same day",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/m-tauqeer-sadiq-99b687253",
      icon: Linkedin,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "GitHub",
      url: "https://github.com/MuhammadTauqeerSadiqRollNo2076",
      icon: Github,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/EngrChTauqeerMayo",
      icon: Twitter,
      color: "from-sky-400 to-sky-600",
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/muhammadtauqeersadiq",
      icon: BarChart3,
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <section className="min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl mt-5 md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4"
          >
            Currently working at Ezeelogic as Junior MERN Stack Developer.
            Ready to bring your ideas to life? Let's discuss your project!
          </motion.p>
        </motion.div>

        {/* Connect With Me Section - Now at the top of both columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg mb-6 sm:mb-8"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 text-center">
            Connect With Me
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-r ${social.color} text-white p-2 sm:p-3 rounded-lg sm:rounded-xl text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm flex-1 min-w-[110px] max-w-[130px]`}
                >
                  <Icon size={16} className="text-white" />
                  <span>{social.name}</span>
                </motion.a>
              );
            })}

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/923017511843"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm flex-1 min-w-[110px] max-w-[130px]"
            >
              <MessageCircle size={16} className="text-white" />
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-1"
          >
            {/* Contact Information Cards */}
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <MessageCircle className="text-indigo-500" size={20} />
                Get In Touch
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.title}
                      href={item.link}
                      target={
                        item.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        item.link.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 + index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors flex-shrink-0">
                        <Icon
                          size={18}
                          className="text-indigo-600 dark:text-indigo-400"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm sm:text-base">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base truncate">
                          {item.value}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-2"
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              {activeTab === "form" ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {status && (
                    <p className="text-center mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {status}
                    </p>
                  )}
                </form>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">💬</div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3">
                    Quick Chat
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-md mx-auto px-4">
                    Prefer instant communication? Reach out directly through WhatsApp or social media for faster response.
                  </p>
                  <motion.a
                    href="https://wa.me/923017511843"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300 text-sm sm:text-base"
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}