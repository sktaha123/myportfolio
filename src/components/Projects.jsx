import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { allProjectsData } from '../data/projects';

const Projects = () => {
    const navigate = useNavigate();
    // Use first 3 projects for the featured section
    const featuredProjects = allProjectsData.slice(0, 3);

    return (
        <section className="w-full py-20 px-6 bg-white dark:bg-zinc-950">
            <div className="max-w-[90rem] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-black dark:text-white">My Works</h2>
                    </div>
                    <Link to="/projects" onClick={() => window.scrollTo(0, 0)} className="group flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                        View All Projects <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => navigate(`/projects/${project.id}`)}
                            className="group cursor-pointer flex flex-col gap-4"
                        >
                            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                <div className="absolute top-4 right-4 p-2 bg-white dark:bg-zinc-950 rounded-full text-black dark:text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>

                            {/* Short Title & Subtitle Left Aligned */}
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-zinc-300 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-xs text-gray-400 dark:text-zinc-500 font-mono uppercase tracking-wider">
                                    {project.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
