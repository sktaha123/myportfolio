import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-primary-bg overflow-hidden flex items-center justify-center pt-32 pb-20">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.9] dark:opacity-[0.8]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[40px_40px] text-primary-text/10" />
      </div>


      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">

        {/* Profile Image Column - Appears First on Mobile */}
        <div className="col-span-1 md:col-span-5 relative order-1 md:order-2 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-4/5 md:w-full max-w-[280px] md:max-w-sm aspect-4/5 rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800"
          >
            <img
              src="/images/taha.webp"
              alt="Taha Sk"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-1000"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="col-span-1 md:col-span-7 space-y-8 md:space-y-10 order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-border bg-card-bg/50 backdrop-blur-sm shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-secondary-text">Available for new projects</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-heading text-4xl md:text-7xl font-extrabold text-primary-text leading-[0.9] md:leading-[0.8] tracking-[-0.04em]"
              >
                Building <br className="hidden md:block" /> High-End <br /> <span className="text-secondary-text/30 italic font-medium">Software</span>
              </motion.h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="font-body text-lg md:text-xl text-secondary-text max-w-lg leading-relaxed md:border-l-2 border-primary-border md:pl-6"
          >
            Specialized in crafting performant, scalable, and aesthetically superior digital products with modern engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3"
          >
            <Link to="/projects" className="group px-6 py-3 bg-primary-text text-primary-bg rounded-xl text-sm font-semibold flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary-text/10">
              View Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-card-bg border border-primary-border text-primary-text rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-primary-border/50 transition-all active:scale-[0.98]">
              Contact
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;