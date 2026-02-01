import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter, Search } from 'lucide-react';

const allProjectsData = [
  {
    id: "proj-1",
    name: "BiznorX Website",
    year: "2024",
    category: "website",
    description: "Business website built for real-world usage, focusing on performance, clean UI, and responsive design. Responsibilities included website structure, UI development, deployment setup, and client-ready implementation.",
    tech: ["React", "WordPress", "Tailwind"],
    image: "/images/biznorx.png",
    liveLink: "https://biznorx.com",
    githubLink: "#",
  },
  {
    id: "proj-3",
    name: "Design System V2",
    year: "2024",
    category: "design",
    description: "Atomic design components for consistent software interface delivery.",
    tech: ["React", "Framer Motion", "Storybook"],
    image: "/images/078.png",
    liveLink: "#",
    githubLink: "#",
  }
];

const categoryTabs = ["All", "website", "software", "design"];

const Projects = () => {
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
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
            My Projects
          </h1>
          <p className="font-body text-lg text-gray-600 dark:text-zinc-400 max-w-2xl">
            A complete archive of my works, side projects, and design experiments.
          </p>
        </div>

        {/* Controls Section (Filter & Search) - Full Width */}
        <div className="sticky top-17 z-40 bg-white rounded-2xl dark:bg-zinc-950  border-y border-gray-100 dark:border-zinc-800 mb-8 -mx-6 px-6">
          <div className="max-w-7xl mx-auto py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categoryTabs.map((cat) => (
                  <button
                    key={`cat-tab-${cat}`}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${selectedCategory === cat
                      ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-md shadow-black/5"
                      : "bg-white dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 border-gray-200 dark:border-zinc-800 hover:border-black dark:hover:border-white"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500" size={14} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 dark:border-zinc-800 focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all bg-white dark:bg-zinc-900 text-black dark:text-white text-sm font-body shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id || project.name}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  {/* Image Area */}
                  <div className="relative w-full aspect-video bg-gray-100 dark:bg-zinc-900 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.liveLink}
                        className="p-3 bg-white dark:bg-zinc-100 rounded-full hover:scale-110 transition-transform text-black dark:text-zinc-900"
                        title="View Live"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-black dark:text-white shadow-sm border border-transparent dark:border-zinc-800">
                      {project.category}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-1.5">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors tracking-tight">
                          {project.name}
                        </h3>
                        <span className="text-[9px] font-mono text-secondary-text/60 uppercase tracking-widest mt-0.5 block">Build: {project.year}</span>
                      </div>
                    </div>

                    <p className="font-body text-gray-600 dark:text-zinc-400 mb-4 text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, idx) => (
                          <span key={`tech-tag-${project.id}-${idx}`} className="px-2 py-1 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-md text-xs font-mono text-gray-500 dark:text-zinc-500">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

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
    </div>
  );
};

export default Projects;
