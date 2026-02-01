import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
    return (
        <section className="w-full py-32 px-6 bg-primary-bg border-t border-primary-border overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-secondary-text/60">Professional Background</span>
                            <h2 className="font-heading text-4xl md:text-5xl font-black text-primary-text leading-tight tracking-tighter"> Engineering <br /> with Intent. </h2>
                        </div>

                        <div className="space-y-4 font-body text-lg text-secondary-text leading-relaxed">
                            <p>
                                Currently pursuing a Bachelor of Computer Science, I bridge the gap between academic theory and practical engineering. My focus lies in building scalable architectures and intuitive interfaces.
                            </p>
                            <p className="text-base text-secondary-text/70">
                                Beyond the terminal, I invest in fitness and content creation—disciplines that sharpen my focus, creativity, and ability to communicate complex ideas effectively.
                            </p>
                        </div>

                        <Link to="/about" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-text hover:opacity-70 transition-opacity">
                            <span className="pb-1">Discover the Journey</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden border border-primary-border bg-card-bg shadow-2xl relative">
                            {/* Modern Software-like UI details */}
                            <div className="absolute top-0 left-0 right-0 h-10 border-b border-primary-border bg-primary-bg/50 backdrop-blur-md flex items-center px-4 gap-2 z-10">
                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                <div className="w-2 h-2 rounded-full bg-amber-400" />
                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            </div>
                            <div className="w-full h-full pt-10 p-6 font-mono text-xs text-secondary-text leading-loose overflow-hidden">
                                <span className="text-blue-500">class</span> <span className="text-emerald-500">TahaShaikh</span> {'{'} <br />
                                &nbsp;&nbsp;<span className="text-purple-500">constructor</span>() {'{'} <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;this.<span className="text-blue-400">role</span> = <span className="text-emerald-400">'Fullstack Engineer'</span>; <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;this.<span className="text-blue-400">focus</span> = [<span className="text-emerald-400">'Performance'</span>, <span className="text-emerald-400">'Scalability'</span>]; <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;this.<span className="text-blue-400">status</span> = <span className="text-emerald-400">'Building the future'</span>; <br />
                                &nbsp;&nbsp;{'}'} <br />
                                <br />
                                &nbsp;&nbsp;<span className="text-purple-500">getProfession</span>() {'{'} <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">return</span> <span className="text-blue-400">`Currently studying CS, mastering the web.`</span>; <br />
                                &nbsp;&nbsp;{'}'} <br />
                                {'}'}
                                <div className="mt-8 p-4 rounded-xl border border-primary-border bg-primary-bg/80">
                                    <p className="text-[10px] text-secondary-text leading-normal italic">
                                        "Software is not just code. It's the art of managing complexity and delivering value with precision."
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary-text/5 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
