import React, { useState } from "react";
//import { motion } from "framer-motion";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  function change(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function submit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: "Name, email and message are required." });
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, msg: data.message || "Message sent successfully!" });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else setStatus({ ok: false, msg: data.message || "Something went wrong!" });
    } catch (err) {
      setStatus({ ok: false, msg: "Network error — please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto bg-gradient-to-b from-gray-900 via-black to-gray-950 border border-indigo-700/30 rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">
        Contact Me
      </h2>

      {["name", "email", "subject", "message"].map((field) => (
        <div key={field} className="mb-5">
          <label
            className="block text-sm text-gray-400 mb-1 capitalize"
            htmlFor={field}
          >
            {field} {["name", "email", "message"].includes(field) && "*"}
          </label>

          {field !== "message" ? (
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={form[field]}
              onChange={change}
              className="w-full bg-gray-800/70 text-gray-100 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
          ) : (
            <textarea
              name={field}
              value={form[field]}
              onChange={change}
              rows="5"
              className="w-full bg-gray-800/70 text-gray-100 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
          )}
        </div>
      ))}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={sending}
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
            sending
              ? "bg-gray-600 cursor-not-allowed text-gray-300"
              : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
          }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </motion.button>

        {status && (
          <p
            className={`text-sm font-medium ${
              status.ok ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.msg}
          </p>
        )}
      </div>
    </motion.form>
  );
}
