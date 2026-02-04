import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <motion.div
            whileHover={hover ? { translateY: -8, transition: { duration: 0.3 } } : {}}
            className={`glass ${hover ? 'glass-hover' : ''} p-6 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
