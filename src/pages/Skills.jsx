import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Terminal, Cpu, Globe, Rocket, Layout, Wrench, Bot } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: "Frontend Engineering",
    icon: Layout,
    description: "Crafting pixel-perfect, responsive, and accessible user interfaces.",
    skills: [
      { name: "React.js", level: 85, icon: Code2 },
      { name: "HTML5 & CSS3", level: 95, icon: Globe },
      { name: "Tailwind CSS", level: 90, icon: Code2 },
      { name: "JavaScript (ES6+)", level: 85, icon: Terminal },
      { name: "Framer Motion", level: 75, icon: Rocket },
      { name: "Responsive Design", level: 90, icon: Layout },
    ],
    style: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800"
  },
  {
    id: 'backend',
    title: "Backend Foundations",
    icon: Server,
    description: "Server-side logic and application architecture.",
    skills: [
      { name: "Node.js", level: 70, icon: Server },
      { name: "Express.js", level: 70, icon: Globe },
    ],
    style: "bg-zinc-900 text-white dark:bg-black"
  },
  {
    id: 'tools',
    title: "Tools & AI",
    icon: Wrench,
    description: "The software and platforms that power my workflow.",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "WordPress", level: 80 },
      { name: "Canva / Ps / Lr", level: 90 }, // Combined for compactness
      { name: "AI Agents & Prompting", level: 80 },
      { name: "MS Office / G-Suite", level: 95 },
    ],
    style: "bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800"
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-primary-bg pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-[90rem] mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-10 flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-black dark:text-white mb-4 tracking-tight">
              Capabilities<span className="text-secondary-text">.</span>
            </h1>
            <p className="font-body text-xl text-secondary-text max-w-xl">
              A curated stack of technologies I use to build digital products.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
            Always Learning
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">

          {/* Frontend Section - Large Canvas (Col Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`col-span-1 md:col-span-6 lg:col-span-7 rounded-[2rem] p-8 md:p-10 ${skillCategories[0].style} relative overflow-hidden group`}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                  <Layout size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">{skillCategories[0].title}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories[0].skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-sm flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                        {skill.icon ? <skill.icon size={18} /> : <Code2 size={18} />}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100">{skill.name}</h3>
                        <div className="h-1.5 w-24 bg-gray-100 dark:bg-zinc-700 rounded-full mt-1.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-indigo-500 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-400 dark:text-zinc-500">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Section - Vertical Terminal (Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`col-span-1 md:col-span-6 lg:col-span-5 rounded-[2rem] p-8 md:p-10 ${skillCategories[1].style} relative overflow-hidden flex flex-col`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-zinc-800 dark:bg-zinc-700 rounded-lg border border-zinc-700">
                <Terminal size={20} className="text-green-400" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">{skillCategories[1].title}</h2>
            </div>

            <div className="space-y-4 flex-1 font-mono text-sm">
              {skillCategories[1].skills.map((skill, idx) => (
                <div key={skill.name} className="group flex items-center gap-4">
                  <span className="text-zinc-500 select-none">$</span>
                  <span className="text-green-400 font-bold">{skill.name}</span>
                  <span className="flex-1 h-px bg-zinc-800 group-hover:bg-zinc-700 transition-colors mx-2"></span>
                  <span className="text-zinc-400">{skill.level} / 100</span>
                </div>
              ))}
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <p className="text-zinc-500 text-xs leading-relaxed">
                       // Expanding into Full-Stack...<br />
                       // Focusing on SaaS Architecture
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tools Section - Horizontal Strip (Col Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`col-span-1 md:col-span-6 lg:col-span-8 rounded-[2rem] p-8 md:p-10 ${skillCategories[2].style} relative`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                  <Wrench size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">{skillCategories[2].title}</h2>
              </div>
              <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-xs text-right hidden md:block">
                Design, Development, & AI Productivity Tools.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skillCategories[2].skills.map((skill, idx) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Current Focus - Square (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-6 lg:col-span-4 rounded-[2rem] p-8 md:p-10 bg-black dark:bg-white text-white dark:text-black relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-bold tracking-widest uppercase opacity-60">Currently Learning</span>
              <h3 className="text-2xl font-bold leading-tight">Database & SaaS Architecture</h3>
              <ul className="space-y-2 mt-4">
                {[
                  "Database Management",
                  "API Integration",
                  "Authentication",
                  "SaaS Development"
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium opacity-90">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Background Decoration */}
            <Bot className="absolute -bottom-8 -right-8 w-40 h-40 opacity-10 rotate-12" />
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Skills;
