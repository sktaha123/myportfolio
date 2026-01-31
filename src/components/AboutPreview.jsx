import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
    return (
        <section className="w-full py-24 px-6 bg-primary-bg border-t border-primary-border">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="font-heading text-3xl font-bold mb-6">About Me</h2>
                    <p className="font-body text-lg md:text-xl text-secondary-text mb-8 leading-relaxed max-w-2xl mx-auto">
                        I am currently pursuing a Bachelor of Computer Science and working toward becoming a professional full-stack developer. I enjoy building practical web solutions, learning modern technologies, and improving through real-world projects.
                    </p>
                    <p className="font-body text-base text-secondary-text opacity-60 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Alongside technology, I actively pursue fitness and content creation, which help develop discipline, creativity, and communication skills that complement my technical journey.
                    </p>
                    <Link to="/about" className="inline-flex items-center gap-2 font-semibold border-b border-gray-300 dark:border-zinc-700 pb-1 hover:border-black dark:hover:border-white transition-all font-heading">
                        Learn More About Me <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPreview;
