import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { allProjectsData } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = allProjectsData.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-primary-bg">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4 text-primary-text">Project not found</h2>
                    <button onClick={() => navigate('/projects')} className="text-primary-text hover:underline">
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary-bg pt-24 pb-20 px-6">
            <div className="max-w-[90rem] mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors mb-8"
                >
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-zinc-900 group-hover:bg-gray-200 dark:group-hover:bg-zinc-800 transition-colors">
                        <ArrowLeft size={18} />
                    </div>
                    <span>Back to Projects</span>
                </button>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-zinc-800"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="inline-block px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                                {project.category}
                            </div>

                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-black dark:text-white mb-6 leading-tight">
                                {project.name}
                            </h1>

                            <div className="flex items-center gap-6 text-sm font-mono text-gray-500 dark:text-zinc-500 mb-8 pb-8 border-b border-gray-100 dark:border-zinc-800">
                                <span>YEAR: {project.year}</span>
                                {project.githubLink && project.githubLink !== "#" && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
                                    >
                                        <Github size={18} />
                                        <span>SOURCE CODE</span>
                                    </a>
                                )}
                            </div>

                            <p className="font-body text-lg md:text-xl text-gray-600 dark:text-zinc-300 leading-relaxed mb-10">
                                {project.description}
                            </p>

                            <div className="mb-12">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-4">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, idx) => (
                                        <span key={`tech-${idx}`} className="px-4 py-2 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-200 rounded-lg text-sm font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-xl hover:scale-105 transition-transform gap-3 shadow-xl"
                            >
                                <ExternalLink size={20} />
                                Visit Live Project
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
