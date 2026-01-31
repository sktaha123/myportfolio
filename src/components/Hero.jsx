import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-primary-bg overflow-hidden flex items-center justify-center pt-20">

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* Text Content */}
        <div className="col-span-1 md:col-span-7 space-y-8 md:order-1">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="font-heading text-6xl md:text-8xl font-extrabold text-primary-text leading-[0.9] tracking-tighter"
            >
              Digital <br /> <span className="opacity-30">Experience</span> <br /> Crafter.
            </motion.h1>
          </div>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="font-body text-xl text-secondary-text max-w-lg leading-relaxed"
          >
            Transforming complex logic into seamless, performant, and beautiful web interfaces using modern technologies.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/projects" className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
              View My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-black dark:text-white rounded-full font-bold flex items-center gap-2 hover:border-black dark:hover:border-white transition-all hover:scale-105 active:scale-95">
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Profile Image Column */}
        <div className="col-span-1 md:col-span-5 relative md:order-2 flex items-center justify-center">
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-sm md:max-w-md aspect-4/5 rounded-3xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-zinc-800"
          >
            {/* Image */}
            <img
              src="/images/taha.png"
              alt="Taha Sk"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;