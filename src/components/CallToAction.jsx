import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="w-full py-24 px-6 bg-primary-bg border-t border-primary-border">
            <div className="max-w-7xl mx-auto">
                <div className="bg-black dark:bg-zinc-900 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                            Let's Build Something Together
                        </h2>
                        <p className="font-body text-gray-400 dark:text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
                            I am open to internships, freelance opportunities, collaborations, and real-world development projects where I can contribute and grow as a developer.
                        </p>

                        <div className="pt-8">
                            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-100 text-black dark:text-zinc-900 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                                Contact Me <Mail size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
