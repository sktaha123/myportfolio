import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-primary-bg text-primary-text pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">

        {/* Left Column: Image & Bio */}
        <div className="col-span-1 md:col-span-5 space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-4/5 rounded-3xl overflow-hidden bg-gray-200 dark:bg-zinc-800"
          >
            <img src="/images/taha.png" alt="Taha Shaikh" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-4">Introduction</h3>
            <p className="font-body text-secondary-text leading-relaxed mb-4">
              I am a Computer Science student passionate about web development and modern digital experiences. My goal is to become a full-stack developer capable of building scalable and impactful applications.
            </p>
            <p className="font-body text-secondary-text leading-relaxed">
              I actively work on projects and continuously improve my skills in frontend and backend development.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Stats & Details */}
        <div className="col-span-1 md:col-span-7 space-y-16">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-heading text-3xl font-bold mb-8 flex items-center gap-3 text-black dark:text-white">
              <span className="w-8 h-1 bg-black dark:bg-white rounded-full"></span> Education
            </h2>
            <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
              <div className="mb-6">
                <h3 className="font-heading text-xl font-bold text-black dark:text-white">Bachelor of Computer Science (Pursuing)</h3>
                <p className="text-gray-500 dark:text-zinc-500 font-mono text-sm">B.K. Birla College</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Semester 1", value: "9.45 CGPA" },
                  { label: "Semester 2", value: "9.00 CGPA" },
                  { label: "Semester 3", value: "9.25 CGPA" },
                  { label: "Semester 4", value: "Ongoing", highlight: true }
                ].map((sem) => (
                  <div key={sem.label} className="bg-gray-50 dark:bg-zinc-900 p-4 rounded-xl text-center border border-transparent dark:border-zinc-800">
                    <span className="block text-gray-400 dark:text-zinc-500 text-xs uppercase tracking-wider mb-1">{sem.label}</span>
                    <span className={`font-bold text-xl ${sem.highlight ? 'text-green-600 dark:text-green-500' : 'text-black dark:text-white'}`}>{sem.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interests & Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-heading text-3xl font-bold mb-8 flex items-center gap-3 text-black dark:text-white">
              <span className="w-8 h-1 bg-black dark:bg-white rounded-full"></span> Interests & Strengths
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Web development & product building",
                "Fitness & calisthenics",
                "Personal discipline & growth mindset",
                "Startup and business environments",
                "Content creation & creativity"
              ].map(item => (
                <div key={item} className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 rounded-xl hover:border-black/20 dark:hover:border-white/20 transition-colors">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                  <span className="font-body text-gray-700 dark:text-zinc-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
