import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="relative w-full py-24 px-6 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 overflow-hidden border-y border-zinc-200 dark:border-zinc-800">
            {/* Grid Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.08] dark:opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">

                {/* Left: Heading & Status */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 dark:bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600 dark:bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Available for Work</span>
                    </div>

                    <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                        Let's Build <br />
                        <span className="text-zinc-400 dark:text-zinc-500">Something</span> <br />
                        <span className="text-zinc-400 dark:text-zinc-500">Iconic.</span>
                    </h2>
                </div>

                {/* Right: Interaction & Details */}
                <div className="lg:mb-4 space-y-10">
                    <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
                        I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/contact"
                            onClick={() => window.scrollTo(0, 0)}
                            className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-8 py-5 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-xl"
                        >
                            Start a Project <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CallToAction;
