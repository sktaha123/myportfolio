import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cursor = () => {
    const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'text'
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                // Direct DOM for 1:1 speed (zero latency)
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer');

            const isTextField = target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.isContentEditable;

            let newType = 'default';
            if (isTextField) newType = 'text';
            else if (isClickable) newType = 'pointer';

            setCursorType(prev => prev !== newType ? newType : prev);
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-99999 hidden md:block"
            style={{ willChange: 'transform', transition: 'none' }}
        >
            <div className="relative -translate-x-[2px] -translate-y-[2px]">
                <AnimatePresence mode="wait">
                    {cursorType === 'text' && (
                        <motion.div
                            key="text"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.05 }}
                        >
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
                                <path d="M5 2V18M2 2H8M2 18H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary-text" />
                            </svg>
                        </motion.div>
                    )}

                    {cursorType === 'pointer' && (
                        <motion.div
                            key="pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.05 }}
                        >
                            {/* Matched to exactly 16px-18px to align with the arrow weight */}
                            <img
                                src="/images/blackfinger1.png"
                                alt="pointer"
                                className="w-3 h-3 object-contain dark:invert"
                                style={{ transform: 'translate(-5%, -5%)' }}
                            />
                        </motion.div>
                    )}

                    {cursorType === 'default' && (
                        <motion.div
                            key="default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, rotate: 10  }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.05 }}
                            style={{ transformOrigin: 'top left' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary-text">
                                <path d="M3 3L10.5 21L13.5 13.5L21 10.5L3 3Z" stroke="var(--bg-primary)" strokeWidth="1" />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Cursor;
