import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projectsitems = [
    {
        id: 1,
        name: "Portfolio V1",
        description: "A personal portfolio website built with React and Tailwind CSS. Features include a clean, minimalist design.",
        tech: ["React", "Tailwind", "Framer Motion"],
        image: "/images/project1.png",
        liveLink: "#",
    },
    {
        id: 2,
        name: "E-Commerce Dash",
        description: "Comprehensive admin dashboard for e-commerce platforms with real-time analytics.",
        tech: ["Next.js", "TypeScript", "Recharts"],
        image: "/images/project2.png",
        liveLink: "#",
    },
    {
        id: 3,
        name: "Task Master",
        description: "Productivity app with DnD functionality and Firebase sync.",
        tech: ["React", "Firebase", "DnD"],
        image: "/images/project3.png",
        liveLink: "#",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const Projects = () => {
    return (
        <section className="w-full py-32 px-6 bg-white dark:bg-zinc-950" id="projects">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-100 dark:border-zinc-800 pb-8"
                >
                    <div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">Selected Works</h2>
                        <p className="font-body text-xl text-gray-500 dark:text-zinc-400 max-w-lg">
                            A collection of projects where design meets engineering.
                        </p>
                    </div>
                    <Link
                        to="/projects"
                        onClick={() => window.scrollTo(0, 0)}
                        className="mt-6 md:mt-0 text-lg font-medium border-b border-black dark:border-white text-black dark:text-white pb-1 hover:text-gray-600 dark:hover:text-gray-400 hover:border-gray-400 transition-colors inline-flex items-center gap-2"
                    >
                        View Archive <ArrowUpRight size={18} />
                    </Link>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {projectsitems.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group cursor-pointer flex flex-col h-full"
                        >
                            {/* Image Box */}
                            <div className="relative aspect-[4/3] bg-gray-100 dark:bg-zinc-900 rounded-2xl overflow-hidden mb-6 transition-all duration-700 ease-[0.22, 1, 0.36, 1] group-hover:scale-[1.02] group-hover:shadow-2xl">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => e.target.style.display = 'none'}
                                />
                                <div className="absolute inset-0 bg-black/10 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Text Content */}
                            <div className="mt-auto">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                                        {project.name}
                                    </h3>
                                    <div className="p-2 rounded-full border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>

                                <p className="font-body text-base text-gray-500 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-mono text-gray-400 dark:text-zinc-500 border border-gray-200 dark:border-zinc-800 px-3 py-1 rounded-full bg-gray-50 dark:bg-zinc-900 uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;
