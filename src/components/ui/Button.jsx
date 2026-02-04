import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
    const variants = {
        primary: 'bg-accent-gradient text-white shadow-lg shadow-accent-primary/20',
        outline: 'glass hover:bg-white/10 text-white border-white/10',
        ghost: 'text-secondary hover:text-white',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`
                inline-flex items-center justify-center font-bold rounded-full transition-all duration-300
                ${variants[variant]} ${sizes[size]} ${className}
            `}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
