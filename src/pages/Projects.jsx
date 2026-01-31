import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter, Search } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    name: "BiznorX Website",
    category: "Website",
    description: "Business website built for real-world usage, focusing on performance, clean UI, and responsive design. Responsibilities included website structure, UI development, deployment setup, and client-ready implementation.",
    tech: ["React", "WordPress", "Modern web tools"],
    image: "/images/biznorx.png", // Ensure this image exists or use a placeholder
    liveLink: "#",
    githubLink: "#",
  }
];

const categories = ["All", "Website"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-primary-bg pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-black dark:text-white mb-6"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-body text-lg text-gray-600 dark:text-zinc-400 max-w-2xl"
          >
            A complete archive of my works, side projects, and design experiments.
          </motion.p>
        </div>

        {/* Controls Section (Filter & Search) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 sticky top-[68px] z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm py-4 border-b border-gray-100 dark:border-zinc-800">

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === cat
                  ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                  : "bg-white dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 border-gray-200 dark:border-zinc-800 hover:border-black dark:hover:border-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 dark:border-zinc-800 focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all bg-white dark:bg-zinc-900 text-black dark:text-white font-body"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-zinc-900/50 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image Area */}
                <div className="relative aspect-video bg-gray-100 dark:bg-zinc-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-zinc-800 animate-pulse" />
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveLink}
                      className="p-3 bg-white dark:bg-zinc-100 rounded-full hover:scale-110 transition-transform text-black dark:text-zinc-900"
                      title="View Live"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-black dark:text-white shadow-sm border border-transparent dark:border-zinc-800">
                    {project.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <p className="font-body text-gray-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-md text-xs font-mono text-gray-500 dark:text-zinc-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <div className="inline-block p-4 rounded-full bg-gray-100 dark:bg-zinc-900 mb-4 text-gray-400 dark:text-zinc-600">
              <Filter size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-zinc-400">No projects found.</h3>
            <p className="text-gray-500 dark:text-zinc-500">Try adjusting your search or filters.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;
