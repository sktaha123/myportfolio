import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
    return (
        <section className="w-full py-32 px-6 bg-primary-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative bg-white dark:bg-zinc-900 border border-primary-border rounded-[2.5rem] p-10 md:p-20 overflow-hidden shadow-2xl shadow-black/5 dark:shadow-white/5"
                >
                    {/* Technical Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Adaptive Glow Decoration */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-text/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-text/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
                        <div className="space-y-8 max-w-2xl">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.5, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                                />
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary-text">
                                    Current Status: Available for Work
                                </span>
                            </div>

                            <div className="space-y-4">
                                <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-text tracking-[-0.04em] leading-[0.9]">
                                    Let's Build <br />
                                    <span className="text-secondary-text/30 dark:text-secondary-text/20">Something</span> <br />
                                    Extraordinary.
                                </h2>
                                <p className="font-body text-secondary-text text-lg md:text-xl leading-relaxed max-w-lg pt-4">
                                    I am open to <span className="text-primary-text font-semibold">internships</span>, freelance projects, and collaborations where I can contribute and grow.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-primary-border max-w-sm">
                                <div>
                                    <p className="text-[10px] font-mono text-secondary-text/50 uppercase tracking-widest mb-1">Focus</p>
                                    <p className="text-sm font-bold text-primary-text uppercase tracking-tight">Software Eng.</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-mono text-secondary-text/50 uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-sm font-bold text-primary-text uppercase tracking-tight">Remote / Mumbai</p>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary-text text-primary-bg rounded-2xl text-sm font-bold uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary-text/10 shrink-0"
                        >
                            Get In Touch
                            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Geometric Accent Decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-primary-border/20 -translate-x-16 -translate-y-16 rounded-tl-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-primary-border/20 translate-x-16 translate-y-16 rounded-br-full" />
        </section>
    );
};

export default CallToAction;
