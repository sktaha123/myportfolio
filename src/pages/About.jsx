import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, GraduationCap, Star, CheckCircle2, User, Heart, Mic, ChevronDown, ChevronUp } from 'lucide-react';

const educationData = [
  {
    year: '2026 — Present',
    degree: 'Bachelor of Computer Science',
    institution: 'B.K. Birla College, Kalyan',
    tags: ["Sem 1: 9.45", "Sem 2: 9.00", "Sem 3: 9.25"]
  },
  {
    year: '2023 — 2024',
    degree: 'HSC Science',
    institution: 'Dar-Ul-Rehmat Trust English High School',
    tags: ["Percentage: 90.50%", "Science"]
  }
];

const certificationsData = [
  { name: "Full Stack Web Development", issuer: "Udemy / Meta", date: "2024", image: "/images/cert-fullstack.png" },
  { name: "React Advanced Patterns", issuer: "Frontend Masters", date: "2023", image: "/images/cert-react.png" },
  { name: "UI/UX Design Essentials", issuer: "Google / Coursera", date: "2023", image: "/images/cert-uiux.png" },
  { name: "JavaScript Algorithms", issuer: "FreeCodeCamp", date: "2023", image: "/images/cert-js.png" },
];

const About = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="min-h-screen bg-primary-bg pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-[90rem] mx-auto">

        {/* Header Section */}
        <div className="mb-16 md:mb-24 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            About Me.
          </h1>
          <p className="font-body text-xl text-secondary-text max-w-2xl mx-auto">
            A deeper look into who I am, beyond the code.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">

          {/* Profile Image - Large Vertical Card (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 row-span-2 relative rounded-[2rem] overflow-hidden group min-h-[400px]"
          >
            <img
              src="/images/taha.webp"
              alt="Taha Shaikh"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-white font-heading text-2xl font-bold mb-1">Taha Shaikh</h3>
              <p className="text-gray-300 font-mono text-xs uppercase tracking-widest">Developer & Student</p>
            </div>
          </motion.div>

          {/* Biography - Text Card (Col Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-3 lg:col-span-8 bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 rounded-[2rem] p-8 md:p-10 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                <User size={20} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-black dark:text-white">The Backstory</h2>
            </div>
            <p className="font-body text-lg text-gray-600 dark:text-zinc-300 leading-relaxed mb-6">
              I am a Computer Science student currently bridging the gap between theoretical engineering and modern web development. My journey started with a curiosity for how digital platforms are constructed, which quickly evolved into a passion for React-based software engineering.
            </p>
            <p className="font-body text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
              I focus on creating high-performance, accessible, and visually stunning web applications that solve real-world problems.
            </p>
          </motion.div>

          {/* Philosophy - Colored Card (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-[2rem] p-8 flex flex-col justify-between"
          >
            <Star className="text-yellow-400 dark:text-yellow-500 mb-4" size={24} fill="currentColor" />
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Core Philosophy</h3>
              <p className="font-body text-sm opacity-80 leading-relaxed italic">
                "Precision in logic, beauty in interface. I believe software should feel as good as it functions."
              </p>
            </div>
          </motion.div>

          {/* Strengths - Grid Card (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-800 rounded-[2rem] p-8"
          >
            <h3 className="font-heading text-lg font-bold text-black dark:text-white mb-6 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-500" /> Strengths
            </h3>
            <div className="space-y-3">
              {[
                "Modern UI Engineering",
                "Responsive Architecture",
                "Performance Tuning",
                "Atomic Design Systems"
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600 dark:text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-zinc-600" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education - Detailed Card (Col Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, layout: { type: "spring", bounce: 0.2, duration: 0.6 } }}
            layout
            className="col-span-1 md:col-span-6 lg:col-span-6 bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 rounded-[2rem] p-8 md:p-10 flex flex-col"
          >
            <motion.div layout="position" className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600 dark:text-orange-400">
                <GraduationCap size={20} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-black dark:text-white">Education</h2>
            </motion.div>

            <div className="flex flex-col gap-8">
              <AnimatePresence mode="popLayout">
                {educationData.slice(0, showAll ? educationData.length : 1).map((edu, index) => (
                  <motion.div
                    layout
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row gap-6 sm:items-start border-b last:border-0 border-gray-100 dark:border-zinc-800 pb-8 last:pb-0"
                  >
                    <motion.div layout="position" className="flex-1">
                      <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full">
                        {edu.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                      <p className="text-gray-500 dark:text-zinc-400 text-sm">{edu.institution}</p>
                    </motion.div>

                    <motion.div layout="position" className="flex flex-wrap sm:flex-col gap-2">
                      {edu.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-gray-50 dark:bg-zinc-800 rounded-lg text-xs font-mono font-medium text-gray-600 dark:text-zinc-300 border border-gray-100 dark:border-zinc-700 text-center">
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {educationData.length > 1 && (
              <motion.button
                layout
                onClick={() => setShowAll(!showAll)}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                className="mt-6 w-full py-3 flex items-center justify-center gap-2 text-sm font-bold text-gray-500 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/10 rounded-xl transition-colors group"
              >
                {showAll ? "See Less" : "See More"}
                {showAll ? (
                  <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                )}
              </motion.button>
            )}
          </motion.div>

          {/* Certifications - List Card (Col Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, layout: { type: "spring", bounce: 0.2, duration: 0.6 } }}
            layout
            className="col-span-1 md:col-span-6 lg:col-span-6 bg-white dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 rounded-[2rem] p-8 md:p-10 flex flex-col"
          >
            <motion.div layout="position" className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                <Award size={20} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-black dark:text-white">Certifications</h2>
            </motion.div>

            <div className="flex flex-col gap-4">
              <AnimatePresence mode="popLayout">
                {certificationsData.slice(0, showAll ? certificationsData.length : 2).map((cert, i) => (
                  <motion.a
                    layout
                    key={i}
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-zinc-800/50 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors group cursor-pointer"
                  >
                    <motion.div layout="position">
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{cert.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-zinc-500 mt-1">{cert.issuer}</p>
                    </motion.div>
                    <motion.span layout="position" className="text-xs font-mono font-medium text-gray-400">{cert.date}</motion.span>
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>

            {certificationsData.length > 2 && (
              <motion.button
                layout
                onClick={() => setShowAll(!showAll)}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                className="mt-6 w-full py-3 flex items-center justify-center gap-2 text-sm font-bold text-gray-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10 rounded-xl transition-colors group"
              >
                {showAll ? "See Less" : "See More"}
                {showAll ? (
                  <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                )}
              </motion.button>
            )}
          </motion.div>

          {/* Interests - Horizontal Strip (Col Span 12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: { delay: 0.6 }, layout: { type: "spring", bounce: 0.2, duration: 0.6 } }}
            layout
            className="col-span-1 md:col-span-6 lg:col-span-12 bg-gradient-to-r from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-950 border border-gray-100 dark:border-zinc-800 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <motion.div layout="position" className="flex items-center gap-4">
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-full text-red-500">
                <Heart size={20} fill="currentColor" />
              </div>
              <span className="font-heading text-lg font-bold text-gray-900 dark:text-white">Beyond Code</span>
            </motion.div>

            <motion.div layout="position" className="flex flex-wrap justify-center gap-3">
              {["Photography", "Physics", "Teaching", "Podcasts", "Design Systems"].map(interest => (
                <span key={interest} className="px-4 py-2 bg-white dark:bg-zinc-800 shadow-sm border border-gray-100 dark:border-zinc-700 rounded-full text-sm font-medium text-gray-600 dark:text-zinc-300">
                  {interest}
                </span>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
