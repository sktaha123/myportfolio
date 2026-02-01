import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone, Instagram, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! I will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-primary-bg pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-text tracking-[-0.04em] leading-[0.9]">
            Let's Connect.
          </h2>
          <p className="font-body text-xl text-secondary-text max-w-2xl mx-auto">
            Feel free to contact me for collaborations, internships, freelance work, or development opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-zinc-900/50 p-6 rounded-2xl space-y-6 border border-gray-100 dark:border-zinc-800 shadow-sm">

              {/* Phone */}
              <div>
                <h3 className="text-[10px] font-mono text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-1">Phone / WhatsApp</h3>
                <a href="tel:+918286265286" className="text-lg md:text-xl font-bold text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2.5 font-heading">
                  <Phone className="inline-block" size={20} /> +91 8286265286
                </a>
              </div>

              {/* Socials List */}
              <div>
                <h3 className="text-[10px] font-mono text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-3">Digital Presence</h3>
                <div className="space-y-3">
                  <a href="https://instagram.com/sktaha1234" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-base font-medium text-gray-700 dark:text-zinc-300 hover:text-pink-600 transition-colors">
                    <Instagram size={18} /> @sktaha1234
                  </a>
                  <a href="https://www.linkedin.com/in/taha-shaikh-14b47a303" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-base font-medium text-gray-700 dark:text-zinc-300 hover:text-blue-600 transition-colors">
                    <Linkedin size={18} /> Taha Shaikh
                  </a>
                  <a href="https://github.com/sktaha123" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-base font-medium text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Github size={18} /> sktaha123
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900/50 p-6 border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-sm">
              <h3 className="text-lg font-heading font-bold mb-1 text-black dark:text-white">Availability</h3>
              <p className="text-xs text-gray-600 dark:text-zinc-400 mb-3 font-body">
                Open for internships & freelance.
              </p>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-500 text-sm font-medium font-body">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Available Now
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[10px] font-bold font-mono tracking-widest ml-1.5 uppercase text-gray-500 dark:text-zinc-500">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 text-black dark:text-white text-sm focus:border-black dark:focus:border-white outline-none transition-all placeholder-gray-400 dark:placeholder-zinc-600 font-body shadow-sm"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[10px] font-bold font-mono tracking-widest ml-1.5 uppercase text-gray-500 dark:text-zinc-500">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 text-black dark:text-white text-sm focus:border-black dark:focus:border-white outline-none transition-all placeholder-gray-400 dark:placeholder-zinc-600 font-body shadow-sm"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-[10px] font-bold font-mono tracking-widest ml-1.5 uppercase text-gray-500 dark:text-zinc-500">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Collaboration / Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 text-black dark:text-white text-sm focus:border-black dark:focus:border-white outline-none transition-all placeholder-gray-400 dark:placeholder-zinc-600 font-body shadow-sm"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-bold font-mono tracking-widest ml-1.5 uppercase text-gray-500 dark:text-zinc-500">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 text-black dark:text-white text-sm focus:border-black dark:focus:border-white outline-none transition-all placeholder-gray-400 dark:placeholder-zinc-600 font-body resize-none shadow-sm"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
