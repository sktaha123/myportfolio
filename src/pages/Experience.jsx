import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, BookOpen, TrendingUp, Code2, Calendar } from 'lucide-react';

const experienceData = [
  {
    id: 4,
    role: "Freelance React Developer",
    company: "Independent",
    period: "2024 – Present",
    description: "Architecting and deploying professional web applications for clients and personal ventures. Specializing in component-based UI design, performance optimization, and responsive layouts using the React ecosystem.",
    skills: ["React", "Tailwind CSS", "Framer Motion", "UI Engineering"],
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-50/50 dark:bg-blue-900/10"
  },
  {
    id: 1,
    role: "Private Tutor (STEM)",
    company: "Self-Employed",
    period: "2024 – Present",
    description: "Delivering customized curriculum in Mathematics and Physics. Focused on breaking down complex theoretical concepts into digestible, practical lessons for students, fostering critical thinking.",
    skills: ["Communication", "Mentorship", "Problem Solving"],
    icon: BookOpen,
    color: "text-yellow-500",
    bg: "bg-yellow-50/50 dark:bg-yellow-900/10"
  },
  {
    id: 2,
    role: "Subject Matter Expert",
    company: "Chegg Inc.",
    period: "2024",
    description: "Provided high-quality academic solutions to a global student base. Required meticulous attention to detail and ability to explain difficult problems clearly in a digital, text-based format.",
    skills: ["Remote Work", "Academic Writing", "Analysis"],
    icon: Briefcase,
    color: "text-orange-500",
    bg: "bg-orange-50/50 dark:bg-orange-900/10"
  },
  {
    id: 3,
    role: "Affiliate Marketer",
    company: "Amazon Associates",
    period: "Past",
    description: "Executed digital marketing strategies to drive traffic and conversion. Gained insights into SEO, content marketing, and user purchasing behavior.",
    skills: ["Digital Marketing", "Analytics", "SEO"],
    icon: TrendingUp,
    color: "text-green-500",
    bg: "bg-green-50/50 dark:bg-green-900/10"
  }
];

const ExperienceCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0 group"
    >
      {/* Timeline Line (Desktop: Center) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-zinc-800 -translate-x-1/2 transform" />

      {/* Timeline Line (Mobile: Left) */}
      <div className="md:hidden absolute left-[19px] top-0 bottom-0 w-px bg-gray-200 dark:bg-zinc-800" />

      {/* Content Layout */}
      <div className={`md:flex items-center justify-between gap-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

        {/* Empty Spacer for alternating layout */}
        <div className="hidden md:block w-1/2" />

        {/* Center Node */}
        <div className="absolute left-[11px] md:left-1/2 top-0 -translate-x-1/2 flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full border-4 border-white dark:border-zinc-950 shadow-sm flex items-center justify-center z-10 ${item.bg} ${item.color}`}>
            <item.icon size={14} strokeWidth={2.5} />
          </div>
        </div>

        {/* Card Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div className="relative p-6 md:p-8 bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            {/* Header */}
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {item.role}
                </h3>
                {/* Mobile Date */}
                <span className="md:hidden text-[10px] uppercase font-bold text-gray-400 bg-gray-50 dark:bg-zinc-800 px-2 py-1 rounded-md whitespace-nowrap">
                  {item.period.replace(' – ', '-')}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-zinc-400">
                <Briefcase size={14} className="opacity-70" />
                {item.company}
              </div>
            </div>

            {/* Description */}
            <p className="font-body text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Footer: Tech/Skills & Desktop Date */}
            <div className="flex items-center justify-between border-t border-gray-100 dark:border-zinc-800 pt-4 mt-2">
              <div className="flex flex-wrap gap-2">
                {item.skills.map(skill => (
                  <span key={skill} className="px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-500">
                    {skill}
                  </span>
                ))}
              </div>
              {/* Desktop Date */}
              <span className="hidden md:flex items-center gap-1.5 text-xs font-mono font-bold text-gray-400 dark:text-zinc-500">
                <Calendar size={12} />
                {item.period}
              </span>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="min-h-screen bg-primary-bg pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-20 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
            Journey.
          </h1>
          <p className="font-body text-xl text-secondary-text max-w-2xl mx-auto">
            Professional milestones and the path I've walked so far.
          </p>
        </div>

        <div className="relative space-y-2 md:space-y-12">
          {/* Vertical Line Connector for the whole track */}
          <div className="absolute left-[19px] md:left-1/2 top-4 bottom-20 w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent dark:from-zinc-800 dark:via-zinc-800 -translate-x-1/2" />

          {experienceData.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
