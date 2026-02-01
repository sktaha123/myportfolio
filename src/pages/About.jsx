import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Star, CheckCircle2, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "Full Stack Web Development",
    issuer: "Udemy / Meta",
    date: "2024",
    image: "/images/cert-fullstack.png"
  },
  {
    name: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "2023",
    image: "/images/cert-react.png"
  },
  {
    name: "UI/UX Design Essentials",
    issuer: "Google / Coursera",
    date: "2023",
    image: "/images/cert-uiux.png"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-primary-bg text-primary-text pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-start">

          {/* Left Column: Image and Sidebar Info */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8 order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="group relative rounded-3xl overflow-hidden aspect-4/5 bg-gray-100 dark:bg-zinc-900 border border-primary-border shadow-2xl max-w-md mx-auto lg:max-w-none"
            >
              <img
                src="/images/taha.webp"
                alt="Taha Shaikh"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white text-xs font-medium uppercase tracking-widest">Building since 2023</p>
              </div>
            </motion.div>

            {/* Desktop-only Sidebar content (hidden on mobile, moved below bio) */}
            <div className="hidden lg:block space-y-8">
              <div className="p-6 bg-white dark:bg-zinc-900/50 border border-primary-border rounded-2xl space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-secondary-text flex items-center gap-2">
                  <Star size={14} className="text-yellow-500" /> Core Philosophy
                </h3>
                <p className="font-body text-sm text-secondary-text leading-relaxed italic">
                  "Precision in logic, beauty in interface. I believe software should feel as good as it functions."
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-zinc-900/50 border border-primary-border rounded-2xl space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-text">Functional Strengths</h2>
                <div className="space-y-4">
                  {[
                    "Modern UI Engineering",
                    "Responsive Architecture",
                    "Performance Tuning",
                    "Atomic Design Systems",
                    "Technical Discipline",
                    "Client Collaboration"
                  ].map(strength => (
                    <div key={strength} className="flex items-center gap-3 group">
                      <CheckCircle2 size={14} className="text-primary-text/20 group-hover:text-primary-text transition-colors" />
                      <span className="text-sm font-semibold text-secondary-text transition-colors group-hover:text-primary-text font-body">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-8 space-y-12 md:space-y-20 order-2">

            {/* Bio Section */}
            <section className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-text">Biography</h2>
              <div className="space-y-4 max-w-2xl">
                <p className="font-heading text-xl md:text-2xl font-bold text-primary-text leading-tight tracking-tight">
                  I am a Computer Science student currently bridging the gap between theoretical engineering and modern web development.
                </p>
                <p className="font-body text-secondary-text leading-relaxed">
                  My journey started with a curiosity for how digital platforms are constructed, which quickly evolved into a passion for React-based software engineering. I focus on creating high-performance, accessible, and visually stunning web applications.
                </p>
              </div>
            </section>

            {/* Mobile-only Philosophy & Strengths (appearing after Bio) */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-zinc-900/50 border border-primary-border rounded-2xl space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-secondary-text flex items-center gap-2">
                  <Star size={14} className="text-yellow-500" /> Core Philosophy
                </h3>
                <p className="font-body text-sm text-secondary-text leading-relaxed italic">
                  "Precision in logic, beauty in interface. I believe software should feel as good as it functions."
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-zinc-900/50 border border-primary-border rounded-2xl space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-text">Functional Strengths</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                  {[
                    "Modern UI Engineering",
                    "Responsive Architecture",
                    "Performance Tuning",
                    "Atomic Design Systems",
                    "Technical Discipline",
                    "Client Collaboration"
                  ].map(strength => (
                    <div key={strength} className="flex items-center gap-3 group">
                      <CheckCircle2 size={14} className="text-primary-text/20 group-hover:text-primary-text transition-colors" />
                      <span className="text-xs font-semibold text-secondary-text transition-colors group-hover:text-primary-text font-body">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {/* Education Section */}
              <section className="space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-text flex items-center gap-2">
                  <GraduationCap size={14} /> Education
                </h2>
                <div className="relative pl-6 border-l border-primary-border space-y-8">
                  <div>
                    <p className="text-[10px] font-mono font-bold text-secondary-text/50 uppercase mb-1">2023 — Present</p>
                    <h4 className="font-heading font-extrabold text-lg text-primary-text leading-none mb-2">CS Bachelor Degree</h4>
                    <p className="text-xs font-body text-secondary-text">B.K. Birla College, Kalyan</p>

                    <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-mono font-bold">
                      {["Sem 1: 9.45", "Sem 2: 9.00", "Sem 3: 9.25"].map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-50 dark:bg-zinc-800 border border-primary-border rounded text-secondary-text">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Certifications Section */}
              <section className="space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-text flex items-center gap-2">
                  <Award size={14} /> Certifications
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <a
                      key={cert.name}
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-white dark:bg-zinc-900/50 border border-primary-border rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all cursor-pointer"
                    >
                      <div className="w-12 h-10 shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-zinc-800 border border-primary-border relative">
                        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1]"
                          style={{
                            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                            backgroundSize: '10px 10px'
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Award size={14} className="text-secondary-text/20" />
                        </div>
                      </div>

                      <div className="flex-1 flex justify-between items-start">
                        <div className="flex flex-col">
                          <h4 className="font-heading font-bold text-sm text-primary-text group-hover:text-black dark:group-hover:text-white transition-colors leading-tight">{cert.name}</h4>
                          <p className="text-[10px] text-secondary-text/60 uppercase tracking-widest font-bold mt-1 line-clamp-1">{cert.issuer}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0 ml-4 text-right">
                          <span className="text-[10px] font-mono text-secondary-text/40">{cert.date}</span>
                          <ExternalLink size={12} className="text-secondary-text/20 group-hover:text-primary-text transition-colors" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
