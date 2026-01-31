import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    role: "Private Tutor",
    company: "Self-Employed",
    period: "2024 – Present",
    description: "Teach mathematics and physics to school students, improving their academic performance and analytical skills."
  },
  {
    id: 2,
    role: "Chegg Tutor",
    company: "Chegg",
    period: "2024",
    description: "Provided academic problem-solving assistance to students globally, clarifying complex concepts in a digital format."
  },
  {
    id: 3,
    role: "Amazon Affiliate Marketer",
    company: "Freelance",
    period: "Past",
    description: "Promoted products through digital content creation and affiliate strategies, analyzing engagement metrics."
  },
  {
    id: 4,
    role: "React App Developer",
    company: "Freelance / Personal",
    period: "Ongoing",
    description: "Building scalable and interactive web applications using React.js, Tailwind CSS, and modern web technologies for real-world use cases."
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-black dark:text-white mb-6">
            Experience.
          </h1>
          <p className="font-body text-xl text-gray-600 dark:text-zinc-400 max-w-2xl">
            A history of my work, teaching, and creative endeavors.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-gray-200 dark:border-zinc-800 ml-3 md:ml-6 space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-black dark:border-white"></span>

              <div className="bg-white dark:bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:border-black/10 dark:hover:border-white/10 transition-colors cursor-default">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="font-heading text-xl font-bold text-black dark:text-zinc-100">{item.role}</h3>
                  <span className="font-mono text-sm text-gray-500 dark:text-zinc-500 bg-gray-50 dark:bg-zinc-900 px-3 py-1 rounded-full border border-gray-100 dark:border-zinc-800 w-fit">
                    {item.period}
                  </span>
                </div>
                <h4 className="font-body font-semibold text-gray-700 dark:text-zinc-400 mb-2">{item.company}</h4>
                <p className="font-body text-gray-600 dark:text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
