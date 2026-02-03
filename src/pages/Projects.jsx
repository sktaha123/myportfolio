import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter, Search, ArrowUpRight, FolderOpen } from 'lucide-react';
import { allProjectsData, categoryTabs } from '../data/projects';

const Projects = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjectsData.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-primary-bg pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-[90rem] mx-auto">

        {/* Header Section */}
        <div className="mb-12 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-heading text-4xl md:text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">
              All  Works
            </h1>
            <p className="font-body text-xl text-secondary-text max-w-2xl">
              A collection of digital products, experiments, and open source contributions.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-900 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-500">
            <FolderOpen size={14} />
            <span>{filteredProjects.length} Projects Found</span>
          </div>
        </div>

        {/* Controls Section (Filter & Search) - Sticky */}
        <div className="sticky top-[67px] z-40 bg-white/80 dark:bg-zinc-900/80 border-y 2xl:border border-gray-100 dark:border-zinc-800 mb-12 -mx-6 2xl:mx-auto px-6 backdrop-blur-xl 2xl:max-w-[90rem] 2xl:rounded-2xl transition-all duration-300">
          <div className="max-w-[90rem] mx-auto py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

              {/* Categories */}
              <div className="flex flex-wrap gap-2 pb-1 md:pb-0">
                {categoryTabs.map((cat) => (
                  <button
                    key={`cat-tab-${cat}`}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${selectedCategory === cat
                      ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-lg shadow-black/10 scale-105"
                      : "bg-transparent text-gray-500 dark:text-zinc-500 border-transparent hover:bg-gray-100 dark:hover:bg-zinc-800"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-80 shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500 transition-colors group-focus-within:text-black dark:group-focus-within:text-white" size={16} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-full bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all text-black dark:text-white text-sm font-medium shadow-inner"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id || project.name}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="group cursor-pointer flex flex-col gap-3 md:gap-0 bg-transparent md:bg-white md:dark:bg-zinc-900 md:rounded-[2rem] overflow-hidden md:border md:border-gray-100 md:dark:border-zinc-800 md:shadow-sm md:hover:shadow-2xl md:hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image Area */}
              <div className="relative aspect-video md:aspect-video rounded-2xl md:rounded-none overflow-hidden bg-gray-100 dark:bg-zinc-800 border md:border-none border-gray-100 dark:border-zinc-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Desktop Overlay Gradient */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Desktop Top Right Action */}
                <div className="hidden md:block absolute top-4 right-4 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="p-3 bg-white dark:bg-zinc-950 rounded-full text-black dark:text-white shadow-lg">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Category Badge - Visible on all but positioned differently for mobile if needed, keeping simple for now */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4">
                  <span className="px-2 py-0.5 md:px-3 md:py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-black dark:text-white shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="py-2 px-1 md:p-8 flex flex-col md:h-[220px]">
                <div className="flex justify-between items-start mb-1 md:mb-4">
                  <h3 className="font-heading text-md md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-text transition-colors">
                    {project.name}
                  </h3>
                  <span className="hidden md:inline-block text-xs font-mono font-bold text-gray-400 dark:text-zinc-600 border border-gray-100 dark:border-zinc-800 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>

                <p className="hidden md:block font-body text-sm text-gray-500 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-6 flex-1">
                  {project.description}
                </p>

                <div className="hidden md:flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-50 dark:bg-zinc-800 rounded-md text-[10px] uppercase font-bold text-gray-500 dark:text-zinc-500 border border-gray-100 dark:border-zinc-800">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 bg-gray-50 dark:bg-zinc-800 rounded-md text-[10px] font-bold text-gray-400 dark:text-zinc-600">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-32 flex flex-col items-center justify-center text-center opacity-60">
            <div className="w-20 h-20 bg-gray-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-6">
              <Filter size={32} className="text-gray-400 dark:text-zinc-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-500 dark:text-zinc-400 max-w-xs mx-auto">
              We couldn't find any projects matching your search or filter.
            </p>
          </div>
        )}

      </div>
    </div >
  );
};

export default Projects;
