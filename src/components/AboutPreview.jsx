import React from 'react';
import { ArrowRight, Code2, Database, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
    return (
        <section className="w-full py-24 px-6 bg-gray-50 dark:bg-zinc-900 overflow-hidden">
            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* 1. Text Content Side */}
                <div className="order-2 lg:order-1 space-y-8">
                    <div className="space-y-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-zinc-500">The Journey</span>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white leading-tight">
                            Engineering with <br />
                            <span className="text-gray-400 dark:text-zinc-600">Intent & Precision.</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg text-gray-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                        <p>
                            Currently pursuing my Bachelor's in Computer Science, I operate at the intersection of solid engineering principles and modern frontend frameworks.
                        </p>
                        <p>
                            My workflow is simple: <span className="text-black dark:text-white font-semibold">Build scalable systems</span>, prioritize user experience, and never stop learning new paradigms.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500 hover:border-black dark:hover:border-white transition-colors cursor-default">
                            <Layout size={14} /> Frontend
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500 hover:border-black dark:hover:border-white transition-colors cursor-default">
                            <Database size={14} /> Backend
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500 hover:border-black dark:hover:border-white transition-colors cursor-default">
                            <Code2 size={14} /> Architecture
                        </div>
                    </div>

                    <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="group inline-flex items-center gap-3 font-bold text-black dark:text-white mt-4 border-b-2 border-transparent hover:border-black dark:hover:border-white pb-1 transition-all">
                        More About Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* 2. Visual / Code Block Side */}
                <div className="order-1 lg:order-2 relative">
                    <div className="relative rounded-[2.5rem] bg-white dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800 p-8 md:p-12 shadow-2xl shadow-gray-200 dark:shadow-black/50">
                        {/* Decorative IDE Header */}
                        <div className="flex items-center gap-2 mb-8 opacity-50">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>

                        <div className="font-mono text-sm md:text-base leading-loose">
                            <div className="text-gray-400 dark:text-zinc-600 mb-4">// Core Philosophy</div>
                            <div className="text-black dark:text-white">
                                <span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = <span className="text-yellow-600 dark:text-yellow-400">{'{'}</span><br />
                                &nbsp;&nbsp;name: <span className="text-green-600 dark:text-green-400">'Taha Shaikh'</span>,<br />
                                &nbsp;&nbsp;passion: <span className="text-green-600 dark:text-green-400">'Building Robust Systems'</span>,<br />
                                &nbsp;&nbsp;stack: [<span className="text-green-600 dark:text-green-400">'React'</span>, <span className="text-green-600 dark:text-green-400">'Node'</span>, <span className="text-green-600 dark:text-green-400">'Next.js'</span>],<br />
                                &nbsp;&nbsp;mission: <span className="text-purple-600 dark:text-purple-400">()</span> <span className="text-blue-600 dark:text-blue-400">=&gt;</span> <span className="text-green-600 dark:text-green-400">'Deliver Excellence'</span><br />
                                <span className="text-yellow-600 dark:text-yellow-400">{'}'}</span>;
                            </div>
                        </div>

                        {/* Abstract Shape Background */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutPreview;
