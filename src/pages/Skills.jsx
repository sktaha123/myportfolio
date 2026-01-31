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
    <div className="min-h-screen bg-primary-bg pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-black dark:text-white mb-6">
            Technical Arsenal.
          </h1>
          <p className="font-body text-xl text-secondary-text max-w-2xl">
            A breakdown of the technologies and tools I use to bring digital ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold mb-2 text-black dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h2>
                <p className="font-body text-gray-500 dark:text-zinc-500 text-sm h-10">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-mono font-medium text-gray-800 dark:text-zinc-300">{skill.name}</span>
                      <span className="font-mono text-gray-400 dark:text-zinc-600 text-sm">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-black dark:bg-white rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Currently Learning Card (Custom) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border-2 border-dashed border-gray-300 dark:border-zinc-800 rounded-3xl flex flex-col justify-center"
          >
            <h3 className="font-heading text-xl font-bold mb-4 text-gray-400 dark:text-zinc-600 uppercase tracking-widest">Currently Learning</h3>
            <ul className="space-y-3">
              {["UI/UX Design Principles", "Backend Architecture", "Database Systems", "Full-stack Workflows"].map(item => (
                <li key={item} className="flex items-center gap-3 text-gray-700 dark:text-zinc-400 font-medium font-body">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
