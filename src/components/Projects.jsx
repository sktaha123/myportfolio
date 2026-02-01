import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projectsitems = [
    {
        id: "feat-1",
        name: "BiznorX Website",
        year: "2024",
        description: "A professional business platform optimized for performance and conversion-driven UI.",
        tech: ["React", "WordPress", "Tailwind"],
        image: "/images/biznorx.png",
        liveLink: "https://biznorx.com",
    },
    {
        id: "feat-3",
        name: "Digital Interface",
        year: "2024",
        description: "Minimalist user experience design focusing on precision and software aesthetics.",
        tech: ["React", "Framer Motion", "GSAP"],
        image: "/images/078.png",
        liveLink: "#",
    }
];

const Projects = () => {
    return (
        <section className="w-full py-32 px-6 bg-white dark:bg-zinc-950 relative overflow-hidden" id="projects">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col items-start md:flex-row md:items-end justify-between mb-16 border-b border-primary-border pb-8">
                    <div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">Selected Works</h2>
                        <p className="font-body text-xl text-gray-500 dark:text-zinc-400 max-w-lg">
                            A collection of projects where design meets engineering.
                        </p>
                    </div>
                    <Link
                        to="/projects"
                        onClick={() => window.scrollTo(0, 0)}
                        className="mt-6 md:mt-0 text-xs font-bold uppercase tracking-widest border-b border-primary-text text-primary-text pb-1 hover:text-secondary-text hover:border-secondary-text transition-all inline-flex items-center gap-2 w-fit"
                    >
                        View Archive <ArrowUpRight size={14} />
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsitems.map((project) => (
                        <div
                            key={project.id}
                            className="group cursor-pointer flex flex-col h-full bg-card-bg border border-primary-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Box */}
                            <div className="relative aspect-video overflow-hidden border-b border-primary-border">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Text Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-primary-text tracking-tight">
                                            {project.name}
                                        </h3>
                                        <span className="text-[9px] font-mono text-secondary-text/60 uppercase tracking-widest mt-0.5 block">Build: {project.year}</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-primary-border flex items-center justify-center group-hover:bg-primary-text group-hover:text-primary-bg transition-all duration-500">
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>

                                <p className="font-body text-xs text-secondary-text leading-relaxed mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-1.5">
                                    {project.tech.map((t, idx) => (
                                        <span key={`${t}-${idx}`} className="text-[10px] font-mono font-medium text-secondary-text border border-primary-border px-2.5 py-1 rounded-md bg-white dark:bg-zinc-900/50 uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
