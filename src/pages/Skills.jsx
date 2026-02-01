import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern, and interactive interaces.",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Responsive Design", level: 90 },
    ]
  },
  {
    title: "Backend & Database (Learning)",
    description: "Expanding knowledge into server-side logic and data management.",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "API Integration", level: 75 },
      { name: "Database Management", level: 50 },
    ]
  },
  {
    title: "Tools & Platforms",
    description: "Utilizing industry-standard tools for workflow and creation.",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "WordPress", level: 80 },
      { name: "Canva", level: 90 },
      { name: "Lightroom", level: 85 },
      { name: "DaVinci Resolve", level: 75 },
      { name: "MS Office", level: 95 },
    ]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-primary-bg pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Technical Arsenal.
          </h1>
          <p className="font-body text-xl text-secondary-text max-w-2xl">
            A breakdown of the technologies and tools I use to bring digital ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="group"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h2 className="font-heading text-xl font-bold mb-1.5 text-black dark:text-zinc-100 group-hover:text-primary-text transition-colors tracking-tight">
                  {category.title}
                </h2>
                <p className="font-body text-gray-500 dark:text-zinc-500 text-xs h-8">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-mono text-xs font-semibold text-gray-800 dark:text-zinc-300 uppercase tracking-tight">{skill.name}</span>
                      <span className="font-mono text-gray-400 dark:text-zinc-600 text-[10px]">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-black dark:bg-white rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.05) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Currently Learning Card (Custom) */}
          <div className="p-6 border border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl flex flex-col justify-center bg-gray-50/50 dark:bg-zinc-900/30">
            <h3 className="font-heading text-xs font-bold mb-4 text-gray-400 dark:text-zinc-500 uppercase tracking-[0.2em]">Currently Learning</h3>
            <ul className="space-y-2.5">
              {["UI/UX Design Principles", "Backend Architecture", "Database Systems", "Full-stack Workflows"].map(item => (
                <li key={item} className="flex items-center gap-2.5 text-gray-700 dark:text-zinc-400 text-sm font-medium font-body">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
