import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                y: '-100%',
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[200] bg-bg-primary flex flex-col items-center justify-center"
        >
            <div className="relative flex flex-col items-center">
                {/* Animated Logo/Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 overflow-hidden"
                >
                    <span className="text-4xl font-black tracking-[0.5em] text-white">
                        OMKAR
                    </span>
                </motion.div>

                {/* Progress Number */}
                <div className="text-6xl font-black text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                    {percentage}%
                </div>

                {/* Modern Progress Line */}
                <div className="w-48 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-accent-gradient"
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>

                {/* Bottom Status */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 flex items-center gap-3 text-dim text-[10px] uppercase tracking-[0.3em] font-bold"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-3 h-3 border border-accent-primary border-t-transparent rounded-full"
                    />
                    Initing Systems...
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
