import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Briefcase, User, Cpu, Mail, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const mobileNavItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Work', path: '/projects', icon: Briefcase },
    { name: 'Skills', path: '/skills', icon: Cpu },
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: Mail },
];

const BottomNav = () => {
    const location = useLocation();

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-200 pointer-events-none">
            <div className="w-full pointer-events-auto">
                <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-t border-primary-border shadow-2xl flex items-center justify-around px-2 pt-2 pb-6 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-text rounded-full blur-2xl" />
                    </div>

                    {mobileNavItems.map((item) => {
                        const isItemActive = location.pathname === item.path;
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={`bottom-nav-${item.path}`}
                                to={item.path}
                                className={`
                                    relative flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300 flex-1
                                    ${isItemActive
                                        ? "text-primary-text"
                                        : "text-secondary-text hover:text-primary-text"}
                                `}
                            >
                                <motion.div
                                    animate={isItemActive ? { y: -2 } : { y: 0 }}
                                    className="relative z-10"
                                >
                                    <Icon size={18} strokeWidth={isItemActive ? 2.5 : 2} />
                                </motion.div>
                                <span className={`text-[9px] font-bold uppercase tracking-tighter mt-1 z-10 ${isItemActive ? 'opacity-100' : 'opacity-60'}`}>
                                    {item.name}
                                </span>

                                {isItemActive && (
                                    <motion.div
                                        layoutId="bottom-nav-indicator"
                                        className="absolute inset-0 bg-primary-text/5 dark:bg-white/5 rounded-xl border border-primary-text/10"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default BottomNav;
