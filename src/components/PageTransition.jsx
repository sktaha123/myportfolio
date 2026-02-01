import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        x: '100%',
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: '-100%',
        opacity: 0,
    },
};

const pageTransition = {
    type: 'tween',
    ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth carousel feel
    duration: 0.3,
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            style={{
                position: 'relative',
                width: '100%',
            }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
